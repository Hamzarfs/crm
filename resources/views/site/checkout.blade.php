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
            /* max-height: 600px; */
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

        form {
            width: 30vw;
            min-width: 500px;
            align-self: center;
            box-shadow: 0px 0px 0px 0.5px rgba(50, 50, 93, 0.1),
                0px 2px 5px 0px rgba(50, 50, 93, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.07);
            border-radius: 7px;
            padding: 40px;
        }

        .hidden {
            display: none;
        }

        #payment-message {
            color: rgb(105, 115, 134);
            font-size: 16px;
            line-height: 20px;
            padding-top: 12px;
            text-align: center;
        }

        #payment-element {
            margin-bottom: 24px;
        }

        /* Buttons and links */
        button {
            background: #5469d4;
            font-family: Arial, sans-serif;
            color: #ffffff;
            border-radius: 4px;
            border: 0;
            padding: 12px 16px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            display: block;
            transition: all 0.2s ease;
            box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
            width: 100%;
        }

        button:hover {
            filter: contrast(115%);
        }

        button:disabled {
            opacity: 0.5;
            cursor: default;
        }

        /* spinner/processing state, errors */
        .spinner,
        .spinner:before,
        .spinner:after {
            border-radius: 50%;
        }

        .spinner {
            color: #ffffff;
            font-size: 22px;
            text-indent: -99999px;
            margin: 0px auto;
            position: relative;
            width: 20px;
            height: 20px;
            box-shadow: inset 0 0 0 2px;
            -webkit-transform: translateZ(0);
            -ms-transform: translateZ(0);
            transform: translateZ(0);
        }

        .spinner:before,
        .spinner:after {
            position: absolute;
            content: "";
        }

        .spinner:before {
            width: 10.4px;
            height: 20.4px;
            background: #5469d4;
            border-radius: 20.4px 0 0 20.4px;
            top: -0.2px;
            left: -0.2px;
            -webkit-transform-origin: 10.4px 10.2px;
            transform-origin: 10.4px 10.2px;
            -webkit-animation: loading 2s infinite ease 1.5s;
            animation: loading 2s infinite ease 1.5s;
        }

        .spinner:after {
            width: 10.4px;
            height: 10.2px;
            background: #5469d4;
            border-radius: 0 10.2px 10.2px 0;
            top: -0.1px;
            left: 10.2px;
            -webkit-transform-origin: 0px 10.2px;
            transform-origin: 0px 10.2px;
            -webkit-animation: loading 2s infinite ease;
            animation: loading 2s infinite ease;
        }

        @-webkit-keyframes loading {
            0% {
                -webkit-transform: rotate(0deg);
                transform: rotate(0deg);
            }

            100% {
                -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
            }
        }

        @keyframes loading {
            0% {
                -webkit-transform: rotate(0deg);
                transform: rotate(0deg);
            }

            100% {
                -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
            }
        }

        @media only screen and (max-width: 600px) {
            form {
                width: 80vw;
                min-width: initial;
            }
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
                <div class="checkout-section p-3 h-100">
                    <h3 class="checkout-title">Checkout</h3>
                    <p class="checkout-subtitle mb-2">{{ session()->get('package-name') }}</p>
                    <a href="#" class="change-package">Change Package</a>
                    <h4 class="order-total my-3">$<span id="totalPrice">{{ session()->get('price') }}</span> USD</h4>

                    <!-- Checkboxes for additional options -->
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="edits">
                        <label class="form-check-label" for="edits">Unlimited FREE edits for all your designs for a month. $5/mo after the first month, charged quarterly.</label>
                    </div>
                    <div class="form-check mt-2">
                        <input type="checkbox" class="form-check-input" id="ownership" value="599">
                        <label class="form-check-label" for="ownership">Get exclusive ownership of your logo copyrights for $599. We will remove this logo from our website.</label>
                    </div>
                    <div class="form-check mt-2">
                        <input type="checkbox" class="form-check-input" id="website" value="14.99">
                        <label class="form-check-label" for="website">Get a professional website FREE for a month. $14.99/mo after the first month.</label>
                    </div>
                    <h4 class="order-total my-3">ORDER TOTAL: $<span id="orderTotal">{{ session()->get('price') }}</span>
                    </h4>

                    <!-- Display a payment form -->
                    <div id="checkout">
                        <!-- Checkout will insert the payment form here -->
                    </div>

                    <!-- Payment form -->
                    {{-- <form id="payment-form">
                        <input type="hidden" name="userid" value="{{ auth()->id() }}">
                        <input type="hidden" name="total" id="order-total" value="">
                        <input type="hidden" name="product-id" value="{{ session()->get('product-id') }}">
                        <input type="hidden" name="logoDataUrl" value="">
                        <div id="payment-element">
                            <!--Stripe.js injects the Payment Element-->
                        </div>
                        <button id="submit">
                            <div class="spinner hidden" id="spinner"></div>
                            <span id="button-text">Pay now</span>
                        </button>
                        <div id="payment-message" class="hidden"></div>
                    </form> --}}
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
    <script src="https://js.stripe.com/v3/"></script>

    <script>
        const stripe = Stripe("{{ env('STRIPE_PUBLIC') }}");
        let checkout

        let ownership = document.getElementById('ownership')
        let website = document.getElementById('website')

        // Create a Checkout Session
        async function initialize(e, price = {{ session()->get('price') }}) {
            let total = price;

            if (ownership.checked) total += parseFloat(ownership.value);
            if (website.checked) total += parseFloat(website.value);

            document.getElementById('orderTotal').innerText = document.getElementById('totalPrice').innerText = total;

            const fetchClientSecret = async () => {
                const response = await fetch("{{ route('initializeCharge') }}", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "X-CSRF-TOKEN": "{{ csrf_token() }}",
                    },
                    body: JSON.stringify({
                        price: total,
                    }),
                });

                const { clientSecret } = await response.json();

                return clientSecret;
            };

            if(checkout) checkout.destroy()

            checkout = await stripe.initEmbeddedCheckout({
                fetchClientSecret,
            });

            // Mount Checkout
            checkout.mount('#checkout');
        }

        ownership.addEventListener('change', initialize);
        website.addEventListener('change', initialize);
        window.addEventListener('load', initialize);
    </script>

    {{-- <script>
        const stripe = Stripe("{{ env('STRIPE_PUBLIC') }}")

        let elements;

        initialize();
        checkStatus();

        document
            .querySelector("#payment-form")
            .addEventListener("submit", handleSubmit);

        // Fetches a payment intent and captures the client secret
        async function initialize() {
            const {
                clientSecret
            } = await fetch("{{ route('initializeCharge') }}", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRF-TOKEN": "{{ csrf_token() }}",
                },
            }).then((r) => r.json());

            elements = stripe.elements({
                clientSecret
            });

            const paymentElementOptions = {
                layout: "tabs",
            };

            const paymentElement = elements.create("payment");
            paymentElement.mount("#payment-element");
        }

        async function handleSubmit(e) {
            e.preventDefault();
            setLoading(true);

            const {
                error
            } = await stripe.confirmPayment({
                elements,
                confirmParams: {
                    // Make sure to change this to your payment completion page
                    return_url: "{{ route('thankyou') }}",
                },
            });

            // This point will only be reached if there is an immediate error when
            // confirming the payment. Otherwise, your customer will be redirected to
            // your `return_url`. For some payment methods like iDEAL, your customer will
            // be redirected to an intermediate site first to authorize the payment, then
            // redirected to the `return_url`.
            if (error.type === "card_error" || error.type === "validation_error") {
                showMessage(error.message);
            } else {
                showMessage("An unexpected error occurred.");
            }

            setLoading(false);
        }

        // Fetches the payment intent status after payment submission
        async function checkStatus() {
            const clientSecret = new URLSearchParams(window.location.search).get(
                "payment_intent_client_secret"
            );

            if (!clientSecret) {
                return;
            }

            const {
                paymentIntent
            } = await stripe.retrievePaymentIntent(clientSecret);

            switch (paymentIntent.status) {
                case "succeeded":
                    showMessage("Payment succeeded!");
                    break;
                case "processing":
                    showMessage("Your payment is processing.");
                    break;
                case "requires_payment_method":
                    showMessage("Your payment was not successful, please try again.");
                    break;
                default:
                    showMessage("Something went wrong.");
                    break;
            }
        }

        // ------- UI helpers -------

        function showMessage(messageText) {
            const messageContainer = document.querySelector("#payment-message");

            messageContainer.classList.remove("hidden");
            messageContainer.textContent = messageText;

            setTimeout(function() {
                messageContainer.classList.add("hidden");
                messageContainer.textContent = "";
            }, 4000);
        }

        // Show a spinner on payment submission
        function setLoading(isLoading) {
            if (isLoading) {
                // Disable the button and show a spinner
                document.querySelector("#submit").disabled = true;
                document.querySelector("#spinner").classList.remove("hidden");
                document.querySelector("#button-text").classList.add("hidden");
            } else {
                document.querySelector("#submit").disabled = false;
                document.querySelector("#spinner").classList.add("hidden");
                document.querySelector("#button-text").classList.remove("hidden");
            }
        }
    </script> --}}


    {{-- <script>
        let basePrice = {{ session()->get('price') }}; // Initial base price

        // Object to keep track of checkbox values
        const checkboxValues = {
            // 'edits': 0,
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
            // let stripeButtonContainer = document.getElementById('stripe-button-container');
            // stripeButtonContainer.innerHTML = ''; // Clear any existing button

            // let stripeButton = document.createElement('script');
            // stripeButton.src = 'https://checkout.stripe.com/checkout.js';
            // stripeButton.className = 'stripe-button';
            // stripeButton.setAttribute('data-key',
            //     '{{ env('STRIPE_PUBLIC') }}'
            // );
            // stripeButton.setAttribute('data-amount', total * 100); // Convert to cents
            // stripeButton.setAttribute('data-name', 'RFS');
            // stripeButton.setAttribute('data-description', 'Logo Design');
            // stripeButton.setAttribute('data-image', 'https://stripe.com/img/documentation/checkout/marketplace.png');
            // stripeButton.setAttribute('data-locale', 'auto');
            // stripeButtonContainer.appendChild(stripeButton);
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
    </script> --}}

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
