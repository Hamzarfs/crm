<!------------ Start Footer Section ------------>

<footer class="footer bg-custom text-white">
    <div class="container">
        <!-- First Row -->
        <div class="row py-5">
            <div class="col-md-4">
                <a href="{{ url('/') }}">
                    <img src="images/Footer logo.png" alt="Logo" class="footer-logo mb-4"></a>
                <p class="footer-description">
                    We are a SaaS company that offers graphic design maker tools for startups, small business owners,
                    website designers, and online entrepreneurs. We make branding accessible and affordable. Try our
                    tools today!
                </p>
                <div class="social-icons">
                    <a href="#"><i class="bi bi-whatsapp"></i></a>
                    <a href="#"><i class="bi bi-instagram"></i></a>
                    <a href="#"><i class="bi bi-facebook"></i></a>
                    <a href="#"><i class="bi bi-twitter"></i></a>
                    <a href="#"><i class="bi bi-linkedin"></i></a>
                </div>
            </div>
            <div class="col-md-3">
                <h5>About Company</h5>
                <ul class="list-unstyled">
                    <li><a href="{{ url('/about-us') }}">About Us</a></li>
                    <li><a href="{{ url('/how-it-works') }}">How it Works</a></li>
                    <li><a href="{{ url('/frequently-asked-question') }}">FAQ</a></li>
                    <li><a href="{{ url('contact-us') }}">Contact Us</a></li>
                </ul>
            </div>


            <div class="col-md-2">
                <h5>Logo Ideas</h5>
                <ul class="list-unstyled">
                    @foreach ($categories as $category)
                        <li><a href="{{ url('/logos/' . $category->slug) }}" class="logo-ideas-link">{{ $category->name }}</a></li>
                    @endforeach
                </ul>
            </div>


            <div class="col-md-3">
                <h5>Our Top Locations</h5>
                <ul class="list-unstyled">
                    <li><a href="{{ url('/logo-design-california') }}">California Logo Design</a></li>
                    <li><a href="{{ url('/logo-design-florida') }}">Florida Logo Design</a></li>
                    <li><a href="{{ url('/logo-design-texas') }}">Texas Logo Design</a></li>
                    <li><a href="{{ url('/logo-design-pennsylvania') }}">Pennsylvania Logo Design</a></li>
                    <li><a href="{{ url('/logo-design-illinois') }}">Illinois Logo Design</a></li>
                    <li><a href="{{ url('/logo-design-ohio') }}">Ohio Logo Design</a></li>
                    <li><a href="{{ url('/logo-design-new-jersey') }}">New Jersey Logo Design</a></li>
                    <li><a href="{{ url('/logo-design-arizona') }}">Arizona Logo Design</a></li>
                    <li><a href="{{ url('/logo-design-new-york') }}">New York Logo Design</a></li>
                    <li><a href="{{ url('/logo-design-virginia') }}">Virginia Logo Design</a></li>
                </ul>
            </div>

        </div>
        <!-- Second Row -->
        <div class="row border-top py-3">
            <div class="col-md-6">
                <p>&copy; 2024 RFSLogoDesign</p>
            </div>

            <div class="col-md-6 text-md-end">
                <a href="{{ url('terms-condition') }}" class="footer-link">Terms & Conditions</a> |
                <a href="{{ url('privacy-policy') }}" class="footer-link">Privacy Policy</a>
            </div>
        </div>
    </div>
</footer>

@guest
    {{-- Login Modal --}}
    <div class="modal fade" id="login-modal" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5">Login</h1>
                    <div class="align-items-center d-flex">
                        <h1 class="fs-5 me-4 modal-title">
                            <a href="javascript:void(0)" id="register-btn"
                                class="text-decoration-underline text-black">Register</a>
                        </h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                </div>
                <div class="modal-body">
                    <form action="{{ route('login') }}" method="post">
                        @csrf
                        <div class="mb-3">
                            <label for="email" class="form-label">Email address</label>
                            <input type="email" class="form-control" name="email"
                                id="email" placeholder="name@example.com" value="{{ old('email') }}">
                        </div>

                        <div class="mb-3">
                            <label for="password" class="form-label">Password</label>
                            <input type="password" class="form-control" name="password" id="password"
                                placeholder="***********">
                        </div>

                        <div class="form-check mb-3">
                            <input class="form-check-input" type="checkbox" name="remember" id="remember">
                            <label class="form-check-label" for="remember">
                                Remember me
                            </label>
                        </div>

                        <div class="text-center d-grid">
                            <button type="submit" class="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    {{-- Register Modal --}}
    <div class="modal fade" id="register-modal" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5">Register</h1>
                    <div class="align-items-center d-flex">
                        <h1 class="fs-5 me-4 modal-title">
                            <a href="javascript:void(0)" id="login-btn"
                                class="text-decoration-underline text-black">Login</a>
                        </h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                </div>
                <div class="modal-body">
                    <form action="{{ route('register') }}" method="post">
                        @csrf
                        <div class="mb-3">
                            <label for="name" class="form-label">Name</label>
                            <input type="text" class="form-control" name="name"
                                id="name" placeholder="name@example.com">
                        </div>

                        <div class="mb-3">
                            <label for="email1" class="form-label">Email address</label>
                            <input type="email" class="form-control"
                                name="email" id="email1" placeholder="name@example.com">
                        </div>

                        <div class="mb-3">
                            <label for="password2" class="form-label">Password</label>
                            <input type="password" class="form-control" name="password" id="password2"
                                placeholder="***********">
                        </div>

                        <div class="mb-3">
                            <label for="password_confirmation" class="form-label">Re enter password</label>
                            <input type="password" class="form-control" name="password_confirmation"
                                id="password_confirmation" placeholder="***********">
                        </div>

                        <div class="text-center d-grid">
                            <button type="submit" class="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

    <script>
        $('#login-modal #register-btn').click(function() {
            $('#login-modal').modal('hide')
            $('#register-modal').modal('show')
        })
        $('#register-modal #login-btn').click(function() {
            $('#register-modal').modal('hide')
            $('#login-modal').modal('show')
        })

        @if ($errors->any())
            @php
                $text = '';
                foreach($errors->getBag('default')->messages() as $field => $msgs):
                    $text .= "<b>" .ucwords($field). ": </b><br/>";
                    foreach($msgs as $i => $msg):
                        $text .= "$msg<br/>";
                    endforeach;
                    $text .= "<br/>";
                endforeach;
            @endphp

            swal.fire({
                icon: 'error',
                title: 'Error',
                html: "{!! $text !!}",
                customClass: {
                    htmlContainer: 'text-start',
                },
            })
        @endif


        @guest
            $('.footer .logo-ideas-link').click(function() {
                event.preventDefault()
                $('#login-modal').modal('show')
            })
        @endguest
    </script>
@endguest

<!------------ End Footer Section ------------>
