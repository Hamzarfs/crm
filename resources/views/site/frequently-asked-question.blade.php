@extends('site.common')

@section('title', 'FAQs')

@section('content')

    <!-- Bootstrap CSS -->
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <!-- Font Awesome CSS -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet">
    <!-- Poppins Font -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
    <link href="{{ asset('css/styles.css') }}" rel="stylesheet"> <!-- Link to the external CSS file -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css">
    <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">



    <!-- ------------------Start FAQs --------------- -->
    <div class="container faq-section">
        <h2 class="text-center mb-4">Frequently Asked Questions</h2>
        <div id="accordion">
            <!-- <-Question 1 -->
            <div class="card">
                <div class="card-header" id="headingOne">
                    <h5 class="mb-0">
                        <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true"
                            aria-controls="collapseOne">
                            <span class="faq-question">How can I effectively utilize a logo maker to create a unique
                                logo design?</span>

                        </button>
                    </h5>
                </div>

                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                    <div class="card-body">
                        A logo maker is software that offers a selection of pre-made logo design templates from a
                        database. Here’s how you can create a logo using one:

                        Choose a Template: Browse and select a design template from the gallery that best suits your
                        business or style.

                        Customize Your Design: Customize the font, colors, and add your company name or tagline. Many
                        logo makers also offer advanced tools to apply effects like gradients, shadows, and more.

                        Download Your Logo: After customizing, pay a nominal fee to download high-resolution files
                        instantly. Some platforms offer free downloads with credit attribution.

                    </div>
                </div>
            </div>

            <!-- Question 2 -->
            <div class="card">
                <div class="card-header" id="headingTwo">
                    <h5 class="mb-0">
                        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo"
                            aria-expanded="false" aria-controls="collapseTwo">
                            <span class="faq-question">Can I use my logo for trademark and copyrights?</span>

                        </button>
                    </h5>
                </div>

                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                    <div class="card-body">
                        Ownership: Logos created using templates are owned by the RFS Logo Design. Exclusive rights can
                        be purchased separately.
                    </div>
                </div>
            </div>

            <!-- Question 3 -->
            <div class="card">
                <div class="card-header" id="headingThree">
                    <h5 class="mb-0">
                        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree"
                            aria-expanded="false" aria-controls="collapseThree">
                            <span class="faq-question">What are the distinctions between using a logo maker and opting
                                for custom logo design services?</span>
                        </button>
                    </h5>
                </div>

                <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                    <div class="card-body">
                        Logo Maker: Uses pre-made templates for customization. You can adjust fonts, colors, and effects
                        without needing design skills. The design is not exclusive to you.
                        Custom Design: Involves working with a dedicated designer who creates a unique logo based on
                        your specific requirements. This design is exclusive to your brand.

                    </div>
                </div>
            </div>

            <!-- Question 4 -->
            <div class="card">
                <div class="card-header" id="headingFour">
                    <h5 class="mb-0">
                        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour"
                            aria-expanded="false" aria-controls="collapseFour">
                            <span class="faq-question">Is it possible to personalize my logo design using your logo
                                maker tool?</span>
                        </button>
                    </h5>
                </div>

                <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                    <div class="card-body">
                        Absolutely! With our logo maker, you have the flexibility to customize fonts, colors, text, and
                        your company name. Additionally, you can enhance
                        your logo with advanced features like strokes, reflections, shadows, and more, all without
                        needing any design expertise. These tools empower you
                        to generate countless unique design variations from a single logo template.
                    </div>
                </div>
            </div>

            <!-- Question 5 -->
            <div class="card">
                <div class="card-header" id="headingFive">
                    <h5 class="mb-0">
                        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFive"
                            aria-expanded="false" aria-controls="collapseFive">
                            <span class="faq-question">Are the logo design files suitable for printing business
                                cards?</span>
                        </button>
                    </h5>
                </div>

                <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordion">
                    <div class="card-body">
                        File Availability: Once customized, download high-resolution files suitable for printing
                        business cards, stationery, banners, and digital platforms.
                    </div>
                </div>
            </div>

            <!-- Question 6 -->
            <div class="card">
                <div class="card-header" id="headingFour">
                    <h5 class="mb-0">
                        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSix"
                            aria-expanded="false" aria-controls="collapseSix">
                            <span class="faq-question">How much does it cost to get a logo design?</span>
                        </button>
                    </h5>
                </div>

                <div id="collapseSix" class="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                    <div class="card-body">
                        You can obtain a fully customizable logo design using our free logo maker by either paying a
                        nominal fee for high-resolution
                        files or attributing credits to us for standard design files.
                    </div>
                </div>
            </div>

            <!-- Question 7 -->
            <div class="card">
                <div class="card-header" id="headingFour">
                    <h5 class="mb-0">
                        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSeven"
                            aria-expanded="false" aria-controls="collapseSeven">
                            <span class="faq-question">Do you provide help in customizing my design?</span>
                        </button>
                    </h5>
                </div>

                <div id="collapseSeven" class="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                    <div class="card-body">
                        We have a dedicated customer support team ready to assist with any inquiries regarding our logo
                        design maker.
                        For custom logo design services by dedicated graphic designers, please contact us at
                        551-666-2555, email us at support@rfslogodesign.com, or fill out a hiring a logo designer form
                        here.

                    </div>
                </div>
            </div>


        </div>
    </div>
    <!-- -------------------End FAQs --------------- -->



    <!-- Bootstrap JS and dependencies -->
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

@endsection
