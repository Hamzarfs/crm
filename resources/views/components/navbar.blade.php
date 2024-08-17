<nav class="main-header navbar navbar-expand navbar-{{ Auth::user()->mode }} navbar-light position-sticky" style="top: 0;">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
        <li class="nav-item">
            <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="{{ route('admin.dashboard') }}">Home</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="{{ route('homepage') }}" target="_blank">RFS</a>
        </li>
    </ul>
    <ul class="navbar-nav ml-auto">
        <li class="nav-item">
            <form method="POST" action="{{ route('logout') }}">
                @csrf
                <input type="submit" name="submit" value="Log out" class="btn btn-primary btn-sm">
            </form>
        </li>
    </ul>
</nav>
