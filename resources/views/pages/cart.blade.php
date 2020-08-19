@extends('layouts.app')
@section('content')

<div class="container my-5">
    <div class="container">
        @if (session()->has('success'))
        <div class="alert alert-success alert-dismissible fade show" role="alert">
            {{session()->get('success')}}
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        @endif
        @if (count($errors)>0)
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
            <ul>
                @foreach ($error->all() as $error)
                <li>{{$error}}</li>
                @endforeach
            </ul>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        @endif
    </div>
    <div class="px-4 px-lg-0">
        <div class="pb-5">
            <div class="container">
                <div class="row  p-5 bg-white rounded shadow-sm mb-5">
                    @if (Cart::count()>0)
                    <h2 class="mb-3 px-3"> {{Cart::count()}} items in Shopping Cart</h2>
                    <div class="col-lg-12">


                        <!-- Shopping cart table -->
                        <div class="table-responsive">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col" class="border-0 bg-light">
                                            <div class="p-2 px-3 text-uppercase">Product</div>
                                        </th>
                                        <th scope="col" class="border-0 bg-light text-center">
                                            <div class="py-2 text-uppercase">Price</div>
                                        </th>
                                        <th scope="col" class="border-0 bg-light text-center">
                                            <div class="py-2 text-uppercase">Quantity</div>
                                        </th>
                                        <th scope="col" class="border-0 bg-light text-center">
                                            <div class="py-2 text-uppercase">Remove</div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach (Cart::content() as $item)


                                    <tr>
                                        <th scope="row" class="border-0">
                                            <div class="p-2">
                                                <img src="{{asset('img/'.$item->model->slug.'.jpg')}}" alt="item"
                                                    width="70" class="img-fluid rounded shadow-sm">
                                                <div class="ml-3 d-inline-block align-middle">
                                                    <h5 class="mb-0"> <a
                                                            href="{{route('shop.show',$item->model->slug)}}"
                                                            class="text-dark d-inline-block align-middle">{{$item->model->name}}</a>
                                                    </h5>
                                                    <span class="text-muted font-weight-normal font-italic d-block">
                                                        {{$item->model->details}}
                                                    </span>
                                                    <span class="d-block ">
                                                        <form action="{{route('cart.addToWishList',$item->rowId)}}" method="POST">
                                                            {{csrf_field()}}
                                                            <button type="submit" class="text-dark border-0 "><i
                                                        class="fa fa-heart"> Add to Wishlist</i></button>
                                                        </form>
                                                    </span>
                                                </div>
                                            </div>
                                        </th>
                                        <td class="border-0 align-middle text-center"><strong>£ {{$item->model->price}}</strong>
                                        </td>
                                        <td class="border-0 align-middle text-center"><strong>{{$item->qty}}</strong></td>
                                        <td class="border-0 align-middle text-center">
                                            <form action="{{route('cart.destroy',$item->rowId)}}" method="POST">
                                                {{csrf_field()}}
                                                {{method_field('DELETE')}}
                                                <button type="submit" class="text-dark border-0 "><i
                                                        class="fa fa-trash"></i></button>
                                            </form>
                                        </td>
                                    </tr>
                                    @endforeach
                                </tbody>
                            </table>
                        </div>
                        <!-- End -->
                    </div>
                    <div class="col-lg-6">
                        <div class="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Coupon code</div>
                        <div class="p-4">
                            <p class="font-italic mb-4">If you have a coupon code, please enter it in the box below</p>
                            <div class="input-group mb-4 border rounded-pill p-2">
                                <input type="text" placeholder="Apply coupon" aria-describedby="button-addon3"
                                    class="form-control border-0">
                                <div class="input-group-append border-0">
                                    <button id="button-addon3" type="button" class="btn btn-dark px-4 rounded-pill"><i
                                            class="fa fa-gift mr-2"></i>Apply coupon</button>
                                </div>
                            </div>
                        </div>
                        <div class="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Instructions for
                            seller</div>
                        <div class="p-4">
                            <p class="font-italic mb-4">If you have some information for the seller you can leave them
                                in the box below</p>
                            <textarea name="" cols="30" rows="2" class="form-control"></textarea>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Order summary
                        </div>
                        <div class="p-4">
                            <p class="font-italic mb-4">Shipping and additional costs are calculated based on values you
                                have entered.</p>
                            <ul class="list-unstyled mb-4">
                                <li class="d-flex justify-content-between py-3 border-bottom"><strong
                                        class="text-muted">Order Subtotal </strong><strong>£ {{Cart::subtotal()}}</strong>
                                </li>
                                <li class="d-flex justify-content-between py-3 border-bottom"><strong
                                        class="text-muted">Tax</strong><strong>£ {{Cart::tax()}}</strong></li>
                                <li class="d-flex justify-content-between py-3 border-bottom"><strong
                                        class="text-muted">Total</strong>
                                    <h5 class="font-weight-bold">£ {{Cart::total()}}</h5>
                                </li>
                            </ul><a href="#" class="btn btn-dark rounded-pill py-2 btn-block">Procceed to checkout</a>
                        </div>

                    </div>
                    @else

                    <h2> No item in Shopping Cart</h2>
                    <div class="col">
                        <a href="{{route('shop.index')}}" class="btn btn-info">Continue Shopping</a>
                    </div>
                    @endif
                </div>
                <div class="row p-5 bg-white rounded shadow-sm mb-5">
                    <div class="col-lg-12">
                        @if (Cart::instance('addToWishList')->count()>0)
                        <h2 class="mb-3 px-3"> {{Cart::count()}} items in WishList</h2>
                        <!-- Shopping cart table -->
                        <div class="table-responsive">
                            <table class="table">
                                <thead>
                                <tr>
                                    <th scope="col" class="border-0 bg-light">
                                        <div class="p-2 px-3 text-uppercase">Product</div>
                                    </th>
                                    <th scope="col" class="border-0 bg-light text-center">
                                        <div class="py-2 text-uppercase">Price</div>
                                    </th>
                                    <th scope="col" class="border-0 bg-light text-center">
                                        <div class="py-2 text-uppercase">Quantity</div>
                                    </th>
                                    <th scope="col" class="border-0 bg-light text-center">
                                        <div class="py-2 text-uppercase">Remove</div>
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                @foreach (Cart::instance('addToWishList')->content() as $item)


                                    <tr>
                                        <th scope="row" class="border-0">
                                            <div class="p-2">
                                                <img src="{{asset('img/'.$item->model->slug.'.jpg')}}" alt="item"
                                                     width="70" class="img-fluid rounded shadow-sm">
                                                <div class="ml-3 d-inline-block align-middle">
                                                    <h5 class="mb-0"> <a
                                                            href="{{route('shop.show',$item->model->slug)}}"
                                                            class="text-dark d-inline-block align-middle">{{$item->model->name}}</a>
                                                    </h5>
                                                    <span class="text-muted font-weight-normal font-italic d-block">
                                                        {{$item->model->details}}
                                                    </span>
                                                    <span class="d-block ">
                                                        <form action="{{route('cart.addToWishList',$item->rowId)}}" method="POST">
                                                            {{csrf_field()}}
                                                            <button type="submit" class="text-dark border-0 "><i
                                                                    class="fa fa-shopping-cart"> Move to Cart</i></button>
                                                        </form>
                                                    </span>
                                                </div>
                                            </div>
                                        </th>
                                        <td class="border-0 align-middle text-center"><strong>£ {{$item->model->price}}</strong>
                                        </td>
                                        <td class="border-0 align-middle text-center"><strong>{{$item->qty}}</strong></td>
                                        <td class="border-0 align-middle text-center">
                                            <form action="{{route('cart.destroy',$item->rowId)}}" method="POST">
                                                {{csrf_field()}}
                                                {{method_field('DELETE')}}
                                                <button type="submit" class="text-dark border-0 "><i
                                                        class="fa fa-trash"></i></button>
                                            </form>
                                        </td>
                                    </tr>
                                @endforeach
                                </tbody>
                            </table>
                        </div>
                        <!-- End -->
                    </div>
                    @endif
                </div>
            </div>
        </div>
    </div>


</div>


@include('component.brand')


@endsection
