<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
@include('inc.header')
<body>
    @include('inc.navbar')
    @yield('content')
    @include('inc.footer')
    <script src="{{ mix('/js/app.js') }}"></script>
    @yield('extra-js')
</body>

</html>
