<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>@yield('title')</title>
        <style>
            .emailtemplate {
                font-family: 'Arial', sans-serif;
                margin: 0;
                padding: 0;
                background-color: #f4f4f4;
                width: 100%;
                max-width: 600px;
                margin: 0 auto;
                background-color: #fff;
                border-radius: 10px;
                overflow: hidden;
                box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
                animation: fadeIn 1s ease-in-out;
            }

            .emailtemplate .header,
            .emailtemplate .footer {
                background-color: #e0c3fc;
                color: #333;
                text-align: center;
                padding: 30px 20px;
                animation: fadeIn 1.5s ease-in-out;
            }

            .emailtemplate .header img {
                max-width: 100px;
                margin-bottom: 10px;
            }

            .emailtemplate .content {
                padding: 30px 20px;
                color: #333;
            }

            .emailtemplate .content p {
                margin: 10px 0;
                line-height: 1.6;
            }

            .emailtemplate .footer p {
                margin: 5px 0;
                font-size: 12px;
            }

            .emailtemplate .footer a {
                color: #333;
                text-decoration: none;
            }

            .emailtemplate .content .user-info {
                margin: 20px 0;
                padding: 20px;
                background-color: #f9f9f9;
                border-left: 4px solid #e0c3fc;
                border-radius: 5px;
                animation: fadeIn 2s ease-in-out;
            }

            .emailtemplate .content .user-info p {
                margin: 5px 0;
            }

            .emailtemplate .footer .contact-number {
                font-weight: bold;
            }
        </style>
    </head>

    <body>
        <div class="emailtemplate">
            <div class="header">
                <img src="{{ asset('images/Logo.png') }}" alt="Logo">
            </div>
            <div class="content">
                <div class="user-info">
                    @yield('content')
                    {{-- <p><strong>Email:</strong> [User's Email]</p>
                    <p><strong>Phone Number:</strong> [User's Phone Number]</p>
                    <p><strong>Message:</strong></p>
                    <p>[User's Message]</p> --}}
                </div>
            </div>
            <div class="footer">
                <p class="contact-number">Contact Number: [Your Contact Number]</p>
                <p><a href="#">Terms & Conditions</a></p>
            </div>
        </div>
    </body>

</html>
