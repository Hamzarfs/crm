<!-- resources/views/site/main.blade.php -->
@extends('site.common')

@section('title', 'Payment Success')

@section('content')

    <style>
        html,
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
        }

        .thankyou-page {
            text-align: center;
            background-image: linear-gradient(45deg, #253a4b, #666BC0);
            color: white;
            padding: 100px 100px 50px 100px;

        }

        .contact {
            text-align: center;
            background-color: white;
            color: rgb(0, 0, 0);
            padding: 50px;
        }

        .contact .phone-link {
            color: #6B6BBB;
        }

        .thankyou-page h1 {
            font-size: 60px;
            margin-bottom: 10px;
        }

        .h2 {
            margin-top: 10px;
        }

        .thankyou-page p {
            font-size: 18px;
            margin-bottom: 30px;
        }

        .thankyou-page a {
            color: white;
            text-decoration: none;
            font-weight: bold;
        }

        .thankyou-page .btn {
            background-color: #4ab74a;
            color: white;
            border: none;
            padding: 15px 30px;
            font-size: 16px;
            border-radius: 5px;
            text-transform: uppercase;
            cursor: pointer;
            transition: background-color 0.3s;
        }

        .btn {
            margin-bottom: 20px;
            background-color: #666BC0;
            color: white;
            border: none;
            padding: 15px 30px;
            font-size: 16px;
            border-radius: 5px;
            text-transform: uppercase;
            cursor: pointer;
            transition: background-color 10s;
        }

        .thankyou-page .btn:hover {
            background-color: #3b913b;
        }
    </style>

    <div class="thankyou-page">
        <!-- <img src="images/Logos pic.png" width="400px"> -->
        <h1>Thank You!</h1>
    </div>

    <div class="contact">
        <h2>Please check your email for further instructions.</h2>
        <p>Your brief has been successfully received. We’ve received it and one of our representatives will be in touch
            soon to discuss it further and guide you through the next steps.</p>
        <p>Having trouble? <a href="tel:+15515543283" class="phone-link">Contact us</a></p>
        <br>
        <br>
        <div class="action-btns">
            <a class="btn" href="{{ route('admin.orders.index') }}">Orders</a>
            <a class="btn" href="{{ url('/') }}">Back to homepage</a>
        </div>

    </div>

    <script>
        setTimeout(() => {
            location.replace("{{ route('maker') }}")
        }, (10 * 1000));
        // initialize();

        // async function initialize() {
        //     const queryString = window.location.search;
        //     const urlParams = new URLSearchParams(queryString);
        //     const sessionId = urlParams.get('session_id');
        //     const response = await fetch("{{ route('checkPaymentStatus') }}", {
        //         headers: {
        //             Accept: "application/json",
        //             "Content-Type": "application/json",
        //             "X-CSRF-TOKEN": "{{ csrf_token() }}",
        //         },
        //         method: "POST",
        //         body: JSON.stringify({
        //             session_id: sessionId
        //         }),
        //     });
        //     const session = await response.json();

        //     if (session.status == 'open') {
        //         alert('Payment failed! Redirecting to the checkout page.')
        //         location.replace("{{ route('checkout') }}")
        //     } else if (session.status == 'complete') {
        //         const response = await fetch("{{ route('orderComplete') }}", {
        //                 method: 'POST',
        //                 headers: {
        //                     'X-CSRF-TOKEN': "{{ csrf_token() }}",
        //                     Accept: 'application/json',
        //                     "Content-Type": "application/json",
        //                 },
        //                 body: JSON.stringify({
        //                     logoString: sessionStorage.getItem('logoDataUrl'),
        //                 })
        //             })
        //             .then(() => {
        //                 $('.action-btns').removeClass('d-none')
        //                 setTimeout(() => {
        //                     location.replace("{{ route('maker') }}")
        //                 }, (10 * 1000));
        //             })

        //         document.getElementById('thankyou-page').classList.remove('d-none');
        //         document.getElementById('contact').classList.remove('d-none');
        //     }
        // }
    </script>


@endsection
