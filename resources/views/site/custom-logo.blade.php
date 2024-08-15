@extends('site.common')

@section('title', 'Custom Logo')

@section('content')

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/5.3.0/css/bootstrap.min.css">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/css/intlTelInput.min.css">
    <style>
        .custom-logo-page-section {
            background-color: #6868d1;
            border-radius: 25px;
            padding: 20px;
            color: white;
        }

        .custom-logo-page-content {
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .custom-logo-page-heading {
            font-weight: 800;
        }

        .custom-logo-page-button {
            width: 194px;
            height: 50px;
            border-radius: 5px;
            color: #fff;
            background-color: #e78341;
            font-size: 15px;
            font-weight: 700;
            line-height: 24px;
            text-align: center;
            border-color: #e78341;
        }

        .custom-logo-page-button:hover {
            background-color: #e78341;
            border-color: #e78341;
        }

        .custom-logo-page-form input,
        .custom-logo-page-form textarea {
            border-radius: 5px;
            margin-bottom: 5px;
            padding: 5px;
        }

        .custom-logo-page-form {
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 80%;
            color: black;
        }

        .custom-logo-page-form label {
            font-weight: 600;
        }

        .iti {
            width: 100%;
        }

        /* Ensures the phone input takes full width */


        .premium-logos-section {
            padding: 40px 0;
            background-color: #f9f9f9;
            margin-top: 20px;
            border-radius: 20px;
        }

        .premium-logos-section {
            padding: 40px 0;
            background-color: #f9f9f9;
            /* Optional: Background color for better contrast */
        }

        .premium-logos-heading,
        .custom-logo-heading {
            font-weight: 700;
            font-size: 24px;
            color: #512f90;
            /* Use your preferred color */
            margin-top: 30px;
            margin-bottom: 15px;
            text-align: center;
        }

        .premium-logos-description,
        .custom-logo-description {
            font-size: 16px;
            color: #333;
            /* Use your preferred text color */
            text-align: center;
        }

        .custom-logo-process {
            background-color: #f0f4f8;
            border-radius: 10px;
            box-shadow: #512f90;
            padding: 40px 20px;
            margin-top: 20px;
            /* Added margin-top */
        }

        .custom-logo-process h2 {
            color: #333;
            font-weight: 800;
            margin-bottom: 20px;
        }

        .custom-logo-process p {
            color: #666;
            margin-bottom: 30px;
            font-size: 16px;
        }

        .custom-card {
            background-color: #ffffff;
            border: 1px solid #ddd;
            border-radius: 10px;
            transition: all 0.3s ease;
        }

        .custom-card:hover {
            box-shadow: 0 4px 12px rgba(0, 123, 255, 0.2);
        }

        .custom-card h3 {
            font-size: 40px;
            color: #512f90;
            font-weight: 700;
        }

        .custom-card h4 {
            color: #333;
            font-weight: 700;
            margin: 10px 0;
        }

        .custom-card p {
            color: #555;
        }

        .custom-heading {
            color: #333;
            font-weight: 800;
        }

        .contact-option i {
            color: #646bd9;
        }

        .contact-option p {
            margin: 0;
        }

        .contact-option a {
            color: #646bd9;
            text-decoration: none;
        }

        .contact-option a:hover {
            text-decoration: underline;
        }

        .btn-primary {
            background-color: #646bd9;
            border-color: #646bd9;
        }

        .btn-primary:hover {
            background-color: #5058c9;
            border-color: #5058c9;
        }
    </style>

    <div class="container mt-5">
        <div class="row custom-logo-page-section">
            <div class="col-md-6 d-flex align-items-center">
                <div class="custom-logo-page-content">
                    <h2 class="custom-logo-page-heading">Customizable Logo Designs in Minutes</h2>
                    <p>Only sterling quality designs straight from our professional logo designers’ studio.</p>
                    <button class="custom-logo-page-button">Get Started</button>
                </div>
            </div>
            <div class="col-md-6 d-flex justify-content-center align-items-center">
                <div class="custom-logo-page-form bg-white border p-3 rounded">
                    <h3 class="custom-logo-page-form-heading">Free Consultation</h3>
                    <form id="custom-form" method="POST" action="{{ route('customLogoSubmit') }}">
                        @csrf
                        <div class="form-group mb-2">
                            <label for="name" class="custom-logo-page-label">Name:</label>
                            <input type="text" class="form-control custom-logo-page-input" name="name" id="name"
                                placeholder="Enter your name" required>
                        </div>
                        <div class="form-group mb-2">
                            <label for="email" class="custom-logo-page-label">Email:</label>
                            <input type="email" class="form-control custom-logo-page-input" name="email" id="email"
                                placeholder="Enter your email" required>
                        </div>
                        <div class="form-group mb-2">
                            <label for="country" class="custom-logo-page-label">Select Country:</label>
                            <select class="form-control custom-logo-page-input" name="country" id="country" required>
                                <option value="" disabled selected>Select your country</option>
                                <!-- Include all countries here -->
                                <option value="ad">Andorra</option>
                                <option value="ae">United Arab Emirates</option>
                                <option value="af">Afghanistan</option>
                                <option value="ag">Antigua and Barbuda</option>
                                <option value="ai">Anguilla</option>
                                <option value="al">Albania</option>
                                <option value="am">Armenia</option>
                                <option value="ao">Angola</option>
                                <option value="ar">Argentina</option>
                                <option value="as">American Samoa</option>
                                <option value="at">Austria</option>
                                <option value="au">Australia</option>
                                <option value="aw">Aruba</option>
                                <option value="ax">Åland Islands</option>
                                <option value="az">Azerbaijan</option>
                                <option value="ba">Bosnia and Herzegovina</option>
                                <option value="bb">Barbados</option>
                                <option value="bd">Bangladesh</option>
                                <option value="be">Belgium</option>
                                <option value="bf">Burkina Faso</option>
                                <option value="bg">Bulgaria</option>
                                <option value="bh">Bahrain</option>
                                <option value="bi">Burundi</option>
                                <option value="bj">Benin</option>
                                <option value="bl">Saint Barthélemy</option>
                                <option value="bm">Bermuda</option>
                                <option value="bn">Brunei Darussalam</option>
                                <option value="bo">Bolivia</option>
                                <option value="bq">Bonaire, Sint Eustatius and Saba</option>
                                <option value="br">Brazil</option>
                                <option value="bs">Bahamas</option>
                                <option value="bt">Bhutan</option>
                                <option value="bv">Bouvet Island</option>
                                <option value="bw">Botswana</option>
                                <option value="by">Belarus</option>
                                <option value="bz">Belize</option>
                                <option value="ca">Canada</option>
                                <option value="cc">Cocos (Keeling) Islands</option>
                                <option value="cd">Congo, Democratic Republic of the</option>
                                <option value="cf">Central African Republic</option>
                                <option value="cg">Congo</option>
                                <option value="ch">Switzerland</option>
                                <option value="ci">Côte d'Ivoire</option>
                                <option value="ck">Cook Islands</option>
                                <option value="cl">Chile</option>
                                <option value="cm">Cameroon</option>
                                <option value="cn">China</option>
                                <option value="co">Colombia</option>
                                <option value="cr">Costa Rica</option>
                                <option value="cu">Cuba</option>
                                <option value="cv">Cabo Verde</option>
                                <option value="cw">Curaçao</option>
                                <option value="cx">Christmas Island</option>
                                <option value="cy">Cyprus</option>
                                <option value="cz">Czech Republic</option>
                                <option value="de">Germany</option>
                                <option value="dj">Djibouti</option>
                                <option value="dk">Denmark</option>
                                <option value="dm">Dominica</option>
                                <option value="do">Dominican Republic</option>
                                <option value="dz">Algeria</option>
                                <option value="ec">Ecuador</option>
                                <option value="ee">Estonia</option>
                                <option value="eg">Egypt</option>
                                <option value="eh">Western Sahara</option>
                                <option value="er">Eritrea</option>
                                <option value="es">Spain</option>
                                <option value="et">Ethiopia</option>
                                <option value="fi">Finland</option>
                                <option value="fj">Fiji</option>
                                <option value="fm">Federated States of Micronesia</option>
                                <option value="fo">Faroe Islands</option>
                                <option value="fr">France</option>
                                <option value="ga">Gabon</option>
                                <option value="gb">United Kingdom</option>
                                <option value="gd">Grenada</option>
                                <option value="ge">Georgia</option>
                                <option value="gf">French Guiana</option>
                                <option value="gg">Guernsey</option>
                                <option value="gh">Ghana</option>
                                <option value="gi">Gibraltar</option>
                                <option value="gl">Greenland</option>
                                <option value="gm">Gambia</option>
                                <option value="gn">Guinea</option>
                                <option value="gp">Guadeloupe</option>
                                <option value="gq">Equatorial Guinea</option>
                                <option value="gr">Greece</option>
                                <option value="gt">Guatemala</option>
                                <option value="gu">Guam</option>
                                <option value="gw">Guinea-Bissau</option>
                                <option value="gy">Guyana</option>
                                <option value="hk">Hong Kong</option>
                                <option value="hm">Heard Island and McDonald Islands</option>
                                <option value="hn">Honduras</option>
                                <option value="hr">Croatia</option>
                                <option value="ht">Haiti</option>
                                <option value="hu">Hungary</option>
                                <option value="id">Indonesia</option>
                                <option value="ie">Ireland</option>
                                <option value="il">Israel</option>
                                <option value="im">Isle of Man</option>
                                <option value="in">India</option>
                                <option value="io">British Indian Ocean Territory</option>
                                <option value="iq">Iraq</option>
                                <option value="ir">Iran</option>
                                <option value="is">Iceland</option>
                                <option value="it">Italy</option>
                                <option value="je">Jersey</option>
                                <option value="jm">Jamaica</option>
                                <option value="jo">Jordan</option>
                                <option value="jp">Japan</option>
                                <option value="ke">Kenya</option>
                                <option value="kg">Kyrgyzstan</option>
                                <option value="kh">Cambodia</option>
                                <option value="ki">Kiribati</option>
                                <option value="km">Comoros</option>
                                <option value="kn">Saint Kitts and Nevis</option>
                                <option value="kp">North Korea</option>
                                <option value="kr">South Korea</option>
                                <option value="kw">Kuwait</option>
                                <option value="ky">Cayman Islands</option>
                                <option value="kz">Kazakhstan</option>
                                <option value="la">Laos</option>
                                <option value="lb">Lebanon</option>
                                <option value="lc">Saint Lucia</option>
                                <option value="li">Liechtenstein</option>
                                <option value="lk">Sri Lanka</option>
                                <option value="lr">Liberia</option>
                                <option value="ls">Lesotho</option>
                                <option value="lt">Lithuania</option>
                                <option value="lu">Luxembourg</option>
                                <option value="lv">Latvia</option>
                                <option value="ly">Libya</option>
                                <option value="ma">Morocco</option>
                                <option value="mc">Monaco</option>
                                <option value="md">Moldova</option>
                                <option value="me">Montenegro</option>
                                <option value="mf">Saint Martin</option>
                                <option value="mg">Madagascar</option>
                                <option value="mh">Marshall Islands</option>
                                <option value="mk">North Macedonia</option>
                                <option value="ml">Mali</option>
                                <option value="mm">Myanmar</option>
                                <option value="mn">Mongolia</option>
                                <option value="mo">Macao</option>
                                <option value="mp">Northern Mariana Islands</option>
                                <option value="mq">Martinique</option>
                                <option value="mr">Mauritania</option>
                                <option value="ms">Montserrat</option>
                                <option value="mt">Malta</option>
                                <option value="mu">Mauritius</option>
                                <option value="mv">Maldives</option>
                                <option value="mw">Malawi</option>
                                <option value="mx">Mexico</option>
                                <option value="my">Malaysia</option>
                                <option value="mz">Mozambique</option>
                                <option value="na">Namibia</option>
                                <option value="nc">New Caledonia</option>
                                <option value="ne">Niger</option>
                                <option value="nf">Norfolk Island</option>
                                <option value="ng">Nigeria</option>
                                <option value="ni">Nicaragua</option>
                                <option value="nl">Netherlands</option>
                                <option value="no">Norway</option>
                                <option value="np">Nepal</option>
                                <option value="nr">Nauru</option>
                                <option value="nu">Niue</option>
                                <option value="nz">New Zealand</option>
                                <option value="om">Oman</option>
                                <option value="pa">Panama</option>
                                <option value="pe">Peru</option>
                                <option value="pf">French Polynesia</option>
                                <option value="pg">Papua New Guinea</option>
                                <option value="ph">Philippines</option>
                                <option value="pk">Pakistan</option>
                                <option value="pl">Poland</option>
                                <option value="pm">Saint Pierre and Miquelon</option>
                                <option value="pn">Pitcairn</option>
                                <option value="pr">Puerto Rico</option>
                                <option value="pt">Portugal</option>
                                <option value="pw">Palau</option>
                                <option value="py">Paraguay</option>
                                <option value="qa">Qatar</option>
                                <option value="re">Réunion</option>
                                <option value="ro">Romania</option>
                                <option value="rs">Serbia</option>
                                <option value="ru">Russia</option>
                                <option value="rw">Rwanda</option>
                                <option value="sa">Saudi Arabia</option>
                                <option value="sb">Solomon Islands</option>
                                <option value="sc">Seychelles</option>
                                <option value="sd">Sudan</option>
                                <option value="se">Sweden</option>
                                <option value="sg">Singapore</option>
                                <option value="sh">Saint Helena</option>
                                <option value="si">Slovenia</option>
                                <option value="sj">Svalbard and Jan Mayen</option>
                                <option value="sk">Slovakia</option>
                                <option value="sl">Sierra Leone</option>
                                <option value="sm">San Marino</option>
                                <option value="sn">Senegal</option>
                                <option value="so">Somalia</option>
                                <option value="sr">Suriname</option>
                                <option value="ss">South Sudan</option>
                                <option value="st">São Tomé and Príncipe</option>
                                <option value="sv">El Salvador</option>
                                <option value="sx">Sint Maarten</option>
                                <option value="sy">Syrian Arab Republic</option>
                                <option value="sz">Swaziland</option>
                                <option value="tc">Turks and Caicos Islands</option>
                                <option value="td">Chad</option>
                                <option value="tf">French Southern Territories</option>
                                <option value="tg">Togo</option>
                                <option value="th">Thailand</option>
                                <option value="tj">Tajikistan</option>
                                <option value="tk">Tokelau</option>
                                <option value="tl">Timor-Leste</option>
                                <option value="tm">Turkmenistan</option>
                                <option value="tn">Tunisia</option>
                                <option value="to">Tonga</option>
                                <option value="tr">Turkey</option>
                                <option value="tt">Trinidad and Tobago</option>
                                <option value="tv">Tuvalu</option>
                                <option value="tz">Tanzania</option>
                                <option value="ua">Ukraine</option>
                                <option value="ug">Uganda</option>
                                <option value="um">United States Minor Outlying Islands</option>
                                <option value="un">United Nations</option>
                                <option value="us">United States</option>
                                <option value="uy">Uruguay</option>
                                <option value="uz">Uzbekistan</option>
                                <option value="va">Vatican City</option>
                                <option value="vc">Saint Vincent and the Grenadines</option>
                                <option value="ve">Venezuela</option>
                                <option value="vg">British Virgin Islands</option>
                                <option value="vi">U.S. Virgin Islands</option>
                                <option value="vn">Viet Nam</option>
                                <option value="vu">Vanuatu</option>
                                <option value="wf">Wallis and Futuna</option>
                                <option value="ws">Samoa</option>
                                <option value="ye">Yemen</option>
                                <option value="yt">Mayotte</option>
                                <option value="za">South Africa</option>
                                <option value="zm">Zambia</option>
                                <option value="zw">Zimbabwe</option>
                            </select>
                        </div>
                        <div class="form-group mb-2">
                            <label for="phone" class="custom-logo-page-label">Phone Number:</label>
                            <input type="tel" class="form-control custom-logo-page-input iti" name="phone" id="phone"
                                placeholder="Enter your phone number" required>
                        </div>
                        <div class="form-group mb-2">
                            <label for="message" class="custom-logo-page-label">Comments:</label>
                            <textarea class="form-control custom-logo-page-textarea" name="message" id="message" rows="2" placeholder="Your comments"
                                required></textarea>
                        </div>
                        <button type="submit" class="btn btn-secondary custom-logo-page-submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>


        <section class="premium-logos-section">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h2 class="premium-logos-heading">Same Premium Logos but Faster</h2>
                        <p class="premium-logos-description">
                            We have been designing premium logos since 2001. Thousands of clients trust us with their
                            brand identities because we deliver what we promise. Now we bring the same quality premium
                            logos by human graphic designers, to you in our advance logo studio that lets you get
                            customizable logo designs in minutes.
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <h3 class="custom-logo-heading">Simple and Fast Customizable Logo Design Process</h3>
                        <p class="custom-logo-description">
                            We understand the rush to launch your business startup, and that’s why customizable logos
                            make sense. Getting a professional logo design from our advance studio isn’t hard, just
                            follow these steps.
                        </p>
                    </div>
                </div>
            </div>
        </section>


        <div class="container py-5 text-center custom-logo-process">
            <h2>Simple and Fast Customizable Logo Design Process</h2>
            <p>We understand the rush to launch your business startup, and that’s why customizable logos make sense.
                Getting a professional logo design from our advance studio isn’t hard, just follow these steps.</p>

            <div class="row g-4">
                <div class="col-md-4">
                    <div class="card p-4 h-100 custom-card">
                        <h3>01</h3>
                        <h4>Select a logo design</h4>
                        <p>Browse through our library of beautiful and editable logo designs that are professionally
                            designed by expert graphic designers. Each of our customizable logo is based on creative
                            concepts and out-of-the-box design for businesses</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card p-4 h-100 custom-card">
                        <h3>02</h3>
                        <h4>Edit company name</h4>
                        <p>Once you select a customizable logo from the gallery, It’s time to edit! All you have to do
                            is click on the text to replace it with your company name, and see your brand transform into
                            a beautiful identity.</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card p-4 h-100 custom-card">
                        <h3>03</h3>
                        <h4>Download for branding</h4>
                        <p>Once you are satisfied with the result of your custom logo, and have finalized it, It’s time
                            to download and purchase it for use. Your logo, it is now ready for branding- website,
                            t-shirt, business card, social media, etc.</p>
                    </div>
                </div>
            </div>

            <!-- New section added here -->
            <div class="mt-5">
                <h3 class="custom-heading">Affordable Logos, Same Great Designs</h3>
                <p>We open up custom logo designing opportunities that are easy on the pocket. Especially for startups
                    and small businesses searching for premium logos who can’t afford the hefty price of hiring a logo
                    designer. You get the same professional custom logo design style, at a fraction of the cost. And the
                    best part is, these customizable logos have been designed by expert logo designers from around the
                    world!</p>
                <a href="#" class="custom-button-online">Get Started</a>
            </div>
        </div>



        <section class="container py-5">
            <div class="text-center mb-4">
                <h2>Need Help Picking a Professional Logo Design? Ask Our Expert</h2>
            </div>
            <div class="row justify-content-center">
                <div class="col-md-4 mb-3 text-center">
                    <div class="contact-option">
                        <i class="fas fa-phone fa-2x mb-2"></i>
                        <p>Phone number: <a href="tel:+123456789">(123) 456 2584</a></p>
                    </div>
                </div>
                <div class="col-md-4 mb-3 text-center">
                    <div class="contact-option">
                        <i class="fas fa-envelope fa-2x mb-2"></i>
                        <p>Email us: <a href="mailto:support@example.com">support@example.com</a></p>
                    </div>
                </div>
                <div class="col-md-4 mb-3 text-center">
                    <div class="contact-option">
                        <i class="fas fa-comment-dots fa-2x mb-2"></i>
                        <p>Live Chat: <a href="#">Live Chat:</a></p>
                    </div>
                </div>
            </div>
        </section>




        <!-- ------------------Start FAQs --------------- -->
        <div class="container faq-section">
            <h2 class="text-center mb-4">Frequently Asked Questions</h2>
            <div id="accordion">
                <!-- <-Question 1 -->
                <div class="card">
                    <div class="card-header" id="headingOne">
                        <h5 class="mb-0">
                            <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne"
                                aria-expanded="true" aria-controls="collapseOne">
                                <span class="faq-question">How can I effectively utilize a logo maker to create a
                                    unique
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

                            Customize Your Design: Customize the font, colors, and add your company name or tagline.
                            Many
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
                            Ownership: Logos created using templates are owned by the RFS Logo Design. Exclusive rights
                            can
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
                                <span class="faq-question">What are the distinctions between using a logo maker and
                                    opting
                                    for custom logo design services?</span>
                            </button>
                        </h5>
                    </div>

                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                        <div class="card-body">
                            Logo Maker: Uses pre-made templates for customization. You can adjust fonts, colors, and
                            effects
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
                            Absolutely! With our logo maker, you have the flexibility to customize fonts, colors, text,
                            and
                            your company name. Additionally, you can enhance
                            your logo with advanced features like strokes, reflections, shadows, and more, all without
                            needing any design expertise. These tools empower you
                            to generate countless unique design variations from a single logo template.
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
                            We have a dedicated customer support team ready to assist with any inquiries regarding our
                            logo
                            design maker.
                            For custom logo design services by dedicated graphic designers, please contact us at
                            551-666-2555, email us at support@rfslogodesign.com, or fill out a hiring a logo designer
                            form
                            here.
                        </div>
                    </div>
                </div>


            </div>
        </div>



    </div>

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/intlTelInput.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

    <script>
        // Initialize phone input
        const input = document.querySelector("#phone");
        intlTelInput(input, {
            utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js"
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
    </script>
@endsection
