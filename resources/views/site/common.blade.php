<!-- resources/views/site/common.blade.php -->
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title')</title>

    @isset($categoryObj->meta_title)
        <meta name="title" content="{{ $categoryObj->meta_title }}">
    @endisset

    @isset($categoryObj->meta_desc)
        <meta name="description" content="{{ $categoryObj->meta_desc }}">
    @endisset

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.5.0/font/bootstrap-icons.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Poppins:wght@200;400;700&display=swap"
        rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.css" rel="stylesheet">

    <link rel="stylesheet" href="{{ asset('site/css/style.css') }}">
    <!-- Add your CSS links here -->

    {{-- @stack('headerStyles') --}}
</head>

<body>
    @include('site.layouts.header')

    @yield('content')

    @include('site.layouts.footer')
    <!-- Add your JS scripts here -->

    {{-- <script src="https://stackpath.bootstrapcdn.com/bootstrap/5.1.3/js/bootstrap.bundle.min.js"></script> --}}
    <script>
        function expandCard(card) {
            const cards = document.querySelectorAll('.plan-section .card');
            cards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
        }
    </script>

    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>

    {{-- @stack('footerScripts') --}}

</body>

</html>
