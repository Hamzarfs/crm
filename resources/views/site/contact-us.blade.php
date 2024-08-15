@extends('site.common')

@section('title', 'Contact Us')

@section('content')

    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">

    <style>
        body {
            font-family: 'Poppins', sans-serif;
        }

        .contact-section {
            padding: 60px 0;
        }

        .contact-section h2 {
            font-size: 2.5rem;
            font-weight: 700;
            color: #333;
            margin-bottom: 20px;
        }

        .contact-section p {
            font-size: 1.1rem;
            color: #666;
            margin-bottom: 30px;
        }

        .contact-section .btn {
            background-color: #512f90;
            border: none;
            border-radius: 5px;
            padding: 10px 20px;
        }

        .contact-section .btn:hover {
            background-color: #3d2171;
        }

        .contact-info {
            margin-bottom: 30px;
            display: flex;
            align-items: center;
        }

        .contact-info h5 {
            font-size: 1.2rem;
            font-weight: 600;
            color: #333;
            margin-bottom: 10px;
            margin-left: 10px;
        }

        .contact-info i {
            font-size: 1.5rem;
            color: #512f90;
            margin-right: 15px;
        }

        .contact-info p {
            margin: 0;
            font-size: 1.1rem;
            color: #666;
        }

        .contact-info a {
            color: inherit;
            text-decoration: none;
        }

        .form-group label {
            font-weight: 600;
            color: #333;
        }

        .form-control {
            border: none;
            border-bottom: 2px solid #ddd;
            border-radius: 0;
            padding-left: 2.5rem;
        }

        .form-control::placeholder {
            color: #aaa;
        }

        .form-control:focus {
            box-shadow: none;
            border-color: #512f90;
        }

        .form-icon {
            position: absolute;
            left: 10px;
            top: 70%;
            transform: translateY(-50%);
            color: #aaa;
        }

        .form-group {
            position: relative;
            margin-bottom: 1.5rem;
        }

        .form-group.filled .form-icon {
            color: #512f90;
        }

        .animated-form {
            animation: slideInRight 1s ease-in-out;
        }

        @keyframes slideInRight {
            from {
                opacity: 0;
                transform: translateX(100%);
            }

            to {
                opacity: 1;
                transform: translateX(0);
            }
        }

        .heading-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
        }

        .heading-container h3 {
            font-size: 18px;
            font-weight: bold;
            color: #6a70d6;
        }

        .contact-button-online {
            padding: 10px;
            border-radius: 5px;
            color: #fff;
            background-color: #646BD9;
            font-size: 15px;
            font-weight: 700;
            line-height: 24px;
            text-align: center;
            border-color: #646BD9;
            margin-bottom: 30px;
        }

        .contact-button-online:hover {
            background-color: #646BD9;
            border-color: #646BD9;
        }

        .banner-section {
            background-color: #dbe1ff;
            padding: 50px 0;
        }

        .banner-section h1 {
            font-size: 34px;
            font-weight: 700;
            color: #333;
            margin-bottom: 20px;
        }

        .banner-section p {
            font-size: 1.2rem;
            color: #666;
            margin-bottom: 30px;
        }

        .banner-section .btn {
            background-color: #512f90;
            border: none;
            border-radius: 5px;
            padding: 10px 20px;
        }

        .banner-section .btn:hover {
            background-color: #3d2171;
        }
    </style>



    <div class="banner-section">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-6">
                    <h1>Contact Us</h1>
                    <p>Your one-stop solution for all your design needs.</p>
                    <a class="contact-button-online" href="{{ url('/') }}">Get Started</a>
                </div>
                <div class="col-md-6">
                    <img src="images/contect-us.webp" alt="Banner Image" class="img-fluid">
                </div>
            </div>
        </div>
    </div>
    <div class="container contact-section">
        <h2>Contact Us</h2>
        <p>If you have a unique idea that you can't find among our templates, chat with a live representative through
            our chat window or reach out to us using the form below. Rest assured, we'll respond promptly.</p>
        <p>For tailored design solutions, explore our comprehensive range of services, including custom logo design,
            business cards, stationery design, banners, and website design and development. Expect a prompt response
            from our team, ready to assist you every step of the way.</p>
        <button class="contact-button-online">Chat with Us</button>

        <div class="row">
            <div class="col-md-6">
                <div class="heading-container">
                    <h3>Contact Info</h3>
                </div>
                <div class="contact-info">
                    <i class="fas fa-phone-alt"></i>
                    <p><a href="tel:+15516662555">551-666-2555</a></p>
                </div>
                <div class="contact-info">
                    <i class="fas fa-clock"></i>
                    <p>Mon-Fri, 9am-5pm EST</p>
                </div>
                <div class="contact-info">
                    <i class="fas fa-map-marker-alt"></i>
                    <p><a href="https://www.google.com/maps/search/?api=1&query=41+Winthrop+Rd,+Edison,+NJ+08817"
                            target="_blank">41 Winthrop Rd, Edison, NJ 08817</a></p>
                </div>
            </div>
            <div class="col-md-6 animated-form">
                <div class="heading-container">
                    <h3>Contact Form</h3>
                </div>
                <form id="contactForm" method="POST" action="{{ route('contactUs') }}">
                    @csrf
                    <div class="form-group">
                        <label for="name">Name</label>
                        <i class="fas fa-user form-icon"></i>
                        <input type="text" class="form-control" name="name" id="name"
                            placeholder="Enter your name" required>
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <i class="fas fa-envelope form-icon"></i>
                        <input type="email" class="form-control" name="email" id="email"
                            placeholder="Enter your email"
                            title="Please enter a valid email address ending with .com (e.g., example@example.com)"
                            required>
                    </div>
                    <div class="form-group">
                        <label for="phone">Phone</label>
                        <i class="fas fa-phone form-icon"></i>
                        <input type="text" class="form-control" name="phone" id="phone"
                            placeholder="Enter your phone number" pattern="\d{10}" required maxlength="10">
                    </div>
                    <div class="form-group">
                        <label for="comment">Comment</label>
                        <i class="fas fa-comment form-icon"></i>
                        <textarea class="form-control" name="comment" id="comment" rows="1" placeholder="Enter your comment" required></textarea>
                    </div>
                    <button type="submit" class="contact-button-online">Submit</button>
                </form>
            </div>
        </div>
    </div>



    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.2/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

    <script>
        document.querySelectorAll('.form-control').forEach(input => {
            input.addEventListener('input', function() {
                if (this.value) {
                    this.parentElement.classList.add('filled');
                } else {
                    this.parentElement.classList.remove('filled');
                }
            });
        });

        document.getElementById('contactForm').addEventListener('submit', function(event) {
            var email = document.getElementById('email').value;
            var phone = document.getElementById('phone').value;
            var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            var phonePattern = /^\d{10}$/;

            if (!emailPattern.test(email)) {
                alert('Please enter a valid email address.');
                event.preventDefault();
                return;
            }

            if (!phonePattern.test(phone)) {
                alert('Please enter a valid phone number (10 digits).');
                event.preventDefault();
                return;
            }
        });

        @if (session()->has('success'))
            @if (session()->get('success'))
                swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Contact us form submitted successfully!'
                })
            @else
                swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Unexpected error occured. Please try again later!'
                })
            @endif
        @endif

        // $('#contactForm').submit(function() {
        //     event.preventDefault()
        //     console.log(this);
        //     const data = $(this).serialize()
        //     $.ajax({
        //         url: "{{ route('contactUs') }}",
        //         method: 'POST',
        //         data,
        //         headers: {
        //             'X-CSRF-TOKEN': "{{ csrf_token() }}",
        //         },
        //         success: function(response) {
        //             if (response.success) {
        //                 swal.fire({
        //                     icon: 'success',
        //                     title: 'Success',
        //                     text: 'Form submitted successfully!'
        //                 })
        //             } else {
        //                 swal.fire({
        //                     icon: 'error',
        //                     title: 'Error',
        //                     text: 'Unexpected error occured. Please try again later!'
        //                 })
        //             }
        //         },
        //     })
        // })
    </script>
@endsection
