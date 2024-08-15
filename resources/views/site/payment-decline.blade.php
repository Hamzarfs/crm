@extends('site.common')

@section('title', 'Payment Declined')

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

    <body>

        <div class="thankyou-page">
            <!-- <img src="images/Logos pic.png" width="400px"> -->
            <h1>Payment Decline</h1>
        </div>

        <div class="contact">
            <p>{{ session()->get('message') }}</p>
            <p>Having trouble? <a href="tel:+15515543283" class="phone-link">Contact us</a></p>
            <br>
            <br>
            <a class="btn" href="{{ url('/') }}">Back to homepage</a>

        </div>
    </body>



@endsection
