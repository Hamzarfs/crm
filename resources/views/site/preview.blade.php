@extends('site.common')

@section('title', 'Preview logo')

@section('content')
    <style>
        .logo-canvas-container {
            display: flex;
            justify-content: center;
            /* Center horizontally */
            align-items: center;
            /* Center vertically */
            height: 100%;
            /* Ensure it takes full height of its parent */
            margin: 0 auto;
            /* Center horizontally */
        }

        .heading {
            font-family: Poppins, sans-serif;
            background-color: #3557BF;
            color: white;
        }

        .heading h1 {
            margin: 0;
        }

        .preview-section {
            background: #fff url({{ asset('images/preview-popup-bg-dot.png') }})
        }

        .preview-section .customize:hover {
            box-shadow: 13px 13px 26px rgba(0, 0, 0, .12);
        }

        .preview-section button {
            font-family: Poppins, sans-serif;
            font-size: 16px;
            font-weight: 700;
        }

        .blue-bg {
            background-color: #5FAAE9;
            color: white;
        }

        .first-section .mockup-wrapper {
            background: url('{{ asset('checkout_images/plan-website-mockup.png') }}');
            position: relative;
            height: 467px;
            background-repeat: no-repeat;
            background-position: center;
            background-size: contain;
        }

        .first-section h3 {
            font-size: 30px;
            font-weight: 700
        }

        .first-section h2 {
            font-size: 60px;
            font-weight: 200
        }

        .first-section .mockup-wrapper .logo-mockup {
            position: absolute;
            width: 45px;
            height: 35px;
        }

        .first-section .mockup-wrapper .logo-wrapper-3 .logo-mockup {
            position: absolute;
            width: 160px;
            height: 160px;
        }

        .first-section .mockup-wrapper .logo-wrapper-4 .logo-mockup {
            position: absolute;
            width: 130px;
            height: 140px;
        }

        .first-section .mockup-wrapper .logo-wrapper-1 {
            position: absolute;
            bottom: 210px;
            left: 217px;
        }

        .first-section .mockup-wrapper .logo-wrapper-2 {
            position: absolute;
            bottom: 258px;
            left: 352px;
        }

        .first-section .mockup-wrapper .logo-wrapper-3 {
            position: absolute;
            bottom: 440px;
            left: 357px;
        }

        .first-section .mockup-wrapper .logo-wrapper-4 {
            position: absolute;
            bottom: 256px;
            right: 645px;
        }

        .purple-bg {
            background-color: #6B6BD3;
            color: white;
        }

        .second-section h3 {
            font-size: 30px;
            font-weight: 700
        }

        .second-section h2 {
            font-size: 60px;
            font-weight: 200
        }

        .second-section .mockup-wrapper {
            background-image: url('{{ asset('checkout_images/business-card-checkout-mockup.png') }}');
            position: relative;
            height: 363px;
            background-repeat: no-repeat;
            background-position: center;
        }

        .second-section .mockup-wrapper .logo-mockup {
            position: absolute;
            width: 100px;
            height: 100px;
        }

        .second-section .mockup-wrapper .logo-wrapper {
            position: absolute;
            top: 161px;
            left: 620px;
            rotate: -25deg;
        }

        .dark-blue-bg {
            background-color: #4D7FF7;
            color: white;
        }

        .third-section h3 {
            font-size: 30px;
            font-weight: 700
        }

        .third-section h2 {
            font-size: 60px;
            font-weight: 200
        }

        .third-section .mockup-wrapper {
            background-image: url('{{ asset('checkout_images/coffee-cup-checkout-mockup.png') }}');
            position: relative;
            height: 363px;
            background-repeat: no-repeat;
            background-position: center;
        }

        .third-section .mockup-wrapper .logo-mockup {
            position: absolute;
            width: 110px;
            height: 95px;
        }

        .third-section .mockup-wrapper .logo-wrapper {
            position: absolute;
            top: 169px;
            left: 575px;
            rotate: -20deg;
        }

        .pink-bg {
            background-color: #C88584;
            color: white;
        }

        .fourth-section .mockup-wrapper {
            background-image: url('{{ asset('checkout_images/stationery-checkout-mockup.png') }}');
            position: relative;
            height: 363px;
            background-repeat: no-repeat;
            background-position: center;
        }

        .fourth-section h3 {
            font-size: 30px;
            font-weight: 700
        }

        .fourth-section h2 {
            font-size: 60px;
            font-weight: 200
        }

        .fourth-section .mockup-wrapper .logo-mockup {
            position: absolute;
            width: 60px;
            height: 50px;
        }

        .fourth-section .mockup-wrapper .logo-wrapper {
            position: absolute;
            top: 122px;
            left: 523px;
            rotate: -38deg;
        }

        .dark-bg {
            background-color: #35373C;
            color: white;
        }

        .fifth-section .mockup-wrapper {
            background: url('{{ asset('checkout_images/plan-stationery-mockup.png') }}');
            position: relative;
            height: 436px;
            background-repeat: no-repeat;
            background-position: center;
            background-size: contain;
        }

        .fifth-section h3 {
            font-size: 30px;
            font-weight: 700
        }

        .fifth-section h2 {
            font-size: 60px;
            font-weight: 200
        }

        .fifth-section .mockup-wrapper .logo-mockup {
            position: absolute;
            width: 110px;
            height: 100px;
        }

        .fifth-section .mockup-wrapper .logo-wrapper-1 {
            position: absolute;
            top: 55px;
            left: 490px;
            rotate: 90deg;
        }

        .fifth-section .mockup-wrapper .logo-wrapper-2 {
            position: absolute;
            top: 50px;
            left: 571px;
        }

        .fifth-section .mockup-wrapper .logo-wrapper-3 {
            position: absolute;
            bottom: 249px;
            right: 440px;
        }

        .fifth-section .mockup-wrapper .logo-wrapper-4 {
            position: absolute;
            bottom: 143px;
            right: 478px;
        }

        .sixth-section .mockup-wrapper {
            background-image: url('{{ asset('checkout_images/t-shirt-checkout-mockup.png') }}');
            position: relative;
            height: 363px;
            background-repeat: no-repeat;
            background-position: center;
        }

        .sixth-section h3 {
            font-size: 30px;
            font-weight: 700
        }

        .sixth-section h2 {
            font-size: 60px;
            font-weight: 200
        }

        .sixth-section .mockup-wrapper .logo-mockup {
            position: absolute;
            width: 140px;
            height: 120px;
        }

        .sixth-section .mockup-wrapper .logo-wrapper {
            position: absolute;
            bottom: 215px;
            left: 575px;
        }

        /*********************** Responsive Start ***********************/

        /* For screen 1200px to 1399px */
        @media (max-width: 1399.98px) {
            .preview-section .logo-mockup {
                width: 300px;
                height: 300px;
            }

            .first-section .mockup-wrapper .logo-wrapper-1 {
                left: 127px;
            }

            .first-section .mockup-wrapper .logo-wrapper-2 {
                left: 261px;
            }

            .first-section .mockup-wrapper .logo-wrapper-3 {
                left: 271px;
            }

            .first-section .mockup-wrapper .logo-wrapper-4 {
                right: 556px;
            }

            .second-section .mockup-wrapper .logo-wrapper {
                left: 530px;
            }

            .third-section .mockup-wrapper .logo-wrapper {
                left: 490px;
            }

            .fourth-section .mockup-wrapper .logo-wrapper {
                left: 425px;
            }

            .fifth-section .mockup-wrapper .logo-wrapper-1 {
                left: 396px;
            }

            .fifth-section .mockup-wrapper .logo-wrapper-2 {
                left: 471px;
            }

            .fifth-section .mockup-wrapper .logo-wrapper-3 {
                right: 353px;
            }

            .fifth-section .mockup-wrapper .logo-wrapper-4 {
                right: 390px;
            }

            .sixth-section .mockup-wrapper .logo-wrapper {
                left: 486px;
            }
        }

        /* For screen 992px to 1199px */
        @media (max-width: 1199.98px) {
            .preview-section .logo-mockup {
                width: 250px;
                height: 250px;
            }

            .first-section .mockup-wrapper .logo-wrapper-1 {
                left: 34px;
            }

            .first-section .mockup-wrapper .logo-wrapper-2 {
                left: 173px;
            }

            .first-section .mockup-wrapper .logo-wrapper-3 {
                left: 180px;
            }

            .first-section .mockup-wrapper .logo-wrapper-4 {
                right: 466px;
            }

            .second-section .mockup-wrapper .logo-wrapper {
                left: 443px;
            }

            .third-section .mockup-wrapper .logo-wrapper {
                left: 400px;
            }

            .fourth-section .mockup-wrapper .logo-wrapper {
                left: 337px;
            }

            .fifth-section .mockup-wrapper .logo-wrapper-1 {
                left: 305px;
            }

            .fifth-section .mockup-wrapper .logo-wrapper-2 {
                left: 387px;
            }

            .fifth-section .mockup-wrapper .logo-wrapper-3 {
                right: 264px;
            }

            .fifth-section .mockup-wrapper .logo-wrapper-4 {
                right: 299px;
            }

            .sixth-section .mockup-wrapper .logo-wrapper {
                left: 398px;
            }
        }

        /* For screen 768px to 991px */
        @media (max-width: 991.98px) {
            /* .preview-section .logo-mockup {
                                            width: 200px;
                                            height: 200px;
                                        } */

            .first-section .mockup-wrapper {
                height: 368px;
            }

            .first-section .mockup-wrapper .logo-mockup {
                width: 35px;
                height: 30px;
            }

            .first-section .mockup-wrapper .logo-wrapper-3 .logo-mockup {
                width: 135px;
                height: 142px;
            }

            .first-section .mockup-wrapper .logo-wrapper-4 .logo-mockup {
                width: 110px;
                height: 125px;
            }

            .first-section .mockup-wrapper .logo-wrapper-1 {
                left: 21px;
                bottom: 168px;
            }

            .first-section .mockup-wrapper .logo-wrapper-2 {
                left: 122px;
                bottom: 205px;
            }

            .first-section .mockup-wrapper .logo-wrapper-3 {
                left: 125px;
                bottom: 360px;
            }

            .first-section .mockup-wrapper .logo-wrapper-4 {
                right: 352px;
                bottom: 215px;
            }

            .second-section .mockup-wrapper .logo-wrapper {
                left: 320px;
            }

            .third-section .mockup-wrapper .logo-wrapper {
                left: 280px;
            }

            .fourth-section .mockup-wrapper .logo-wrapper {
                left: 215px;
            }

            .fifth-section .mockup-wrapper .logo-wrapper-1 {
                left: 200px;
                top: 75px;
            }

            .fifth-section .mockup-wrapper .logo-wrapper-2 {
                left: 265px;
                top: 62px;
            }

            .fifth-section .mockup-wrapper .logo-wrapper-3 {
                right: 165px;
            }

            .fifth-section .mockup-wrapper .logo-wrapper-4 {
                right: 195px;
            }

            .sixth-section .mockup-wrapper .logo-wrapper {
                left: 275px;
            }
        }

        /* For screen 576px to 767px */
        @media (max-width: 767.98px) {
            .preview-section .logo-mockup {
                width: 200px;
                height: 200px;
            }

            .preview-section a.btn {
                font-size: 16px;
            }

            .first-section .mockup-wrapper {
                height: 275px;
            }

            .first-section h2 {
                font-size: 55px;
            }

            .first-section .mockup-wrapper .logo-mockup {
                width: 25px;
                height: 25px;
            }

            .first-section .mockup-wrapper .logo-wrapper-3 .logo-mockup {
                width: 105px;
                height: 115px;
            }

            .first-section .mockup-wrapper .logo-wrapper-4 .logo-mockup {
                width: 90px;
                height: 100px;
            }

            .first-section .mockup-wrapper .logo-wrapper-1 {
                left: 16px;
                bottom: 126px;
            }

            .first-section .mockup-wrapper .logo-wrapper-2 {
                left: 92px;
                bottom: 155px;
            }

            .first-section .mockup-wrapper .logo-wrapper-3 {
                left: 90px;
                bottom: 276px;
            }

            .first-section .mockup-wrapper .logo-wrapper-4 {
                right: 264px;
                bottom: 163px;
            }

            .second-section .mockup-wrapper .logo-wrapper {
                left: 230px;
            }

            .third-section h2 {
                font-size: 52px;
            }

            .third-section .mockup-wrapper .logo-wrapper {
                left: 190px;
            }

            .fourth-section h2 {
                font-size: 51px;
            }

            .fourth-section .mockup-wrapper .logo-wrapper {
                left: 125px;
            }

            .fifth-section h2 {
                font-size: 45px;
            }

            .fifth-section .mockup-wrapper {
                height: 310px;
            }

            .fifth-section .mockup-wrapper .logo-mockup {
                width: 80px;
                height: 90px;
            }

            .fifth-section .mockup-wrapper .logo-wrapper-1 {
                left: 155px;
                top: 45px;
            }

            .fifth-section .mockup-wrapper .logo-wrapper-2 {
                left: 200px;
                top: 35px;
            }

            .fifth-section .mockup-wrapper .logo-wrapper-3 {
                right: 120px;
                bottom: 193px;
            }

            .fifth-section .mockup-wrapper .logo-wrapper-4 {
                right: 145px;
                bottom: 113px;
            }

            .sixth-section h2 {
                font-size: 48px;
            }

            .sixth-section .mockup-wrapper .logo-wrapper {
                left: 185px;
            }
        }

        /* For screen 480px to 575px */
        @media (max-width: 575.98px) {
            .first-section .mockup-wrapper {
                width: 450px;
                margin: auto
            }

            .first-section h3 {
                font-size: 20px;
            }

            .first-section h2 {
                font-size: 35px;
            }

            .first-section .mockup-wrapper .logo-wrapper-1 {
                left: 13px;
                bottom: 129px;
            }

            .first-section .mockup-wrapper .logo-wrapper-2 {
                left: 80px;
                bottom: 153px;
            }

            .first-section .mockup-wrapper .logo-wrapper-3 {
                left: 85px;
                bottom: 246px;
            }

            .first-section .mockup-wrapper .logo-wrapper-4 {
                right: 224px;
            }

            .first-section .mockup-wrapper .logo-wrapper-3 .logo-mockup {
                width: 80px;
                height: 90px;
            }

            .first-section .mockup-wrapper .logo-wrapper-4 .logo-mockup {
                width: 65px;
                height: 90px;
            }

            .second-section .mockup-wrapper {
                width: 456px;
                margin: auto;
            }

            .second-section h2 {
                font-size: 45px;
            }

            .second-section h3 {
                font-size: 25px;
            }

            .second-section .mockup-wrapper .logo-wrapper {
                left: 205px;
            }

            .third-section .mockup-wrapper {
                width: 456px;
                margin: auto;
            }

            .third-section h2 {
                font-size: 45px;
            }

            .third-section h3 {
                font-size: 25px;
            }

            .third-section .mockup-wrapper .logo-wrapper {
                left: 160px;
            }

            .fourth-section .mockup-wrapper {
                width: 456px;
                margin: auto;
            }

            .fourth-section h2 {
                font-size: 45px;
            }

            .fourth-section h3 {
                font-size: 25px;
            }

            .fourth-section .mockup-wrapper .logo-wrapper {
                left: 100px;
            }

            .fifth-section h2 {
                font-size: 45px;
            }

            .fifth-section h3 {
                font-size: 25px;
            }

            .fifth-section .mockup-wrapper {
                width: 456px;
                margin: auto
            }

            .fifth-section .mockup-wrapper .logo-mockup {
                width: 70px;
                height: 70px;
            }

            .fifth-section .mockup-wrapper .logo-wrapper-1 {
                left: 135px;
                top: 60px;
            }

            .fifth-section .mockup-wrapper .logo-wrapper-2 {
                left: 180px;
                top: 55px;
            }

            .fifth-section .mockup-wrapper .logo-wrapper-3 {
                right: 105px;
                bottom: 183px;
            }

            .fifth-section .mockup-wrapper .logo-wrapper-4 {
                right: 125px;
            }

            .sixth-section h2 {
                font-size: 45px;
            }

            .sixth-section h3 {
                font-size: 25px;
            }

            .sixth-section .mockup-wrapper {
                width: 456px;
                margin: auto
            }

            .sixth-section .mockup-wrapper .logo-wrapper {
                left: 160px;
                bottom: 225px;
            }
        }

        /* For screen 350px to 479px */
        @media (max-width: 479.98px) {
            .first-section .mockup-wrapper {
                width: 325px;
                height: 185px;
                margin: auto
            }

            .first-section .mockup-wrapper .logo-mockup {
                width: 15px;
                height: 15px;
            }

            .first-section .mockup-wrapper .logo-wrapper-3 .logo-mockup {
                width: 60px;
                height: 70px;
            }

            .first-section .mockup-wrapper .logo-wrapper-4 .logo-mockup {
                width: 50px;
                height: 70px;
            }

            .first-section .mockup-wrapper .logo-wrapper-1 {
                left: 11px;
                bottom: 86px;
            }

            .first-section .mockup-wrapper .logo-wrapper-2 {
                left: 58px;
                bottom: 103px;
            }

            .first-section .mockup-wrapper .logo-wrapper-3 {
                left: 60px;
                bottom: 178px;
            }

            .first-section .mockup-wrapper .logo-wrapper-4 {
                right: 162px;
                bottom: 114px;
            }

            .second-section .mockup-wrapper {
                width: 325px;
                margin: auto;
            }

            .second-section h2 {
                font-size: 35px;
            }

            .second-section h3 {
                font-size: 20px;
            }

            .second-section .mockup-wrapper .logo-wrapper {
                left: 140px;
            }

            .third-section .mockup-wrapper {
                width: 325px;
                margin: auto;
            }

            .third-section h2 {
                font-size: 35px;
            }

            .third-section h3 {
                font-size: 20px;
            }

            .third-section .mockup-wrapper .logo-wrapper {
                left: 95px;
            }

            .fourth-section .mockup-wrapper {
                width: 325px;
                margin: auto;
            }

            .fourth-section h2 {
                font-size: 35px;
            }

            .fourth-section h3 {
                font-size: 20px;
            }

            .fourth-section .mockup-wrapper .logo-wrapper {
                left: 30px;
            }

            .fifth-section h2 {
                font-size: 35px;
            }

            .fifth-section h3 {
                font-size: 20px;
            }

            .fifth-section .mockup-wrapper {
                width: 325px;
                height: 210px;
                margin: auto
            }

            .fifth-section .mockup-wrapper .logo-mockup {
                width: 50px;
                height: 50px;
            }

            .fifth-section .mockup-wrapper .logo-wrapper-1 {
                left: 95px;
                top: 35px;
            }

            .fifth-section .mockup-wrapper .logo-wrapper-2 {
                left: 130px;
                top: 34px;
            }

            .fifth-section .mockup-wrapper .logo-wrapper-3 {
                right: 75px;
                bottom: 125px;
            }

            .fifth-section .mockup-wrapper .logo-wrapper-4 {
                right: 90px;
                bottom: 75px;
            }

            .sixth-section h2 {
                font-size: 35px;
            }

            .sixth-section h3 {
                font-size: 20px;
            }

            .sixth-section .mockup-wrapper {
                width: 325px;
                margin: auto
            }

            .sixth-section .mockup-wrapper .logo-wrapper {
                left: 100px;
            }

        }

        /*********************** Responsive End *************************/
    </style>

    <!-- Heading -->
    <div class="heading py-3">
        <div class="text-center">
            <h1>Logo Preview</h1>
        </div>
    </div>

    <div class="preview-section pb-4 pb-md-5">
        <div class="logo-canvas-container d-none">
            <canvas id="logo-canvas" width="160" height="175"></canvas>
        </div>

        <div class="d-flex justify-content-center align-items-center">
            <img src="" alt="logo" class="logo-mockup">
        </div>

        <div class="d-flex justify-content-center align-items-center mt-4">
            <a href="{{ route('maker') }}" class="btn btn-lg customize me-1">
                <i class="fa fa-angle-left" aria-hidden="true"></i>&nbsp; Customize
            </a>
            @guest
                <a href="{{ route('login') }}" class="btn btn-lg btn-success ms-1" id="updateButton">Look Perfect</a>
            @else
                @if ($hasOrder)
                    <button id="save-logo" class="btn btn-lg btn-success ms-1">Look Perfect</button>
                @else
                    <a href="{{ route('packages') }}" class="btn btn-lg btn-success ms-1">Look Perfect</a>
                @endif
            @endguest
        </div>
    </div>

    <div class="first-section blue-bg py-4 py-md-5">
        <div class="container text-center">
            <h3>Set up your online presence</h3>
            <h2>WEBSITE & HOSTING</h2>

            <div class="mockup-wrapper mt-md-4">
                <div class="logo-wrapper-1">
                    <img class="logo-mockup" alt="logo">
                </div>
                <div class="logo-wrapper-2">
                    <img class="logo-mockup" alt="logo">
                </div>
                <div class="logo-wrapper-3">
                    <img class="logo-mockup" alt="logo">
                </div>
                <div class="logo-wrapper-4">
                    <img class="logo-mockup" alt="logo">
                </div>
            </div>
        </div>
    </div>

    <div class="second-section purple-bg py-4 py-md-5">
        <div class="container text-center">
            <h3>Create a brand new image</h3>
            <h2>BUSINESS CARDS</h2>

            <div class="mockup-wrapper mt-md-4">
                <div class="logo-wrapper">
                    <img class="logo-mockup" alt="logo">
                </div>
            </div>
        </div>
    </div>

    <div class="third-section dark-blue-bg py-4 py-md-5">
        <div class="container text-center">
            <h3>See your design in print</h3>
            <h2>PACKAGING & LABELS</h2>

            <div class="mockup-wrapper mt-md-4">
                <div class="logo-wrapper">
                    <img class="logo-mockup" alt="logo">
                </div>
            </div>
        </div>
    </div>

    <div class="fourth-section pink-bg py-4 py-md-5">
        <div class="container text-center">
            <h3>Complete identity design</h3>
            <h2>BRANDED STATIONERY</h2>

            <div class="mockup-wrapper mt-md-4">
                <div class="logo-wrapper">
                    <img class="logo-mockup" alt="logo">
                </div>
            </div>
        </div>
    </div>

    <div class="fifth-section dark-bg py-4 py-md-5">
        <div class="container text-center">
            <h3>Show off your new brand</h3>
            <h2>MERCHANDISE & ACCESSORIES</h2>

            <div class="mockup-wrapper mt-md-4">
                <div class="logo-wrapper-1">
                    <img class="logo-mockup" alt="logo">
                </div>
                <div class="logo-wrapper-2">
                    <img class="logo-mockup" alt="logo">
                </div>
                <div class="logo-wrapper-3">
                    <img class="logo-mockup" alt="logo">
                </div>
                <div class="logo-wrapper-4">
                    <img class="logo-mockup" alt="logo">
                </div>
            </div>
        </div>
    </div>

    <div class="sixth-section pt-4 pt-md-5">
        <div class="container text-center">
            <h3>Get more buzz for your startup</h3>
            <h2>SOCIAL MEDIA DESIGNS</h2>

            <div class="mockup-wrapper mt-md-4">
                <div class="logo-wrapper">
                    <img class="logo-mockup" alt="logo">
                </div>
            </div>
        </div>
    </div>

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/fabric.js/4.5.0/fabric.min.js"></script>
    <script>
        var company = @json(session('company', []));
        var image = @json(session('image', []));
    </script>
    <script>
        var canvas = new fabric.Canvas('logo-canvas');

        $(document).ready(function() {
            canvas.setWidth(505);
            canvas.setHeight(440);

            // Load SVG function
            function loadCarSVG() {
                $.ajax({
                    url: 'category-image/' + image, // Adjust the URL to load your SVG
                    dataType: 'text',
                    success: function(svgString) {
                        // Clear the canvas
                        canvas.clear();

                        // Load the SVG
                        fabric.loadSVGFromString(svgString, function(objects, options) {
                            // Calculate the center of the canvas
                            var canvasCenter = {
                                left: canvas.width / 2,
                                top: canvas.height / 2
                            };

                            // Calculate the bounding box of the combined objects
                            var boundingBox = new fabric.Group(objects).getBoundingRect();

                            // Calculate the offset to center the bounding box
                            var offset = {
                                left: canvasCenter.left - boundingBox.width / 2,
                                top: canvasCenter.top - boundingBox.height / 2
                            };

                            // Add each object to the canvas and adjust its position
                            objects.forEach(function(obj, index) {
                                // Set the object position to center the bounding box
                                obj.set({
                                    left: obj.left + offset.left - boundingBox
                                        .left,
                                    top: obj.top + offset.top - boundingBox.top,
                                    selectable: false, // Disable selection
                                    evented: false, // Disable events
                                });
                                canvas.add(obj);
                            });
                            // canvas.renderAll();
                        });

                        // Add text elements
                        var company = "{{ session('company') }}"; // Get session company value
                        var sampleText1 = new fabric.Textbox(company, {
                            left: canvas.width / 2 - 10,
                            top: canvas.height / 2 + 150,
                            fontSize: 30,
                            fill: '#000000',
                            fontFamily: 'Arial',
                            textAlign: 'center',
                            selectable: false,
                            evented: false
                        });
                        canvas.add(sampleText1);

                        var sampleText2 = new fabric.Textbox('Slogan Here', {
                            left: canvas.width / 2 - 20,
                            top: canvas.height / 2 + 190,
                            fontSize: 14,
                            width: 80,
                            fill: '#000000',
                            fontFamily: 'Arial',
                            textAlign: 'center',
                            selectable: false,
                            evented: false
                        });
                        canvas.add(sampleText2);

                        const dataUrl = canvas.toDataURL()
                        sessionStorage.setItem('logoDataUrl', dataUrl)
                        // window.logoDataUrl = dataUrl
                        // document.getElementById('logo').src = dataUrl
                        // document.getElementByClass('logo').src = dataUrl

                        // const imgTags = document.getElementsByClassName('logo')
                        // imgTags.forEach()

                        $('.logo-mockup').each(function() {
                            this.src = dataUrl
                        })

                        // canvas.renderAll();
                    },
                    error: function(xhr, status, error) {
                        console.error("Error loading SVG:", status, error);
                    }
                });
            }

            loadCarSVG();

            // load image
        });

        @if ($hasOrder)
            // Save the canvas content as an image
            $('#save-logo').click(function() {
                var dataURL = canvas.toDataURL({
                    format: 'png',
                    quality: 1
                });

                @auth
                    $.ajax({
                        url: "{{ route('saveLogo') }}",
                        method: 'POST',
                        headers: {
                            'X-CSRF-TOKEN': "{{ csrf_token() }}",
                        },
                        data: {
                            userId: {{ auth()->id() }},
                            productId: {{ session()->get('product-id') }},
                            logoString: dataURL,
                        },
                    })
                @endauth

                var link = document.createElement('a'); 
                link.href = dataURL; 
                link.download = 'logo.png'; 
                link.click();
            });
        @endif
    </script>

@endsection
