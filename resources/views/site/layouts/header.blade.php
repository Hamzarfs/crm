<div class="container-fluid" style="background-color: #DBE1FF;">
    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container">
            <a class="navbar-brand" href="{{ url('/') }}">
                <img src="{{ url('/images/Logo.png') }}" alt="Logo" class="logo">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="{{ url('/') }}">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="{{ url('about-us') }}">About Us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="{{ url('custom-logo') }}">Custom Logo</a>
                    </li>
                    <li class="nav-item">
                        @guest
                            <a class="nav-link login-link" href="javascript:void(0)">Login</a>
                        @else
                            <a class="nav-link" href="{{ route('admin.dashboard') }}">Dashboard</a>
                        @endguest
                    </li>
                    <!-- Search Icon
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            <i class="bi bi-search"></i>
                        </a>
                    </li> -->
                </ul>
            </div>
        </div>
    </nav>
</div>