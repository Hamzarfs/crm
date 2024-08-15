<!-- resources/views/site/main.blade.php -->
@extends('site.common')

@section('title', 'How it works')

@section('content')

    <!-- Bootstrap CSS -->
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Poppins', sans-serif;
        }

        .how-it-works {
            background-color: #dbe1ff;
            /* Changed background color to white */
            padding-bottom: 50px;
            padding-top: 50px;
        }

        h1 {
            font-family: 'Montserrat', sans-serif;
            font-weight: bold;
        }

        p,
        .form-control,
        .btn {
            font-family: 'Poppins', sans-serif;
        }

        .btn {
            font-family: 'Montserrat', sans-serif;
            font-weight: bold;
        }

        .img-fluid {
            max-width: 100%;
            height: auto;
            padding: 10px;
            /* Adjusted padding top, bottom, left, right */
        }

        .img-shadow {
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            /* Shadow effect */
            width: 80%;
            /* Smaller width for the shadow image */
        }

        .step-title {
            font-family: 'Poppins', sans-serif;
            font-size: 24px;
            /* Font size 24px */
            font-weight: 700;
            /* Font weight 700 */
            margin-bottom: 20px;
        }

        .step-title .step {
            font-family: 'Dancing Script', cursive;
            font-size: 34px;
            /* Font size 34px */
        }

        .step-description {
            font-size: 16px;
            color: #666;
            margin-bottom: 20px;
        }

        .step-section {
            padding: 20px 0;
            /* Adjusted padding for the sections */
        }

        @media (max-width: 767.98px) {
            .img-shadow {
                width: 99%;
                /* Adjusted width for mobile view */
                padding: 5px;
                /* Adjusted padding for mobile view */
                margin-bottom: 15px;
            }
        }
    </style>

    <div class="how-it-works">
        <div class="container mt-5">
            <div class="row align-items-center">
                <div class="col-lg-6 banner-left order-lg-1">
                    <h1>Discover How RFS Logo Design Works for You!</h1>
                    <p>Design and download your perfect logo!</p>
                    <form>
                        <div class="input-group mb-3">
                            <a href="{{ url('/') }}" class="custom-button-online" type="submit">Get Started</a>
                        </div>
                    </form>
                </div>
                <div class="col-lg-6 text-center banner-image-sec order-lg-2">
                    <img src="images/how-work-it.png" alt="Example" class="img-fluid">
                </div>
            </div>
        </div>
    </div>

    <!-------------------------start section online logo------------------------------------>

    <div class="container my-5">
        <h1 class="maim-heading-online">Quick and Easy Logo Creation</h1>
        <p class="main-description-online">
            For a speedy logo design solution, our logo maker is perfect for you. Effortless as 1-2-3,
            you can craft your personalized logo in just minutes. Simply follow these steps.
        </p>
    </div>

    <section class="step-section">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-6 text-center">
                    <img src="images/step-select-logo.png" alt="Step Image" class="img-fluid img-shadow">
                </div>
                <div class="col-md-6">
                    <h2 class="step-title"><span class="step">Step:</span> 1 Select a Logo Design</h2>
                    <p class="step-description">Choose from a variety of logo designs crafted by our AI-powered logo
                        creator. Customize the design to match your brand’s unique identity and make it stand out in the
                        market.</p>
                </div>
            </div>
        </div>
    </section>

    <section class="step-section">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-6">
                    <h2 class="step-title"><span class="step">Step:</span> 2 Customize Your Logo</h2>
                    <p class="step-description">Personalize your chosen logo design by changing colors, fonts, and
                        icons. Our easy-to-use editor allows you to create a logo that truly represents your brand.</p>
                </div>
                <div class="col-md-6 text-center">
                    <img src="images/step-customize-logo.png" alt="Step Image" class="img-fluid img-shadow">
                </div>
            </div>
        </div>
    </section>

    <section class="step-section">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-6 text-center">
                    <img src="images/step-download-logo.png" alt="Step Image" class="img-fluid img-shadow">
                </div>
                <div class="col-md-6">
                    <h2 class="step-title"><span class="step">Step:</span> 3 Download Your Logo</h2>
                    <p class="step-description">Once you're satisfied with your logo design, download it in high
                        resolution. Use your new logo on business cards, websites, merchandise, and more!</p>
                </div>
            </div>
        </div>
    </section>
    <!-------------------------End section online logo------------------------------------>

    <!-- Bootstrap JS and dependencies -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

@endsection
