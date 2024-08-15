<?php

use App\Http\Controllers\LoginWithOTPController;
use App\Http\Controllers\SocialiteController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Str;
use App\Http\Controllers\Site\MainController; // Update this line
use App\Http\Controllers\Site\SessionDataController; // Update this line
use App\Http\Controllers\Site\GeneralController; // Update this line

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// Route::get('/', function () {
//     $readmePath = base_path('README.md');

//     return view('welcome', [
//         'readmeContent' => Str::markdown(file_get_contents($readmePath)),
//     ]);
// });

// web 
Route::get('/', [MainController::class, 'index'])->name('homepage');


Route::middleware(['role:user', 'auth'])->group(function () {
    Route::get('/checkout2', [MainController::class, 'checkout2'])->name('checkout2');
    // Route::get('/checkout', [MainController::class, 'checkout'])->name('checkout');
    Route::get('/packages', [MainController::class, 'packages'])->name('packages');
    Route::get('/checkout', [MainController::class, 'checkout'])->name('checkout');
    Route::get('/thank-you', [MainController::class, 'thankYou'])->name('thankyou');
    Route::get('/declined', [MainController::class, 'declined'])->name('declined');
    Route::post('charge', [MainController::class, 'charge'])->name('charge');
    Route::post('initializeCharge', [MainController::class, 'initializeCharge'])->name('initializeCharge');
    Route::post('checkPaymentStatus', [MainController::class, 'checkPaymentStatus'])->name('checkPaymentStatus');
    Route::get('checkPaymentStatus', [MainController::class, 'checkPaymentStatusView'])->name('checkPaymentStatusView');
    Route::post('orderComplete', [MainController::class, 'orderComplete'])->name('orderComplete');
    Route::get('/select-color', [MainController::class, 'selectColor'])->name('select-color');
    Route::get('/select-font', [MainController::class, 'selectFont'])->name('select-font');
    Route::get('/select-category', [MainController::class, 'selectCategory'])->name('select-category');
    Route::get('/select-logo', [MainController::class, 'selectlogo'])->name('select-logo');
    Route::get('/logos/{category}', [MainController::class, 'selectLogoCategory'])->name('logos');
    Route::get('/preview', [MainController::class, 'preview'])->name('preview');
    Route::get('/maker', [MainController::class, 'maker'])->name('maker');
    Route::post('saveLogo', [MainController::class, 'saveLogo'])->name('saveLogo');
});

Route::post('/store-session-data', [SessionDataController::class, 'storeSessionData']);
Route::post('/store-session-data-logo', [SessionDataController::class, 'storeSessionDataLogo']);
Route::get('/store-session-data-image', [SessionDataController::class, 'storeSessionDataImage']);
Route::get('/store-price', [SessionDataController::class, 'storePrice']);




//  Start general pages


//  End general pages

//  Start general pages
Route::get('/about-us', [GeneralController::class, 'aboutUs']);
Route::get('/how-it-works', [GeneralController::class, 'howItWorks']);
Route::get('/graphic-designing', [GeneralController::class, 'graphicDesigning']);
Route::get('/stationery-designing', [GeneralController::class, 'stationeryDesigning']);
Route::get('/logo-design-california', [GeneralController::class, 'logoDesignCalifornia']);
Route::get('/logo-design-florida', [GeneralController::class, 'logoDesignFlorida']);
Route::get('/logo-design-texas', [GeneralController::class, 'logoDesignTexas']);
Route::get('/logo-design-pennsylvania', [GeneralController::class, 'logoDesignPennsylvania']);
Route::get('/logo-design-illinois', [GeneralController::class, 'logoDesignIllinois']);
Route::get('/logo-design-ohio', [GeneralController::class, 'logoDesignohio']);
Route::get('/logo-design-new-jersey', [GeneralController::class, 'logoDesignNewJersey']);
Route::get('/logo-design-arizona', [GeneralController::class, 'logoDesignArizona']);
Route::get('/logo-design-new-york', [GeneralController::class, 'logoDesignNewYork']);
Route::get('/logo-design-virginia', [GeneralController::class, 'logoDesignVirginia']);
Route::get('/frequently-asked-question', [GeneralController::class, 'FrequentlyAskedQuestion']);
Route::get('/contact-us', [GeneralController::class, 'contactUs']);
Route::get('/terms-condition', [GeneralController::class, 'termsCondition'])->name('termsCondition');
Route::get('/privacy-policy', [GeneralController::class, 'PrivacyPolicy']);
Route::get('/custom-logo', [GeneralController::class, 'customLogo']);
Route::post('contact-us', [GeneralController::class, 'contactUsSubmit'])->name('contactUs');
Route::post('custom-logo', [GeneralController::class, 'customLogoSubmit'])->name('customLogoSubmit');





//  End general pages







// Login with OTP Routes
Route::prefix('/otp')->middleware('guest')->name('otp.')->controller(LoginWithOTPController::class)->group(function () {
    Route::get('/login', 'login')->name('login');
    Route::post('/generate', 'generate')->name('generate');
    Route::get('/verification/{userId}', 'verification')->name('verification');
    Route::post('login/verification', 'loginWithOtp')->name('loginWithOtp');
});

// Socialite Routes
Route::prefix('oauth/')->group(function () {
    Route::prefix('/github/login')->name('github.')->group(function () {
        Route::get('/', [SocialiteController::class, 'redirectToGithub'])->name('login');
        Route::get('/callback', [SocialiteController::class, 'HandleGithubCallBack'])->name('callback');
    });

    Route::prefix('/google/login')->name('google.')->group(function () {
        Route::get('/', [SocialiteController::class, 'redirectToGoogle'])->name('login');
        Route::get('/callback', [SocialiteController::class, 'HandleGoogleCallBack'])->name('callback');
    });

    Route::prefix('/facebook/login')->name('facebook.')->group(function () {
        Route::get('/', [SocialiteController::class, 'redirectToFaceBook'])->name('login');
        Route::get('/callback', [SocialiteController::class, 'HandleFaceBookCallBack'])->name('callback');
    });
});



// Auth routes
require __DIR__ . '/auth.php';
// Admin Routes
require('admin.php');
