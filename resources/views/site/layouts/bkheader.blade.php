<div class="container-fluid" style="background-color: #DBE1FF;">
<nav class="navbar navbar-expand-lg navbar-light">
            <div class="container">
                <a class="navbar-brand" href="{{ url('/') }}"><img src="{{ url('/images/Logo.png') }}" alt="Logo" class="logo"></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Logo Maker <i class="bi bi-chevron-down"></i></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Custom Logo</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Hire a Designer</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><i class="bi bi-heart"></i></a>
                        </li>
                        <!-- <li class="nav-item">
                            <a class="nav-link" href="#">My Account</a>
                        </li> -->

                        <li class="nav-item">
    @guest
        <a class="nav-link" href="{{ route('login') }}">Login</a>
    @else
        <a class="nav-link" href="{{ route('login') }}">Dashboard</a>
    @endguest

    
</li>
<!-- <li class="nav-item">
    <a class="nav-link" href="#">My Account</a>
</li> -->

                    </ul>
                </div>
            </div>
        </nav>
</div> 