@extends('layouts.app')
@section('content')

<div class="container my-5">
    <div class="row">
        <div class="col-md-7">
            <img src="{{asset('img/'.$product->slug.'.jpg')}}" alt="item" class="img-fluid">
        </div>
        <div class="col-md-5 text-info">
            <div class="h2 text-uppercase">{{$product->name}}</div>
            <div class="h4">{{$product->details}}</div>
            <h4 class="font-weigth-bold">£ {{$product->price}}</h4>
            <p>{{$product->description}}</p>
            <a href="#" class="btn btn-info rounded"><i class="fas fa-cart-arrow-down"> ADD TO CART</i></a>
        </div>
    </div>
</div>


@include('component.brand')


@endsection
