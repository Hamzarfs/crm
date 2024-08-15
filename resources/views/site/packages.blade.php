<!-- resources/views/site/main.blade.php -->
@extends('site.common')

@section('title', 'Packages')

@section('content')


    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    {{-- <link href="styles.css" rel="stylesheet"> --}}
    <style>
        body {
            font-family: 'Poppins', sans-serif;
        }

        /* Container styling */
        .card {
            border: 1px solid #ddd;
            border-radius: 8px;
            overflow: hidden;
            transition: box-shadow 0.3s ease;
            margin-top: 20px;
            background-color: #f6f6f6;
        }

        .card:hover {
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .card-body {
            -ms-flex: 1 1 auto;
            flex: 1 1 auto;
            min-height: 1px;
            padding: 0px;
        }

        /* Header styling */
        .card-header {
            background-color: #666bc0;
            padding: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #ddd;
        }

        .plan-header {
            display: flex;
            align-items: center;
        }

        .plan-icon img {
            width: 50px;
            height: 50px;
            margin-right: 15px;
        }

        .plan-heading .card-title {
            font-size: 24px;
            margin: 0;
            font-weight: 700;
            color: #fff;
        }

        .plan-heading .card-sub-title {
            font-size: 0.7rem;
            color: #cfcccc;
            margin: 0;
            font-weight: 300;
        }


        .plan-price p {
            font-size: 1.5rem;
            font-weight: bold;
            color: #ffffff;
            margin: 0;
        }

        /* Body styling */
        .card-body {
            padding-left: 20px;
            background-color: #f6f6f6;
        }

        .card-body ul {
            list-style: none;
            padding: 0;
        }

        Set Checkout Functionality: Implemented the checkout process for the project. Ensured that the functionality is integrated seamlessly with the existing codebase. Tested the checkout process to verify that it works correctly. Merging Code: Merged various branches of the project into the main branch. Resolved conflicts that arose during the merge. Conducted tests to ensure that the merged code is stable and functions as expected. CRM Code Study: Studied the existing CRM code to understand its structure and functionality. Identified areas that need improvements or modifications. Documented key findings and suggestions for further development. Set Layout of Canvas Editor: Set Checkout Functionality: Implemented the checkout process for the project. Ensured that the functionality is integrated seamlessly with the existing codebase. Tested the checkout process to verify that it works correctly. Merging Code: Merged various branches of the project into the main branch. Resolved conflicts that arose during the merge. Conducted tests to ensure that the merged code is stable and functions as expected. CRM Code Study: Studied the existing CRM code to understand its structure and functionality. Identified areas that need improvements or modifications. Documented key findings and suggestions for further development. Set Layout of Canvas Editor: Set Checkout Functionality: Implemented the checkout process for the project. Ensured that the functionality is integrated seamlessly with the existing codebase. Tested the checkout process to verify that it works correctly. Merging Code: Merged various branches of the project into the main branch. Resolved conflicts that arose during the merge. Conducted tests to ensure that the merged code is stable and functions as expected. CRM Code Study: Studied the existing CRM code to understand its structure and functionality. Identified areas that need improvements or modificaSet Checkout Functionality: Implemented the checkout process for the project. Ensured that the functionality is integrated seamlessly with the existing codebase. Tested the checkout process to verify that it works correctly. Merging Code: Merged various branches of the project into the main branch. Resolved conflicts that arose during the merge. Conducted tests to ensure that the merged code is stable and functions as expected. CRM Code Study: Studied the existing CRM code to understand its structure and functionality. Identified areas that need improvements or modifications. Documented key findings and suggestions for further development. Set Layout of Canvas Editor: Designed and implemented the layout for the canvas editor. Ensured that the layout is user-friendly and intuitive. Integrated the canvas editor with other parts of the application for a seamless user experience.tions. Documented key findings and suggestions for further development. Set Layout of Canvas Editor:Set Checkout Functionality: Implemented the checkout process for the project. Ensured that the functionality is integrated seamlessly with the existing codebase. Tested the checkout process to verify that it works correctly. Merging Code: Merged various branches of the project into the main branch. Resolved conflicts that arose during the merge. Conducted tests to ensure that the merged code is stable and functions as expected. CRM Code Study: Studied the existing CRM code to understand its structure and functionality. Identified areas that need improvements or modifications. Documented key findings and suggestions for further development. Set Layout of Canvas Editor: Designed and implemented the layout for the canvas editor. Ensured that the layout is user-friendly and intuitive. Integrated the canvas editor with other parts of the application for a seamless user experience. Designed and implemented the layout for the canvas editor. Ensured that the layout is user-friendly and intuitive. Integrated the canvas editor with other parts of the application for a seamless user experience. Designed and implemented the layout for the canvas editor. Ensured that the layout is user-friendly and intuitive. Integrated the canvas editor with other parts of the application for a seamless user experience. Designed and implemented the layout for the canvas editor. Ensured that the layout is user-friendly and intuitive. Integrated the canvas editor with other parts of the application for a seamless user experience. .card-body ul li {
            font-size: 1rem;
            checkout margin: 10px 0;
        }

        .card-body ul li:before {
            content: '\2713';
            /* Unicode for checkmark */
            color: #28a745;
            margin-right: 10px;
        }

        .list-header {
            background-color: white;
            color: black;
            padding: 5px;
            border-radius: 5px;
            font-size: 1.1rem;
            font-weight: bold;
            checkout margin-bottom: 10px;
        }

        .check li {
            font-size: 1rem;
            margin: 10px 0;
        }

        /* Footer styling */
        .card-footer {
            background-color: #666bc0;
            padding: 20px;
            text-align: center;
        }

        .card-footer .btn {
            font-size: 1.1rem;
            padding: 10px 20px;
            border-radius: 5px;
            margin: 0 auto;
            /* Center align the button */
        }

        /* Custom button styling */
        .packages-button-online {
            width: 194px;
            height: 50px;
            border-radius: 5px;
            color: #666bc0;
            background-color: #ffffff;
            font-size: 15px;
            font-weight: 700;
            line-height: 24px;
            text-align: center;
            border-color: #646BD9;
            margin-bottom: 60px;
        }

        .packages-button-online:hover {
            color: #666bc0;
            background-color: #ffffff;
            border: 1px solid #646BD9;
        }

        ul,
        ol {
            font-size: 1rem;
            margin: 0;
            list-style: none;
            /* background-color: #f6f6f6; */
        }

        dl,
        ol,
        ul {
            margin-top: 10px;
        }

        .list-h2 {
            display: block;
            background: #dbe1ff;
            padding: 10px 36px;
            color: #000;
            margin: 15px -28px;
            font-weight: 700;
            border-bottom: 1px solid #c4cdd5;
            border-top: 1px solid #c4cdd5;
            font-size: 16px;
        }

        /* Responsive Button */
        .btn-default {
            background-color: #007bff;
            color: #fff;
            font-size: 1rem;
            padding: 10px 20px;
            border-radius: 5px;
            display: none;
        }

        @media (max-width: 576px) {
            .btn-default {
                margin: 10px 0;
            }
        }

        @media (min-width: 768px) {
            .col-md-4 {
                -ms-flex: 0 0 33.333333% !important;
                flex: 2 0 33.333333% !important;
                max-width: 100.333333%;
            }
        }

        .packages-header {
            text-align: center;
            margin: 40px 0;
        }

        .packages-header h1 {
            font-size: 2.5rem;
            font-weight: bold;
        }

        .packages-header p {
            font-size: 1.2rem;
            color: #666;
        }

        .dynamic-heading {
            text-align: center;
            font-size: 34px;
            font-weight: bold;
            margin-bottom: 20px;
        }
    </style>


    <div class="container">
        <div class="packages-header">
            <div class="dynamic-heading" id="dynamicHeading">Our Packages</div>
            <p>Select the best package that suits your needs</p>
        </div>
        <div class="row">
            <!-- Basic Package -->

            <div id="package-basic" class="col-md-4" onmouseover="updateHeading('Includes an Editable Logo Design')"
                onmouseout="updateHeading('Our Packages')">
                <div class="card plans-card basic active">
                    <div class="card-header">
                        <div class="plan-header">
                            <div class="plan-icon">
                                <img src="images/icon-star-basic.png" alt="Basic Plan">
                            </div>
                            <div class="plan-heading">
                                <h2 class="card-title">Basic</h2>
                                <h3 class="card-sub-title">Logo</h3>
                            </div>
                        </div>
                        <div class="plan-price">
                            <p>$37</p>
                        </div>
                    </div>
                    <ul>
                        <li>One-time purchase</li>
                        <li>Only Logo file</li>
                        <li>Vector PDF File</li>
                        <li>High resolution PNG & JPG files</li>
                    </ul>
                    <div class="card-body">
                        <div class="hide-on-phone-wrapper">
                            <div class="hide-on-phone collapse show" id="collapseBasic">
                                <ul class="check">
                                    <h3 class="list-h2">Brand Asset</h3>
                                    <li>High resolution</li>
                                    <li>Vector logo files</li>
                                    <li>Multiple file formats</li>
                                    <li>Multiple sizes</li>
                                    <li>Edit before download</li>
                                </ul>
                                <ul class="check">
                                    <h3 class="list-h2">Support</h3>
                                    <li>24/7 Customer support</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer">
                        <!-- ye sahi wala hai <a data-linkname="ctaPackageBasic" href="/order/checkout?bid=BasicPlan" class="btn packages-button-online">Select</a> -->
                        <!-- <a data-linkname="ctaPackageBasic" href="{{ route('checkout', ['bid' => 'BasicPlan', 'price' => 37]) }}" class="btn packages-button-online">Select</a> -->

                        <!-- <a data-linkname="ctaPackageBasic" href="/checkout?price=38" class="btn packages-button-online" value=38>Select</a> -->
                        <a id="selectButton" data-linkname="ctaPackageBasic" href="/store-price?price=37&name=Basic"
                            class="btn packages-button-online" value="37" data-name="Basic">Select</a>

                    </div>
                </div>
            </div>

            <!-- Standard Package -->
            <div id="package-standard" class="col-md-4" onmouseover="updateHeading('Includes Logo with Stationery')"
                onmouseout="updateHeading('Our Packages')">
                <!-- <div id="package-standard" class="col-md-4"> -->
                <div class="card plans-card standard">
                    <div class="card-header">
                        <div class="plan-header">
                            <div class="plan-icon">
                                <img src="images/standtar.png" alt="Standard Plan">
                            </div>
                            <div class="plan-heading">
                                <h2 class="card-title">Standard</h2>
                                <h3 class="card-sub-title">Standard Logo + Business Card</h3>
                            </div>
                        </div>
                        <div class="plan-price">
                            <p>$67</p>
                        </div>
                    </div>
                    <ul>
                        <li>One-time purchase</li>
                        <li>Lifetime storage*</li>
                        <li>Vector PDF FIle</li>
                        <li>Hight resolution PNG & JPG files</li>
                    </ul>
                    <div class="card-body">
                        <div class="hide-on-phone-wrapper">
                            <div class="hide-on-phone collapse show" id="collapseStandard">
                                <ul class="check">
                                    <h3 class="list-h2">Brand Asset</h3>
                                    <li>High resolution</li>
                                    <li>Vector logo files</li>
                                    <li>Multiple file formats</li>
                                    <li>Multiple sizes</li>
                                    <li>Edit before download</li>
                                </ul>
                                <ul class="check">
                                    <h3 class="list-h2">Support</h3>
                                    <li>Lifetime customer support</li>
                                    <li>Live chat</li>
                                    <li>Printing services</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer">
                        <!-- <a data-linkname="ctaPackageStandard" href="/order/checkout?bid=StandardPlan" class="btn packages-button-online">Select</a> -->
                        <a id="selectButton" data-linkname="ctaPackageBasic" href="/store-price?price=67&name=Standard"
                            class="btn packages-button-online" value="67" data-name="Standard">Select</a>
                    </div>
                </div>
            </div>

            <!-- Premium Package -->
            <div id="package-premium" class="col-md-4"
                onmouseover="updateHeading('Includes Logo with Stationery and Social Media Design')"
                onmouseout="updateHeading('Our Packages')">
                <!-- <div id="package-premium" class="col-md-4"> -->
                <div class="card plans-card premium">
                    <div class="card-header">
                        <div class="plan-header">
                            <div class="plan-icon">
                                <img src="images/primstar.png" alt="Premium Plan">
                            </div>
                            <div class="plan-heading">
                                <h2 class="card-title">Premium</h2>
                                <h3 class="card-sub-title">Logo + Social Media + Stationery</h3>
                            </div>
                        </div>
                        <div class="plan-price">
                            <p>$97</p>
                        </div>
                    </div>
                    <ul>
                        <li>Complete brand identity</li>
                        <li>One-time purchase</li>
                        <li>Lifetime storage*</li>
                        <li>Vector PDF</li>
                        <li>High resolution PNG & JPG files</li>
                    </ul>
                    <div class="card-body">
                        <div class="hide-on-phone-wrapper">
                            <div class="hide-on-phone collapse show" id="collapsePremium">
                                <ul class="check">
                                    <h3 class="list-h2">Identity Design</h3>
                                    <li>Logo design</li>
                                    <li>Business card design</li>
                                    <li>Letterhead design</li>
                                    <li>Envelope design</li>
                                    <li>Infographic design</li>
                                    <li>Free QR Code Design</li>
                                    <li>Free Mockup Design</li>
                                </ul>
                                <ul class="check">
                                    <h3 class="list-h2">Social Media Assets</h3>
                                    <li>Facebook header design</li>
                                    <li>Twitter cover design</li>
                                    <li>LinkedIn header</li>
                                    <li>Instagram post design</li>
                                </ul>
                                <ul class="check">
                                    <h3 class="list-h2">Brand Asset</h3>
                                    <li>High resolution</li>
                                    <li>Vector logo files</li>
                                    <li>Multiple file formats</li>
                                    <li>Multiple sizes</li>
                                    <li>Edit before download</li>
                                </ul>
                                <ul class="check">
                                    <h3 class="list-h2">Support</h3>
                                    <li>Lifetime customer support</li>
                                    <li>Live chat</li>
                                    <li>Phone</li>
                                    <li>Email</li>
                                    <li>Printing services</li>



                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer">
                        <!-- <a data-linkname="ctaPackagePremium" href="/order/checkout?bid=PremiumPlan" class="btn packages-button-online">Select</a> -->
                        <a id="selectButton" data-linkname="ctaPackageBasic" href="/store-price?price=97&name=Premium"
                            class="btn packages-button-online" value="97" data-name="Premium">Select</a>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <script>
        function updateHeading(text) {
            document.getElementById('dynamicHeading').innerText = text;
        }
    </script>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.1/dist/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script>
        document.querySelectorAll('.btn.packages-button-online').forEach(button => {
            button.addEventListener('click', function(event) {
                event.preventDefault(); // Prevents the default action
                var price = this.getAttribute('value');
                var href = this.getAttribute('href');
                var name = this.dataset.name
                // Correctly set the URL with only the price parameter
                let urlBase = "{{ url('/') }}";
                var newUrl = urlBase + href.split('?')[0] + '?price=' + encodeURIComponent(price) + "&name=" + encodeURIComponent(name);
                window.location.href = newUrl; // Redirects to the checkout page with the price parameter
            });
        });
    </script>



@endsection
