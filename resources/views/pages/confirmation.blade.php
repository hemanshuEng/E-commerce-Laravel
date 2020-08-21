@extends('layouts.app')
@section('content')
    <div class="container  text-center py-5 ">
            <h1>Thank you for purchasing</h1>
            <h2> Your Order is complete</h2>
            <a href= "{{ route('home') }}"  class="btn btn-dark rounded-pill py-2  mb-2">Home</a>
            <a href= "{{ route('shop.index') }}"  class="btn btn-dark rounded-pill py-2  mb-2">Continue Shopping</a>
    </div>
    @include('component.brand')
@endsection
