@include('inc.header')
<body>
    @include('inc.navbar')
    @yield('content')
    @include('inc.footer')
    <script src="{{ mix('/js/app.js') }}"></script>
</body>

</html>
