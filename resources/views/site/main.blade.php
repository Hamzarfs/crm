<!-- resources/views/site/main.blade.php -->
@extends('site.common')

@section('title', 'Welcome')

@section('content')

    <!----------------------------------------- Start Banner Section ------------------------------->
    <div class="container-fluid" style="background-color:#DBE1FF; padding-bottom: 100px;">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 banner-left order-lg-1">
                    <!-- <h1>Fast & Powerful Logo Maker for Business<br> Logo Design</h1> -->
                    <h2>Fast & Powerful Logo Maker for Business <span class="logo-design-color">Logo Design</span></h2>
                    <p>1M+ happy customers have got their company logo designs from our AI logo creator. Now it's your turn!
                    </p>
                    <form id="companyForm" method="POST" action="{{ url('/store-session-data') }}">
                        @csrf
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" id="companyName11" name="company"
                                placeholder="Enter your company name" aria-label="Enter your company name">
                            <input type="submit" class="custom-button-online" value="Get Started">
                        </div>
                    </form>
                </div>
                <div class="col-lg-6 text-center banner-image-sec order-lg-2">
                    <img src="images/Logos pic.png" alt="Example" class="img-fluid">
                </div>
            </div>
        </div>
    </div>

    <!----------------------------------------- End Banner Section ------------------------------->


    <!------------------------- section online logo------------------------------------>

    <div class="container my-5">
        <h1 class="maim-heading-online">How to make a Logo Design Online</h1>
        <p class="main-description-online">
            From conceptualizing to perfecting your design, making a logo design in our logo creator studio is a
            breeze. Just pick a logo template and follow these steps to get a modern logo downloaded in minutes.
        </p>

        <div class="row">
            <div class="col-md-5">
                <h2 class="heading-online">1. Start With Logo Maker Tools</h2>
                <p class="description-online">
                    Whether you’ve got a spark of a logo design idea or an illustrative mascot in mind, you’
                    ll find just the design you need in our extensive library of logo templates. All our logos
                    are organized according to industries as well as any type of niche your business maybe in.
                    Explore the extensive gallery to select the perfect logo symbol that matches with your brand
                    theme and persona.
                </p>
                <a href="{{ url('/contact-us') }}"><button class="custom-button-online">Explore Logo</button></a>
                <img src="images/Logo Pics.png" class="image-online">
            </div>
            <div class="col-md-2 center-image-online">
                <img src="images/Line points.png">
            </div>
            <div class="col-md-5">
                <img src="images/Laptop-Image 1.png" class="image-online">
                <h2 class="heading-online">2. Perfecting Your Logo Design</h2>
                <p class="description-online">
                    Now it’s time to customize your logo using our easy drag-and-drop design editor. From choosing
                    the font to styling with colors, effects, layouts, text, taglines, etc. you have plenty of
                    options to make the perfect logo for your brand. Or you can just get your logo design as it
                    is because all our logos are crafted to perfection by professional logo designers.
                </p>
                <a href="{{ url('/contact-us') }}"><button class="custom-button-online">Try Design Studio</button></a>
            </div>

            <div class="container my-5">
                <div class="row">
                    <div class="col-md-5">
                        <h2 class="heading-online">3. Download & Start Branding</h2>
                        <p class="description-online">
                            To start branding, all you have to do is download the logo
                            vector files such as PNG, PDF or JPEG. With the logo file you can
                            launch your business brand right away. Whether you are
                            looking to create a brand image through digital media or offline
                            with printed materials, your high-resolution logo design will
                            help you achieve all your marketing and branding goals.
                        </p>
                        <a href="{{ url('/contact-us') }}"> <button class="custom-button-online">Get Started</button></a>
                    </div>
                    <div class="col-md-2">
                    </div>
                    <div class="col-md-5">
                        <img src="images/111 1.png" class="img-fluid">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container my-5">
    </div>


    <!-------------------------End section online logo------------------------------------>



    <!-- <------------------Make A logo------------------>

    <section class="heroSection1">
        <div class="container">
            <div class="row">
                <div class="col-12 mb-4">
                    <h1 class="heroTitle1">Ready to make <br>your logo?</h1>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-md-6 d-flex align-items-center mb-3">
                    <input type="text" class="form-control mr-2" id="businessName"
                        placeholder="Enter Your Business Name">
                    <button class="btn search-button-online" onclick="addText()">Make A logo</button>
                </div>
            </div>
        </div>
    </section>

    <!-- <------------------End Make A logo---------------->






    <!-- ---------------------start porfolio -------------------->


    <div class="banner-section" style="background-color: #dbe1ff; padding-bottom: 100px;">
        <div class="container portfolio-section">
            <h2 class="portfolio-heading">Pick an industry, or design with a logo template</h2>
            <p class="main-description-online">
                From beauty logos to construction logos; from alphabet logos to iconic logos;
                from classic to modern logos; we have every kind of logo you can think of.
                Here are a few choices for you to get started
            </p>

            <div class="row">
                @foreach ($categories as $category)
                    @if ($category->products->isNotEmpty())
                        @php
                            $product = $category->products->first(); // Get the first product
                        @endphp
                        <div class="col-lg-4 col-md-6 mb-4">
                            <a href="#" class="card-container-link" data-image="{{ $product->image }}" data-id="{{ $product->id }}"
                                data-placeholder="{{ $product->placeholder_value }}">
                                <div class="card-container">
                                    <div class="card-inner">
                                        <div class="card-front">
                                            <img src="category-image/{{ $product->image }}"
                                                class="img-fluid portfolio-image" alt="{{ $product->name }}">
                                            <div class="text-placeholder"
                                                data-placeholder-value="{{ $product->placeholder_value }}"></div>

                                        </div>
                                        <div class="card-back">
                                            <div class="category-name">{{ $category->name }}</div>
                                        </div>
                                    </div>
                                </div>
                            </a>

                        </div>
                    @endif
                @endforeach
            </div>


            {{-- <div class="row">
                @foreach ($products as $product)
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="card-container">
                            <img src="category-image/{{ $product->image }}" class="img-fluid portfolio-image">
                            <div class="text-placeholder"></div>
                            <a href="{{ url('/store-session-data-image?image=' . $product->image) }}"
                                class="hover-button select-btn" data-product-id="{{ $product->id }}">Select </a>
                        </div>
                    </div>
                @endforeach
            </div> --}}






            <h1 class="studioTitle">Every Kind Of Design in Our Logo Creator Studio</h1>
        </div>
    </div>

    <!-----------------End  Portfolio ----------------------->

    <!------------Start Image Box Section ------------->

    <section class="image-box" style="padding-top: 100px; padding-bottom: 100px;">
        <div class="container">
            <!-- First Row -->
            <div class="row mb-4">
                <div class="col text-center">
                    <h1>How to create that perfect logo</h1>
                    <p>Not sure where to start? Need some help creating a great logo? Here's a few bitesized tips from the
                        pros:</p>
                </div>
            </div>
            <!-- Second Row -->
            <div class="row">
                <!-- First Column -->
                <div class="col-md-4 image-column mb-3 mb-md-0">
                    <img src="images/Imagebox1_bird.png" alt="Logo type">
                    <h2>Logo type</h2>
                    <p>Did you know there's an array of different logo types to choose from? What choice you make depends on
                        the message you want your logo to convey - You can have a logo with just text or just an icon or
                        maybe it should have both? This is a critical decision in the logo design process.</p>
                    <a href="#">Find out more</a>
                </div>
                <!-- Second Column -->
                <div class="col-md-4 image-column mb-3 mb-md-0">
                    <img src="images/Imagebox2_color.png" alt="Logo colors">
                    <h2>Logo colors</h2>
                    <p>Did you know there's an array of different logo types to choose from? What choice you make depends on
                        the message you want your logo to convey - You can have a logo with just text or just an icon or
                        maybe it should have both? This is a critical decision in the logo design process.</p>
                    <a href="#">Find out more</a>
                </div>
                <!-- Third Column -->
                <div class="col-md-4 image-column">
                    <img src="images/Imagebox3_font.png" alt="Logo fonts">
                    <h2>Logo fonts</h2>
                    <p>Did you know there's an array of different logo types to choose from? What choice you make depends on
                        the message you want your logo to convey - You can have a logo with just text or just an icon or
                        maybe it should have both? This is a critical decision in the logo design process.</p>
                    <a href="#">Find out more</a>
                </div>
            </div>
        </div>
    </section>

    <!------------Start Image Box Section ------------->


    <!-- start plan section -->

    <section class="plan-section">
        <div class="container">
            <!-- Heading -->
            <div class="row">
                <div class="col-12">
                    <div class="heading">Sounds Like a Plan</div>
                </div>
            </div>
            <!-- Card Slider -->
            <div class="row card-price-container flex-column flex-md-row">
                <div class="card" onclick="expandCard(this)">
                    <h5>Get Logo Maker Deal</h5>
                    <p>Make standout social content, flyers, logos, banners, and more. Free use forever.</p>
                    <ul>
                        <li><i class="bi bi-check-circle"></i> 10000+ logos to choose</li>
                        <li><i class="bi bi-check-circle"></i> Instant download</li>
                        <li><i class="bi bi-check-circle"></i> Unlimited customization</li>
                        <li><i class="bi bi-check-circle"></i> Ready brand identity designs</li>
                        <li><i class="bi bi-check-circle"></i> High-res PDF, PNG, JPG</li>
                        <li><i class="bi bi-check-circle"></i> As low as $37</li>
                    </ul>
                    <button class="plan-btn">For Startups</button>
                </div>
                <div class="card" onclick="expandCard(this)">
                    <h5>Get Logo Maker Deal</h5>
                    <p>Make standout social content, flyers, logos, banners, and more. Free use forever.</p>
                    <ul>
                        <li><i class="bi bi-check-circle"></i> 10000+ logos to choose</li>
                        <li><i class="bi bi-check-circle"></i> Instant download</li>
                        <li><i class="bi bi-check-circle"></i> Unlimited customization</li>
                        <li><i class="bi bi-check-circle"></i> Ready brand identity designs</li>
                        <li><i class="bi bi-check-circle"></i> High-res PDF, PNG, JPG</li>
                        <li><i class="bi bi-check-circle"></i> As low as $37</li>
                    </ul>
                    <button class="plan-btn">For Startups</button>
                </div>
            </div>
        </div>
    </section>


    <!-- End Plan Section -->



    <!-- Start Hire Section -->

    <section class="hire-section-bg">
        <div class="container hire-section">

            <div class="row align-items-center">
                <!-- Left Column -->
                <div class="col-md-6 left-column text-center text-md-start">
                    <p>Need to hire</p>
                    <h2>A Custom Logo Designer?</h2>
                    <button class="hire-call-now-btn">Call Now</button>
                </div>
                <!-- Right Column -->
                <div class="col-md-6 right-column">
                    <img src="images/hire-section-logos.png" class="hire-section-logo" alt="Logo">
                </div>
            </div>

        </div>
    </section>



    <!-- End Hire Section -->




    <!-- <-----------------Start 1M Happy Customers Counting---------------->


    <section class="testimonials-section">
        <div class="container">
            <h2><strong>1M Happy Customers Counting</strong></h2>
            <div class="row equal justify-content-center">
                <div class="col-md-4">
                    <div class="owl-item">
                        <div class="owl-item-div">
                            <div class="logoReveiwImage">
                                <div class="circle-white">
                                    <img width="113" height="122" class="lazy"
                                        data-src="/images/testimonials-logo-04.png"
                                        src="images/Logo Flora care Lawn Care Services llc-01-300x300 1.png"
                                        alt="">
                                </div>
                            </div>
                            <div class="logoReveiwText">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <p>They are very flexible and have great customer support.
                                    I made a cool looking logo in 2 minutes. Overall great website
                                    with good customer support. Jonathan was the agent that
                                    helped me he answered all my questions
                                    and was very nice about it.</p>
                                <p><strong>Michael K.</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="owl-item">
                        <div class="owl-item-div">
                            <div class="logoReveiwImage">
                                <div class="circle-white">
                                    <img width="113" height="122" class="lazy"
                                        data-src="/images/testimonials-logo-05.png" src="images/Untitled design.png"
                                        alt="">
                                </div>
                            </div>
                            <div class="logoReveiwText">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <p>They are very flexible and have great customer support.
                                    I made a cool looking logo in 2 minutes. Overall great website
                                    with good customer support. Jonathan was the agent that
                                    helped me he answered all my questions and was very nice
                                    about it.</p>
                                <p><strong>Jane D.</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="owl-item">
                        <div class="owl-item-div">
                            <div class="logoReveiwImage">
                                <div class="circle-white">
                                    <img width="113" height="122" class="lazy"
                                        data-src="/images/testimonials-logo-06.png" src="images/image 14.png"
                                        alt="">
                                </div>
                            </div>
                            <div class="logoReveiwText">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <p>They are very flexible and have great customer support.
                                    I made a cool looking logo in 2 minutes. Overall great website
                                    with good customer support. Jonathan was the agent that
                                    helped me he answered all my questions
                                    and was very nice about it.</p>
                                <p><strong>John S.</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- <-----------------End 1M Happy Customers Counting---------------->
    <script>
        function addText() {
            const businessName = document.getElementById('businessName').value;
            const textPlaceholders = document.querySelectorAll('.text-placeholder');
            const companyName =
                textPlaceholders.forEach(placeholder => {
                    placeholder.innerText = businessName;

                });
        }
    </script>


    <script>
        document.querySelectorAll('.card-container-link').forEach(link => {
            link.addEventListener('click', function(e) {
                @auth
                    e.preventDefault();
                    let image = this.getAttribute('data-image');
                    let id = this.dataset.id
                    let company = document.getElementById('businessName').value;
                    let urlBase = "{{ url('/') }}";

                    let url = urlBase +
                        `/store-session-data-image?image=${encodeURIComponent(image)}&company=${encodeURIComponent(company)}&product-id=${encodeURIComponent(id)}`;

                    window.location.href = url;
                @else
                    event.preventDefault()
                    $('#login-modal').modal('show')
                @endauth
            });
        });
    </script>



    <!-- jQuery library -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

    <script>
        $(document).ready(function() {
            $('#companyForm').on('submit', function(event) {
                @auth
                    const companyName = $('#companyName11').val().trim();
                    if (!companyName) {
                        event.preventDefault();
                        alert("Please enter your company name.");
                    }
                @else
                    event.preventDefault()
                    $('#login-modal').modal('show')
                @endauth
            })

            @if(request()->query('login'))
                $('#login-modal').modal('show')
            @endif

            $('.login-link').click(function() {
                $('#login-modal').modal('show')
            })


            // $('#companyForm').on('submit', function(event) {
            //     event.preventDefault();
            //     const companyName = $('#companyName').val().trim();
            //     if (companyName) {
            //         const nextUrl = `color?companyName=${encodeURIComponent(companyName)}`;
            //         window.location.href = nextUrl;
            //     } else {
            //         alert("Please enter your company name.");
            //     }
            // });
        });
    </script>

    <!-- Other scripts or libraries -->

@endsection
