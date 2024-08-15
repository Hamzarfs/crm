<!-- resources/views/site/main.blade.php -->
@extends('site.common')

@section('title', 'About us')

@section('content')

    <!-- Bootstrap CSS -->
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">


    <!------------- Start Abouts Us Banner -------------->
    <div class="about-us-section">
        <div class="container mt-5">
            <div class="row align-items-center">
                <div class="col-lg-6 about-us-left order-lg-1">
                    <h1>About Us</h1>
                    <h2 style="font-weight: bold; font-size: 24px;">Welcome to RFS LOGO DESIGN</h2>
                    <p class="text-justify">Welcome to RFS Logo Design, your one-stop solution for all your branding needs.
                        We specialize in creating unique and impactful logos through our Free Logo Maker
                        and custom design services. Our team of dedicated graphic designers is committed
                        to bringing your vision to life with creativity and precision. Beyond logo design,
                        we also offer comprehensive website development services to ensure your online presence
                        is as strong as your brand identity. At RFS Logo Design, we pride ourselves on providing
                        responsive customer support, ensuring your experience with us is smooth and satisfactory
                        from start to finish.
                    </p>
                    <form>
                        <a href="{{ url('/') }}" class="custom-button-online" type="submit">Get Started</button></a>
                    </form>
                </div>
                <div class="col-lg-6 text-center about-us-image-sec order-lg-2">
                    <img src="images/about-us-logo.png" alt="Example" class="img-fluid">
                </div>
            </div>
        </div>
    </div>
    <!-------------End Abouts Us Banner -------------->


    <!---------Strat Our Mission $ Our vision --------->
    <section class="mission-vision-section">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="mission-vision-content">
                        <img src="images/mission.svg" alt="Vision Logo">
                        <h2>Our Vision</h2>
                        <p>Our vision is to democratize access to high-quality graphic design through our state-of-the-art
                            logo creator.
                            We are dedicated to serving a wide array of clients, including entrepreneurs, small enterprises,
                            web designers,
                            visual artists, content creators, and small and large businesses. By providing unlimited logo
                            design concepts,
                            we aspire to inspire creativity and elevate design standards across all sectors.</p>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="mission-vision-content">
                        <img src="images/vision.svg" alt="Mission Logo">
                        <h2>Our Mission</h2>
                        <p>Our mission is to revolutionize the design industry by providing accessible and affordable
                            high-quality graphic design
                            solutions. We strive to support businesses of all sizes and types, fostering creativity and
                            innovation. Through our
                            user-friendly tools and dedicated customer service, we aim to simplify the design process and
                            enhance brand identities.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!---------End Our Mission $ Our vision --------->


    <!---------start Why Choose RFS Logo Design? --------->
    <section class="choose-us-section">
        <div class="container">
            <div class="choose-us-content">
                <h2>Why Choose <span>RFS Logo Design?</span></h2>
                <p>Choose RFS Logo Design for our innovative and user-friendly tools, affordable pricing, and exceptional
                    customer service. Our team of expert designers is dedicated to creating unique and impactful logos
                    tailored to your brand. Experience unparalleled creativity and support with RFS Logo Design, your
                    trusted partner in branding.</p>
            </div>
        </div>
    </section>
    <!---------End Why Choose RFS Logo Design? ---------->


    <!-- Bootstrap JS and dependencies -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

@endsection
