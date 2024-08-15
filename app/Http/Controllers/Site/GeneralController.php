<?php

namespace App\Http\Controllers\Site;

use Illuminate\Http\Request;
use App\Models\User;
use App\Mail\ContactUs;
use App\Mail\CustomLogo;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;


class GeneralController extends \App\Http\Controllers\Controller
{

    public function aboutUs()
    {
        return view('site/aboutus');
    }


    public function graphicDesigning()
    {
        return view('site/graphic-designing');
    }


    public function stationeryDesigning()
    {
        return view('site/stationery-designing');
    }

    public function howItWorks()
    {
        return view('site/how-it-works');
    }



    // -------------- General Pages //
    public function logodesigncalifornia()
    {
        return view('site/logo-design-california');
    }

    public function logodesignflorida()
    {
        return view('site/logo-design-florida');
    }

    public function logodesigntexas()
    {
        return view('site/logo-design-texas');
    }

    public function logodesignpennsylvania()
    {
        return view('site/logo-design-pennsylvania');
    }

    public function logodesignillinois()
    {
        return view('site/logo-design-illinois');
    }

    public function logodesignohio()
    {
        return view('site/logo-design-ohio');
    }
    public function logodesignnewjersey()
    {
        return view('site/logo-design-new-jersey');
    }

    public function logodesignarizona()
    {
        return view('site/logo-design-arizona');
    }

    public function logodesignnewyork()
    {
        return view('site/logo-design-new-york');
    }

    public function logodesignvirginia()
    {
        return view('site/logo-design-virginia');
    }
    public function frequentlyaskedquestion()
    {
        return view('site/frequently-asked-question');
    }
    public function contactUs()
    {
        return view('site/contact-us');
    }
    public function termscondition()
    {
        return view('site/terms-condition');
    }
    public function privacypolicy()
    {
        return view('site/privacy-policy');
    }
    public function customlogo()
    {
        return view('site/custom-logo');
    }

    public function contactUsSubmit(Request $request)
    {
        $data = $request->all();
        $users = User::role('admin')->get();
        try {
            foreach ($users as $user) {
                Mail::to($user->email)->send(new ContactUs($data));
            }
        } catch (\Throwable $th) {
            Log::error($th->getMessage());
            return back()->with([
                'success' => false,
                'message' => $th->getMessage()
            ]);
        }
        return back()->with([
            'success' => true,
        ]);
    }

    public function customLogoSubmit(Request $request)
    {
        $data = $request->all();
        $users = User::role('admin')->get();
        try {
            foreach ($users as $user) {
                Mail::to($user->email)->send(new CustomLogo($data));
            }
        } catch (\Throwable $th) {
            Log::error($th->getMessage());
            return back()->with([
                'success' => false,
                'message' => $th->getMessage()
            ]);
        }
        return back()->with([
            'success' => true,
        ]);
    }
    // general pages
}
