<?php

namespace App\Http\Controllers\Site;

use App\Models\Category;
use App\Models\Product;
use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Stripe\Charge;
use Stripe\Exception\CardException;
use Stripe\Stripe;
use App\Services\EmailService;
use App\Services\LogoService;
use App\Services\SessionService;
use Error;
use Illuminate\Support\Facades\Log;
use Stripe\StripeClient;

class MainController extends \App\Http\Controllers\Controller
{

    public function __construct(
        public SessionService $sessionService,
        public EmailService $emailService,
        public LogoService $logoService,
    ) {
    }
    public function index()
    {
        $categories = Category::where('is_top', 1)
            ->with(['products' => function ($query) {
                $query->limit(1000); // Ensure to fetch only one product per category
            }])
            ->orderBy('id', 'DESC')
            ->get();
        return view('site/main', compact('categories'));
    }

    public function selectColor()
    {

        return view('site/selectcolor');
    }

    public function selectFont()
    {
        return view('site/selectfont');
    }


    public function selectCategory()
    {
        $categories = Category::orderBy('id', 'DESC')->get();
        return view('site/selectcategory', compact('categories'));
    }


    public function selectLogo()
    {

        $category = session('category', null); // Default to null if session data is not set

        // Check if a category ID is available
        if ($category) {
            // Fetch products where `category_id` matches the single category ID
            $products = Product::where('category_id', '=', $category)
                ->orderBy('id', 'DESC')
                ->paginate(10);
        } else {
            // Handle the case where no category ID is available (optional)
            $products = Product::orderBy('id', 'DESC')->get();
        }
        $categories = Category::orderBy('id', 'DESC')->paginate(10);
        return view('site/selectlogo', compact('categories', 'products'));
    }


    public function maker()
    {
        $userId = auth()->user()?->id;
        $image = session('image');
        $product = Product::where('image', $image)->first();
        if ($product) {
            $productId = $product->id;
        }
        $hasOrder = Order::where('product_id', $productId)
            ->where('user_id',  $userId)
            ->exists();
        return view('site/maker', compact('hasOrder'));
    }

    public function thankYou()
    {
        return view('site/thank-you');
    }
    public function declined()
    {
        return view('site/payment-decline');
    }
    public function charge(Request $request)
    {
        Stripe::setApiKey(env('STRIPE_SECRET'));
        $total = $request->input('total');
        $logoEncodedString = $request->input('logoDataUrl');
        $userId = $request->input('userid');
        $productId = $request->input('product-id');
        $stripeToken = $request->input('stripeToken');
        try {
            Charge::create([
                'amount' => $total * 100, // Amount in cents
                'currency' => 'usd',
                'description' => 'Logo charge',
                'source' => $stripeToken
            ]);
            $order = Order::create([
                'user_id' => $userId,
                'product_id' => $productId,
                'amount' => $total
            ]);
            list($type, $logoEncodedString) = explode(';', $logoEncodedString);
            list(, $extension) = explode('/', $type);
            list(, $logoEncodedString) = explode(',', $logoEncodedString);
            $logoString = base64_decode($logoEncodedString);
            $fileName = "{$userId}_{$productId}.{$extension}";
            File::ensureDirectoryExists(public_path('orders'));
            File::put(public_path("orders/$fileName"), $logoString);
            $this->sessionService->clearSessionData();
            $this->emailService->sendLogo($order);
            return redirect()->route('thankyou');
        } catch (CardException $e) {
            return redirect()->route('declined')->with('message', $e->getMessage());
        }
    }
    public function selectLogoCategory($category)
    {

        // Check if a category ID is available
        if ($category) {
            $categoryObj = Category::where('slug', $category)->firstOrFail();

            // Fetch products where `category_id` matches the single category ID
            // $products = Product::where('slug', '=', $category)
            //                    ->orderBy('id', 'DESC')
            //                    ->get();

            $products = Product::whereHas('category', function ($query) use ($category) {
                $query->where('slug', $category);
            })
                ->orderBy('id', 'DESC')
                ->paginate(20);
        } else {
            // Handle the case where no category ID is available (optional)
            $products = Product::orderBy('id', 'DESC')->paginate(20);
        }


        $categories = Category::orderBy('id', 'DESC')->get();
        return view('site/selectlogocategory', compact('categories', 'products', 'category', 'categoryObj'));
    }

    public function preview()
    {

        $userId = auth()->user()?->id;
        $image = session('image');
        $product = Product::where('image', $image)->first();

        if ($product) {
            $productId = $product->id;
        }
        // die($productId."AAAAAA".auth()->user()->id );
        $hasOrder = Order::where('product_id', $productId)
            ->where('user_id',  $userId)
            ->exists();

        return view('site/preview', compact('hasOrder'));
    }

    public function packages()
    {

        return view('site/packages');
    }

    public function checkout()
    {
        return view('site/checkout');
    }

    public function bkthankYou()
    {
        return view('site/thank-you');
    }

    public function bkcharge(Request $request)
    {
        Stripe::setApiKey(env('STRIPE_SECRET'));

        $total = $request->input('total');
        $logoEncodedString = $request->input('logoDataUrl');
        $userId = $request->input('userid');
        $productId = $request->input('product-id');
        $stripeToken = $request->input('stripeToken');

        try {
            Charge::create([
                'amount' => $total * 100, // Amount in cents
                'currency' => 'usd',
                'description' => 'Logo charge',
                'source' => $stripeToken
            ]);

            Order::create([
                'user_id' => $userId,
                'product_id' => $productId,
                'amount' => $total
            ]);

            list($type, $logoEncodedString) = explode(';', $logoEncodedString);
            list(, $extension) = explode('/', $type);
            list(, $logoEncodedString) = explode(',', $logoEncodedString);

            $logoString = base64_decode($logoEncodedString);
            $fileName = "{$userId}_{$productId}.{$extension}";

            File::ensureDirectoryExists(public_path('orders'));

            File::put(public_path("orders/$fileName"), $logoString);

            return view('site.thank-you');
        } catch (CardException $e) {
            return view('site.payment-decline', [
                'errorMessage' => $e->getMessage()
            ]);
        }
    }

    public function saveLogo(Request $request)
    {
        $data = $request->all();
        $this->logoService->saveLogo($data['logoString'], $data['userId'], $data['productId']);
        // $this->sessionService->clearSessionData();
    }

    public function initializeCharge(Request $request)
    {
        $stripe = new StripeClient(env('STRIPE_SECRET'));

        try {
            $checkout_session = $stripe->checkout->sessions->create([
                'payment_method_types' => ['card'],
                'ui_mode' => 'embedded',
                'line_items' => [[
                    # Provide the exact Price ID (e.g. pr_1234) of the product you want to sell
                    'price_data' => [
                        'currency' => 'usd',
                        'product_data' => [
                            'name' => session()->get('package-name'),
                        ],
                        'unit_amount' => (float)$request->input('price') * 100, // Amount in cents,
                    ],
                    'quantity' => 1,
                ]],
                'mode' => 'payment',
                'return_url' => url('checkPaymentStatus?session_id={CHECKOUT_SESSION_ID}'),
            ]);
            session()->put('price', (float)$request->input('price'));
        } catch (\Throwable $th) {
            Log::error($th->getMessage());
            Log::error($th->getTraceAsString());
            throw $th;
        }

        return response()->json([
            'clientSecret' => $checkout_session->client_secret,
        ]);
    }

    public function checkPaymentStatus(Request $request)
    {
        $stripe = new StripeClient(env('STRIPE_SECRET'));
        try {
            $session = $stripe->checkout->sessions->retrieve($request->session_id);
        } catch (Error $e) {
            return response()->json([
                'error' => $e->getMessage()
            ], 500);
        }
        return response()->json([
            'status' => $session->status,
        ]);
    }

    public function checkPaymentStatusView() {
        return view('site.check-payment-status');
    }

    public function orderComplete(Request $request) {
        $userId = auth()->id();
        $productId = session()->get('product-id');
        $logoString = $request->input('logoString');

        $this->logoService->saveLogo($logoString, $userId, $productId);

        Order::create([
            'user_id' => $userId,
            'product_id' => $productId,
            'amount' => session()->get('price'),
        ]);

        // $this->sessionService->clearSessionData();

    }
}
