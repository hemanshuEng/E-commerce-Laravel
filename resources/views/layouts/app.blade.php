@include('inc.header')
<body>
    @include('inc.navbar')
    @yield('content')
    <script src="{{ mix('/js/app.js') }}"></script>
</body>

</html>
