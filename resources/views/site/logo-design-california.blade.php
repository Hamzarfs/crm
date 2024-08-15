@extends('site.common')

@section('title', 'Welcome')

@section('content')
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About Us</title>
    <!-- Bootstrap CSS -->
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <!-- Font Awesome CSS -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet">
    <!-- Poppins Font -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
    <link href="{{ asset('css/styles.css') }}" rel="stylesheet"> <!-- Link to the external CSS file -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">

    <style>
       
       
    </style>
</head>
<body>
    <div class="banner-section">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 content-section">
                    <h1>Custom Logo Designing at RFS Logo Design</h1>
                    <h2>Best Custom <span class="logo-design-color">Logo Design</span> Company in California</h2>
                    <ul class="icon-list">
                        <li><i class="fas fa-trophy"></i> Ranked #1 Logo Design Agency in California</li>
                        <li><i class="fas fa-briefcase"></i> Versatile Expertise Across Diverse Industries</li>
                        <li><i class="fas fa-sync-alt"></i> Unlimited Logo Design Revisions</li>
                        <li><i class="fas fa-users"></i> Personalized Approach to Client Needs</li>
                        <li><i class="fas fa-star"></i> 100% Satisfaction Guaranteed</li>
                    </ul>
                    <a href="{{ url('/') }}" class="california-button-online">Get Started</a>
                </div>
                <div class="col-lg-6 image-section text-center">
                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="3000">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="images/Laptop-1-Image 1.png" alt="Logo Design 1">
                            </div>
                            <div class="carousel-item">
                                <img src="images/Logo Pics.png" alt="Logo Design 2">
                            </div>
                            <div class="carousel-item">
                                <img src="images/111 1.png" alt="Logo Design 3">
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="logo-slider-section">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="logo-slider">
                        <img src="images/Group 14.png" alt="Logo 1">
                        <img src="images/Group 16.png" alt="Logo 2">
                        <img src="images/Group 17.png" alt="Logo 3">
                        <img src="images/Group 18.png" alt="Logo 4">
                        <img src="images/Group 21.png" alt="Logo 5">
                        <img src="images/Group 22.png" alt="Logo 6">

                        <!-- Repeat logos to ensure continuous animation -->
                        <img src="images/Group 14.png" alt="Logo 1">
                        <img src="images/Group 16.png" alt="Logo 2">
                        <img src="images/Group 17.png" alt="Logo 3">
                        <img src="images/Group 18.png" alt="Logo 4">
                        <img src="images/Group 21.png" alt="Logo 5">
                        <img src="images/Group 22.png" alt="Logo 6">
                    </div>
                </div>
            </div>
        </div>
    </div>

<!--------------------- Start PROFESSIONAL LOGO DESIGNS IN CA ----------------------->
    <div class="logo-designs-ca">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 text-center">
                    <img src="images/111 1.png" alt="Professional Logo Designs" class="professional-logo-image">
                </div>
                <div class="col-lg-6">
                    <h3>PROFESSIONAL LOGO DESIGNS IN CA</h3>
                    <p style="text-align: justify;">RFS Logo Design stands out as a premier logo design company 
                        based in California, renowned for its exceptional services in custom logo design. With a
                         talented team of designers dedicated to crafting unique and impactful logos, RFS Logo Design
                          ensures that each design reflects the essence of the brand it represents.</p>
                </div>
            </div>
        </div>
    </div>
<!--------------------- End PROFESSIONAL LOGO DESIGNS IN CA ----------------------->


<!---------------------- Start Portfolio -------------------------->

    <div class="logo-designs-portfolio">
    <div class="container">
        <div class="row filter-button-group">
            <button class="btn filter-button active" data-filter="all">All</button>
            <button class="btn filter-button" data-filter="iconic">Iconic Logo</button>
            <button class="btn filter-button" data-filter="typography">Typography Logo</button>
            <button class="btn filter-button" data-filter="illustrative">Illustrative Logo</button>
            <button class="btn filter-button" data-filter="animated">Animated Logo</button>
        </div>

        <div class="row gallery">
            <!-- Iconic Logos -->
            <div class="col-lg-4 col-md-6 mb-4 filter all iconic">
                <img src="images/portfoliologo3.png" alt="Iconic Logo 1">
            </div>
            <div class="col-lg-4 col-md-6 mb-4 filter all iconic">
                <img src="images/portfoliologo1.png" alt="Iconic Logo 2">
            </div>
            <div class="col-lg-4 col-md-6 mb-4 filter all iconic">
                <img src="images/portfoliologo6.png" alt="Iconic Logo 3">
            </div>

            <!-- Typography Logos -->
            <div class="col-lg-4 col-md-6 mb-4 filter all typography">
            <img src="images/portfoliologo6.png" alt="Typography Logo 1">
            </div>
            <div class="col-lg-4 col-md-6 mb-4 filter all typography">
            <img src="images/portfoliologo5.png" alt="Typography Logo 2">
            </div>

            <!-- Illustrative Logos -->
            <div class="col-lg-4 col-md-6 mb-4 filter all illustrative">
                <img src="images/Illustrative-Logo-Design3.webp" alt="Illustrative Logo 1">
            </div>
            <!-- <div class="col-lg-4 col-md-6 mb-4 filter all illustrative">
                <img src="illustrative2.jpg" alt="Illustrative Logo 2">
            </div> -->

            <!-- Animated Logos -->
            <div class="col-lg-4 col-md-6 mb-4 filter all animated">
                <img src="images/logo-animation-example-conversable.gif" alt="Animated Logo 1">
            </div>
            <div class="col-lg-4 col-md-6 mb-4 filter all animated">
                <img src="images/logo-design-animation.gif" alt="Animated Logo 2">
            </div>
        </div>
    </div>   
   </div>
<!---------------------- End Portfolio -------------------------->




<!-- -------------------Start FAQs ---------------


<div class="container faq-section">
        <h2 class="text-center mb-4">Frequently Asked Questions</h2>
        <div id="accordion">
            <-Question 1 -->
            <!-- <div class="card">
                <div class="card-header" id="headingOne">
                    <h5 class="mb-0">
                        <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <span class="faq-question">What is your refund policy?</span>

                        </button>
                    </h5>
                </div>

                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                    <div class="card-body">
                        We offer a full refund if you are not satisfied with our service within the first 30 days.
                    </div>
                </div>
            </div> -->

            <!-- Question 2 -->
            <!-- <div class="card">
                <div class="card-header" id="headingTwo">
                    <h5 class="mb-0">
                        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <span class="faq-question">How long does it take to design a logo?</span>

                        </button>
                    </h5>
                </div>

                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                    <div class="card-body">
                        The design process usually takes 1-2 weeks depending on the complexity of the logo and client feedback.
                    </div>
                </div>
            </div> -->

            <!-- Question 3 -->
            <!-- <div class="card">
                <div class="card-header" id="headingThree">
                    <h5 class="mb-0">
                        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <span class="faq-question">Can I request revisions?</span>
                      </button>
                    </h5>
                </div>

                <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                    <div class="card-body">
                        Yes, we offer up to three revisions to ensure you are completely satisfied with the final design.
                    </div>
                </div>
            </div> -->

            <!-- Question 4 -->
            <!-- <div class="card">
                <div class="card-header" id="headingFour">
                    <h5 class="mb-0">
                        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        <span class="faq-question">Do you provide vector files?</span>
                        </button>
                    </h5>
                </div>

                <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                    <div class="card-body">
                        Yes, all final logo designs come with vector files (AI, EPS) for scalability.
                    </div>
                </div>
            </div> -->

            <!-- Question 5 -->
            <!-- <div class="card">
                <div class="card-header" id="headingFive">
                    <h5 class="mb-0">
                        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        <span class="faq-question">What is the cost of a logo design?</span>
                        </button>
                    </h5>
                </div>

                <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordion">
                    <div class="card-body">
                        Our logo design packages start at $500. The final cost depends on the complexity and additional services requested.
                    </div>
                </div>
            </div>
        </div>
    </div> -->

    <!-- -------------------End FAQs --------------- -->


    
    <div class="container reviews-section">
        <h2 class="text-center">See What Our Clients Have to Say</h2>
        <div id="customers-testimonials" class="owl-carousel owl-theme">
            <!-- Review 1 -->
            <div class="item">
                <div class="review-card">
                    <div class="star-rating">
                        <span>&#9733;</span>
                        <span>&#9733;</span>
                        <span>&#9733;</span>
                        <span>&#9733;</span>
                        <span>&#9733;</span>
                    </div>
                    <p class="review-text">I have had a few hiccups during the design process, but they were always there to help resolve any issues.
                       The team at Logo RFS Logo Design made the logo design journey smooth and delivered beyond my expectations. Thanks a lot!</p>
                    <p class="review-author">- Alex Thompson</p>
                </div>
            </div>
            <!-- Review 2 -->
            <div class="item">
                <div class="review-card">
                    <div class="star-rating">
                        <span>&#9733;</span>
                        <span>&#9733;</span>
                        <span>&#9733;</span>
                        <span>&#9733;</span>
                        <span>&#9733;</span>
                    </div>
                    <p class="review-text">A fantastic turnaround. I ordered on Monday, and RFS Logo Design delivered my stationery design within just two days.
                       The speed and quality amazed me. The design perfectly captured my brand essence. Highly recommended!</p>
                    <p class="review-author">- Jeter Roberts</p>
                </div>
            </div>
            <!-- Review 3 -->
            <div class="item">
                <div class="review-card">
                    <div class="star-rating">
                        <span>&#9733;</span>
                        <span>&#9733;</span>
                        <span>&#9733;</span>
                        <span>&#9733;</span>
                        <span>&#9733;</span>
                    </div>
                    <p class="review-text">Thank you for the great work you did on my logo. RFS Logo Design’s team understood my vision and transformed it into a
                       logo that perfectly represents my brand. They were efficient, responsive, and delivered a standout design.</p>
                    <p class="review-author">- Jane Smith</p>
                </div>
            </div>
            <!-- Review 4 -->
            <div class="item">
                <div class="review-card">
                    <div class="star-rating">
                        <span>&#9733;</span>
                        <span>&#9733;</span>
                        <span>&#9733;</span>
                        <span>&#9733;</span>
                        <span>&#9733;</span>
                    </div>
                    <p class="review-text">I never imagined my logo would be this perfect. The designers at RFS Logo Design ensured they understood my requirements before they
                       began. The seamless design process resulted in a logo that I am proud of and love. 100% recommended!</p>
                    <p class="review-author">- Sia Williams</p>
                </div>
            </div>
            <!-- Review 5 -->
            <div class="item">
                <div class="review-card">
                    <div class="star-rating">
                        <span>&#9733;</span>
                        <span>&#9733;</span>
                        <span>&#9733;</span>
                        <span>&#9733;</span>
                        <span>&#9733;</span>
                    </div>
                    <p class="review-text">I was scared to try because I always got scammed before, but RFS Logo Design proved me wrong. They delivered an outstanding logo that truly
                       reflects my business. The process was transparent, and the final design exceeded my expectations.</p>
                    <p class="review-author">- Jennifer David</p>
                </div>
            </div>
        </div>
    </div>

    <!---------------------End Clients Have to Say ----------------->

    <!---------------------Start why-choose-rfs----------------->


    <section class="why-choose-rfs">
        <div class="container">
            <div class="row content">
                <div class="col-md-6 text">
                <h2 class="Why-h2">Why Choose <span class="logo-choose-color">RFS Logo Design</span> In California?</h2>
                    <p style="text-align: justify;">As a leading design agency in California, RFS Logo Design excels in providing comprehensive logo design services tailored to meet the specific needs of businesses across various industries. Their expertise lies in translating clients' visions into captivating visual identities that resonate with their target audience.</p>
                    <p style="text-align: justify;">With a focus on creativity, innovation, and attention to detail, RFS Logo Design goes above and beyond to deliver outstanding results that exceed client expectations. Their commitment to quality and customer satisfaction sets them apart as a trusted partner for businesses seeking top-notch logo design solutions.</p>
                    <p style="text-align: justify;">Whether you're a startup looking to establish your brand identity or an established company seeking a logo refresh, RFS Logo Design offers the expertise and creativity needed to bring your vision to life. Experience the difference of working with a premier logo design company in California—choose RFS Logo Design for all your logo design needs.</p>
                </div>
                <div class="col-md-6 image">
                    <img src="images/hire-section-logos .png" alt="RFS Logo Design">
                </div>
            </div>
        </div>
    </section>

    <!---------------------End why-choose-rfs----------------->



    <!---------------------Start Crafting----------------->

    <section class="crafting-logos">
        <div class="container">
            <div class="row content">
                <div class="col-md-6 image">
                    <img src="images/Crafting Impactful Logos.png" alt="Crafting Impactful Logos">
                </div>
                <div class="col-md-6 text">
                <h2 class="CRAFT-h2" style="font-weight: 800;">CRAFTING IMPACTFUL LOGOS ACROSS INDUSTRIES IN CALIFORNIA</h2>
                    <p style="text-align: justify;">We serve a diverse array of industries with custom logo design solutions tailored to their unique needs.
                        From small businesses, including cafes, boutiques, and local services, to professionals such as lawyers,
                        doctors, and consultants, RFS Logo Design caters to a wide range of clients. Additionally, we extend our
                        services to industries like technology, real estate, hospitality, fashion, and more. No matter the industry
                        or profession, we are dedicated to crafting visually striking logos that effectively communicate the essence
                        of each brand, leaving a lasting impression on customers and clients alike.</p>
                </div>
            </div>
        </div>
    </section>

    <!---------------------End Crafting----------------->

    <!-- jQuery and Owl Carousel JS -->
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
    <script>
        jQuery(document).ready(function($) {
            "use strict";
            // TESTIMONIALS CAROUSEL HOOK
            $('#customers-testimonials').owlCarousel({
                loop: true,
                center: true,
                items: 3,
                margin: 30,
                autoplay: true,
                dots: true,
                autoplayTimeout: 8500,
                smartSpeed: 450,
                responsive: {
                    0: {
                        items: 1
                    },
                    768: {
                        items: 2
                    },
                    1170: {
                        items: 3
                    }
                }
            });
        });
    </script>
    <!---------------------End Clients Have to Say ----------------->


 <!-- Bootstrap JS and dependencies -->
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script>
        $(document).ready(function() {
            // Show only the first 9 items on page load
            $('.filter').hide();
            $('.filter.all').slice(0, 9).show();

            $('.filter-button').click(function() {
                var value = $(this).attr('data-filter');
                $('.filter-button').removeClass('active');
                $(this).addClass('active');
                if (value == 'all') {
                    $('.filter').hide();
                    $('.filter.all').slice(0, 9).show();
                    $('.load-more-button').show();
                } else {
                    $('.filter').hide();
                    $('.filter.' + value).slice(0, 2).show();
                    $('.load-more-button').hide();
                }
            });

            $('.load-more-button').click(function() {
                $('.filter.all:hidden').slice(0, 9).slideDown();
                if ($('.filter.all:hidden').length == 0) {
                    $(this).fadeOut('slow');
                }
            });
        });
    </script>
</body>
</html>
@endsection
