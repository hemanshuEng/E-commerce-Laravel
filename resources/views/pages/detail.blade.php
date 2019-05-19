@extends('layouts.app')
@section('content')

<div class="container my-5">
    <div class="row">
        <div class="col-md-7">
            <img src="img/item-1.jpg" alt="item" class="img-fluid">
        </div>
        <div class="col-md-5 text-info">
            <div class="h1 text-uppercase"> Women's Boot Shoes maca</div>
            <h4 class="font-weigth-bold">£ 40</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil exercitationem porro earum velit, quasi
                autem ducimus. Vel quae a animi officia voluptatem ex perferendis at, omnis obcaecati, nostrum dolores
                dolore?</p>
            <a href="#" class="btn btn-info rounded"><i class="fas fa-cart-arrow-down"> ADD TO CART</i></a>
        </div>
    </div>
</div>


@include('component.brand')


@endsection
