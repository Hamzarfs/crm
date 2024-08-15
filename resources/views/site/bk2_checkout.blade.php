<!-- resources/views/site/main.blade.php -->
@extends('site.common')

@section('title', 'Checkout')

@section('content')

    <style>
        .checkout-section {
            width: 100%;
            border: none;
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);

            border-radius: 8px;
            padding: 20px;
            margin-bottom: 20px;
        }

        .checkout-title {
            font-size: 1.5rem;
            margin-bottom: 0.5rem;
        }

        .checkout-subtitle {
            font-size: 1rem;
            margin-bottom: 1rem;
        }

        .change-package {
            color: #007bff;
            text-decoration: none;
        }

        .change-package:hover {
            text-decoration: underline;
        }

        .order-total {
            font-size: 1.25rem;
            font-weight: bold;
        }

        .form-check-label {
            font-size: 0.9rem;
        }

        .checkout-gallery-container {
            max-height: 600px;
            /* Adjust as needed */
            overflow-y: auto;
            /* Enable vertical scrolling */
            border-radius: 8px;
            background-color: #fff;
            padding: 10px;
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
        }

        .checkout-gallery-row {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            /* Add gaps between images */
        }

        .checkout-gallery-col {
            flex: 0 0 48%;
            /* Adjust width to add gaps */
            max-width: 48%;
            box-sizing: border-box;
            /* Ensure padding and border are included in the width and height */

            position: relative;
        }

        .checkout-gallery-img {
            width: 100%;
            height: auto;
            display: block;
            border-radius: 8px;
            /* Add border-radius to images */
            border: 1px solid #ddd;
        }

        .logo-mockup-1 {
            position: absolute;
            width: 180px;
            height: 130px;
            top: 57px;
            left: 75px;
        }

        .logo-mockup-2 {
            position: absolute;
            width: 100px;
            height: 80px;
            top: 91px;
            left: 117px;
            rotate: -26deg;
        }

        .logo-mockup-3 {
            position: absolute;
            width: 50px;
            height: 40px;
            top: 73px;
            left: 50px;
            rotate: -35deg;
        }

        .logo-mockup-4 {
            position: absolute;
            width: 85px;
            height: 70px;
            top: 106px;
            left: 102px;
            rotate: -22deg;
        }

        .logo-mockup-5 {
            position: absolute;
            width: 110px;
            height: 90px;
            top: 98px;
            left: 86px;
        }

        .logo-mockup-6 {
            position: absolute;
            width: 70px;
            height: 80px;
            top: 85px;
            left: 131px;
        }

        .logo-mockup-7 {
            position: absolute;
            width: 100px;
            height: 80px;
            top: 103px;
            left: 101px;
            rotate: -4deg;
        }

        .logo-mockup-8 {
            position: absolute;
            width: 120px;
            height: 99px;
            top: 75px;
            left: 75px;
        }

        /*********************** Responsive Start ***********************/
        /* For screen 1200px to 1399px */
        @media (max-width: 1399.98px) {
            .logo-mockup-1 {
                width: 140px;
                height: 130px;
                top: 45px;
            }

            .logo-mockup-2 {
                width: 80px;
                height: 70px;
                top: 85px;
                left: 115px;
            }

            .logo-mockup-3 {
                width: 30px;
                height: 30px;
                top: 65px;
            }

            .logo-mockup-4 {
                width: 60px;
                height: 60px;
                top: 95px;
                left: 95px;
            }

            .logo-mockup-5 {
                top: 85px;
                left: 75px;
            }

            .logo-mockup-6 {
                width: 60px;
                height: 60px;
                top: 80px;
                left: 113px;
            }

            .logo-mockup-7 {
                width: 90px;
                height: 70px;
                top: 90px;
                left: 85px;
            }

            .logo-mockup-8 {
                width: 100px;
                height: 100px;
                top: 70px;
                left: 71px;
            }
        }

        /* For screen 992px to 1199px */
        @media (max-width: 1199.98px) {
            .logo-mockup-1 {
                width: 110px;
                height: 110px;
                top: 35px;
                left: 63px;
            }

            .logo-mockup-2 {
                width: 70px;
                height: 60px;
                top: 68px;
                left: 88px;
            }

            .logo-mockup-3 {
                width: 40px;
                height: 30px;
                top: 50px;
                left: 34px;
            }

            .logo-mockup-4 {
                width: 60px;
                height: 50px;
                top: 80px;
                left: 73px;
            }

            .logo-mockup-5 {
                top: 65px;
                left: 56px;
            }

            .logo-mockup-6 {
                width: 50px;
                height: 60px;
                top: 60px;
                left: 94px;
            }

            .logo-mockup-7 {
                width: 70px;
                height: 60px;
                top: 71px;
                left: 75px;
            }

            .logo-mockup-8 {
                width: 80px;
                height: 90px;
                top: 55px;
                left: 60px;
            }
        }

        /* For screen 768px to 991px */
        @media (max-width: 991.98px) {
            .logo-mockup-1 {
                width: 180px;
                height: 130px;
                top: 75px;
                left: 90px;
            }

            .logo-mockup-2 {
                width: 100px;
                height: 80px;
                top: 115px;
                left: 145px;
            }

            .logo-mockup-3 {
                width: 50px;
                height: 40px;
                top: 80px;
                left: 55px;
            }

            .logo-mockup-4 {
                width: 85px;
                height: 70px;
                top: 130px;
                left: 115px;
            }

            .logo-mockup-5 {
                top: 115px;
                left: 105px;
            }

            .logo-mockup-6 {
                width: 70px;
                height: 80px;
                top: 100px;
                left: 147px;
            }

            .logo-mockup-7 {
                width: 100px;
                height: 80px;
                top: 115px;
                left: 115px;
            }

            .logo-mockup-8 {
                width: 120px;
                height: 100px;
                top: 90px;
                left: 95px;
            }
        }

        /* For screen 576px to 767px */
        @media (max-width: 767.98px) {
            .logo-mockup-1 {
                width: 130px;
                height: 110px;
                top: 45px;
                left: 70px;
            }

            .logo-mockup-2 {
                width: 80px;
                height: 70px;
                top: 76px;
                left: 100px;
            }

            .logo-mockup-3 {
                width: 40px;
                height: 30px;
                top: 60px;
                left: 40px;
            }

            .logo-mockup-4 {
                width: 70px;
                height: 60px;
                top: 90px;
                left: 83px;
            }

            .logo-mockup-5 {
                top: 75px;
                left: 65px;
            }

            .logo-mockup-6 {
                width: 50px;
                height: 60px;
                top: 70px;
                left: 110px;
            }

            .logo-mockup-7 {
                width: 80px;
                height: 60px;
                top: 85px;
                left: 85px;
            }

            .logo-mockup-8 {
                width: 100px;
                height: 80px;
                top: 60px;
                left: 61px;
            }
        }

        /* For screen 480px to 575px */
        @media (max-width: 575.98px) {
            .checkout-gallery-container {
                width: 456px;
                margin: auto;
            }

            .logo-mockup-1 {
                width: 110px;
                height: 90px;
                top: 45px;
                left: 65px;
            }

            .logo-mockup-2 {
                height: 60px;
                top: 70px;
                left: 85px;
            }

            .logo-mockup-3 {
                width: 30px;
                height: 20px;
                top: 55px;
                left: 35px;
            }

            .logo-mockup-4 {
                width: 65px;
                height: 50px;
                top: 80px;
                left: 70px;
            }

            .logo-mockup-5 {
                width: 100px;
                height: 80px;
                top: 65px;
                left: 50px;
            }

            .logo-mockup-6 {
                width: 50px;
                height: 60px;
                top: 60px;
                left: 93px;
            }

            .logo-mockup-7 {
                width: 80px;
                height: 60px;
                top: 70px;
                left: 65px;
            }

            .logo-mockup-8 {
                width: 90px;
                height: 70px;
                top: 60px;
                left: 53px;
            }
        }

        /* For screen 350px to 479px */
        @media (max-width: 479.98px) {
            .checkout-gallery-container {
                width: 338px;
                margin: auto;
            }

            .logo-mockup-1 {
                width: 80px;
                height: 60px;
                top: 40px;
                left: 50px;
            }

            .logo-mockup-2 {
                width: 60px;
                height: 40px;
                top: 55px;
                left: 60px;
            }

            .logo-mockup-3 {
                width: 25px;
                height: 15px;
                top: 40px;
                left: 25px;
            }

            .logo-mockup-4 {
                width: 40px;
                height: 35px;
                top: 58px;
                left: 55px;
            }

            .logo-mockup-5 {
                width: 80px;
                height: 60px;
                top: 50px;
                left: 35px;
            }

            .logo-mockup-6 {
                width: 35px;
                height: 40px;
                top: 45px;
                left: 69px;
            }

            .logo-mockup-7 {
                width: 50px;
                height: 40px;
                top: 55px;
                left: 55px;
            }

            .logo-mockup-8 {
                width: 60px;
                height: 50px;
                top: 45px;
                left: 42px;
            }
        }

        /*********************** Responsive End *************************/
    </style>


    <div class="container mt-5">
        <div class="row">
            <div class="col-lg-6" style="background-color:#F6FAFF">
                <div class="checkout-section p-3">
                    <h3 class="checkout-title">Checkout</h3>
                    <p class="checkout-subtitle mb-2">{{ session()->get('package-name') }}</p>
                    <a href="#" class="change-package">Change Package</a>
                    <h4 class="order-total my-3">$<span id="totalPrice">3</span> USD</h4>

                    <!-- Checkboxes for additional options -->
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="edits" value="5">
                        <label class="form-check-label" for="edits">Unlimited FREE edits for all your designs for a
                            month. $5/mo after the first month, charged quarterly.</label>
                    </div>
                    <div class="form-check mt-2">
                        <input type="checkbox" class="form-check-input" id="ownership" value="599">
                        <label class="form-check-label" for="ownership">Get exclusive ownership of your logo copyrights
                            for $599. We will remove this logo from our website.</label>
                    </div>
                    <div class="form-check mt-2">
                        <input type="checkbox" class="form-check-input" id="website" value="14.99">
                        <label class="form-check-label" for="website">Get a professional website FREE for a month.
                            $14.99/mo after the first month.</label>
                    </div>
                    <h4 class="order-total my-3">ORDER TOTAL: $<span id="orderTotal">37</span></h4>

                    <!-- Payment form -->
                    <form action="{{ route('charge') }}" method="post" id="payment-form">
                        @csrf
                        <input type="hidden" name="userid" value="{{ auth()->id() }}">
                        <input type="hidden" name="total" id="order-total" value="">
                        <input type="hidden" name="product-id" value="{{ session()->get('product-id') }}">
                        <input type="hidden" name="logoDataUrl" value="">
                        <div id="stripe-button-container">
                            <!-- Stripe button will be dynamically added here -->
                        </div>
                    </form>
                </div>
            </div>

            <div class="col-lg-6">
                <div class="checkout-gallery-container">
                    <div class="checkout-gallery-row">
                        <div class="checkout-gallery-col">
                            <img src="{{ url('/checkout_images/shop-board-checkout-mockup.png') }}" alt="Product Image"
                                class="checkout-gallery-img">

                            <img class="logo-mockup logo-mockup-1" alt="logo">
                        </div>
                        <div class="checkout-gallery-col">
                            <img src="{{ url('/checkout_images/business-card-checkout-mockup.png') }}" alt="Product Image"
                                class="checkout-gallery-img">

                            <img class="logo-mockup logo-mockup-2" alt="logo">
                        </div>
                        <div class="checkout-gallery-col">
                            <img src="{{ url('/checkout_images/stationery-checkout-mockup.png') }}" alt="Product Image"
                                class="checkout-gallery-img">

                            <img class="logo-mockup logo-mockup-3" alt="logo">
                        </div>
                        <div class="checkout-gallery-col">
                            <img src="{{ url('/checkout_images/coffee-cup-checkout-mockup.png') }}" alt="Product Image"
                                class="checkout-gallery-img">

                            <img class="logo-mockup logo-mockup-4" alt="logo">
                        </div>
                        <div class="checkout-gallery-col">
                            <img src="{{ url('/checkout_images/t-shirt-checkout-mockup.png') }}" alt="Product Image"
                                class="checkout-gallery-img">

                            <img class="logo-mockup logo-mockup-5" alt="logo">
                        </div>
                        <div class="checkout-gallery-col">
                            <img src="{{ url('/checkout_images/product-tags-checkout-mockup.png') }}" alt="Product Image"
                                class="checkout-gallery-img">

                            <img class="logo-mockup logo-mockup-6" alt="logo">
                        </div>
                        <div class="checkout-gallery-col">
                            <img src="{{ url('/checkout_images/paper-bag-checkout-mockup.png') }}" alt="Product Image"
                                class="checkout-gallery-img">

                            <img class="logo-mockup logo-mockup-7" alt="logo">
                        </div>
                        <div class="checkout-gallery-col">
                            <img src="{{ url('/checkout_images/mobile-checkout-mockup.png') }}" alt="Product Image"
                                class="checkout-gallery-img">

                            <img class="logo-mockup logo-mockup-8" alt="logo">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>



    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

    <script>
        let basePrice = 3; // Initial base price

        // Object to keep track of checkbox values
        const checkboxValues = {
            'edits': 0,
            'ownership': 0,
            'website': 0
        };

        function updateOrderTotal() {
            let total = basePrice;

            // Get checkbox elements
            // let edits = document.getElementById('edits');
            let ownership = document.getElementById('ownership');
            let website = document.getElementById('website');

            // Update total based on checkbox values
            // if (edits.checked) total += parseFloat(edits.value);
            if (ownership.checked) total += parseFloat(ownership.value);
            if (website.checked) total += parseFloat(website.value);

            // Update the displayed total prices
            document.getElementById('orderTotal').innerText = total.toFixed(2);
            document.getElementById('totalPrice').innerText = total.toFixed(2);
            document.getElementById('order-total').value = total.toFixed(2);

            // Update Stripe button
            let stripeButtonContainer = document.getElementById('stripe-button-container');
            stripeButtonContainer.innerHTML = ''; // Clear any existing button

            let stripeButton = document.createElement('script');
            stripeButton.src = 'https://checkout.stripe.com/checkout.js';
            stripeButton.className = 'stripe-button';
            stripeButton.setAttribute('data-key',
                '{{ env('STRIPE_PUBLIC') }}'
            );
            stripeButton.setAttribute('data-amount', total * 100); // Convert to cents
            stripeButton.setAttribute('data-name', 'RFS');
            stripeButton.setAttribute('data-description', 'Logo Design');
            stripeButton.setAttribute('data-image', 'https://stripe.com/img/documentation/checkout/marketplace.png');
            stripeButton.setAttribute('data-locale', 'auto');
            stripeButtonContainer.appendChild(stripeButton);
        }

        function handleCheckboxChange(event) {
            const checkboxId = event.target.id;
            if (event.target.checked) {
                checkboxValues[checkboxId] = parseFloat(event.target.value);
            } else {
                checkboxValues[checkboxId] = 0;
            }

            // Calculate total price from basePrice and checkbox values
            let total = basePrice;
            for (const key in checkboxValues) {
                total += checkboxValues[key];
            }

            // Update displayed values
            document.getElementById('orderTotal').innerText = total.toFixed(2);
            document.getElementById('totalPrice').innerText = total.toFixed(2);
            document.getElementById('order-total').value = total.toFixed(2);

            // Update Stripe button
            let stripeButtonContainer = document.getElementById('stripe-button-container');
            stripeButtonContainer.innerHTML = ''; // Clear any existing button

            let stripeButton = document.createElement('script');
            stripeButton.src = 'https://checkout.stripe.com/checkout.js';
            stripeButton.className = 'stripe-button';
            stripeButton.setAttribute('data-key',
                '{{ env('STRIPE_PUBLIC') }}'
            );
            stripeButton.setAttribute('data-amount', total * 100); // Convert to cents
            stripeButton.setAttribute('data-name', 'RFS');
            stripeButton.setAttribute('data-description', 'Logo Design');
            stripeButton.setAttribute('data-image', 'https://stripe.com/img/documentation/checkout/marketplace.png');
            stripeButton.setAttribute('data-locale', 'auto');
            stripeButtonContainer.appendChild(stripeButton);
        }

        // Attach event listeners to checkboxes
        // document.getElementById('edits').addEventListener('change', handleCheckboxChange);
        document.getElementById('ownership').addEventListener('change', handleCheckboxChange);
        document.getElementById('website').addEventListener('change', handleCheckboxChange);

        // Function to initialize price from URL
        function initializePriceFromUrl() {
            // let urlParams = new URLSearchParams(window.location.search);
            // let price = urlParams.get('price');
            let price = "{{ session()->get('price') }}"
            if (price) {
                basePrice = parseFloat(price);
                document.getElementById('totalPrice').textContent = basePrice;
                updateOrderTotal();
            }
        }

        // Initialize price from URL and update order total when page loads
        window.addEventListener('load', initializePriceFromUrl);
    </script>

    <script>
        $(document).ready(function() {
            const dataUrl = sessionStorage.getItem('logoDataUrl')

            $('.logo-mockup').each(function() {
                this.src = dataUrl
            })

            $('input[name=logoDataUrl]').val(
                sessionStorage.getItem('logoDataUrl')
            )
        })
    </script>

@endsection
