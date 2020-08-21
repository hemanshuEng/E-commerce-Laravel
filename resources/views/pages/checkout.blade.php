@extends('layouts.app')
@section('extra-css')
    <script src="https://js.stripe.com/v3/"></script>
@endsection
@section('content')
    <div class="container py-5">
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
        <div class="row  justify-content-around py-5 px-1 bg-white rounded shadow-sm mb-5">
            <div class="col-md-7 bg-light rounded mb-5 p-5 align-self-start ">
                <h2>Billing Details</h2>
                <form action="{{ route('checkout.store') }}" method="post" id="payment-form">
                    {{ csrf_field() }}
                    <div class="row justify-content-around">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="firstname" class="text-uppercase">First Name</label>
                                    <input type="text" id="firstname" class="form-control" placeholder="Your firstname">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="lastname" class="text-uppercase">Last Name</label>
                                <input type="text" id="lastname" class="form-control" placeholder="Your lastname">
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="address" class="text-uppercase">Address</label>
                                <input type="text" id="address" class="form-control" placeholder="Your address">
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="town" class="text-uppercase">Town</label>
                                <input type="text" id="town" class="form-control" placeholder="Your Town">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="state" class="text-uppercase">State / Province</label>
                                <input type="text" id="state" class="form-control" placeholder="State Province">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="postcode" class="text-uppercase">Postal Code</label>
                                <input type="text" id="postcode" class="form-control" placeholder="Postcode">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="email" class="text-uppercase">Email</label>
                                <input type="email" id="email" class="form-control" placeholder="Email Address">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="phone" class="text-uppercase">Phone Number</label>
                                <input type="tel" id="phone" class="form-control" placeholder="Phone Number">
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">

                                    <label for="card-element">
                                        Credit or debit card
                                    </label>
                                    <div id="card-element">
                                        <!-- A Stripe Element will be inserted here. -->
                                    </div>

                                    <!-- Used to display form errors. -->
                                    <div id="card-errors" role="alert"></div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <button type="submit" class="btn btn-dark rounded-pill py-2 btn-block">Place Order</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div class="col-md-4 bg-light rounded mb-5 p-5">
                <h2>Cart Total</h2>
                <div class="row">
                    <div class="col-md-12">
                        <div class="table-responsive">
                            <table class="table">
                                <thead>
                                <tr>
                                    <th scope="col" class="border-0 bg-light">
                                        <div class="text-uppercase">Product</div>
                                    </th>
                                    <th scope="col" class="border-0 bg-light text-center">
                                        <div class="text-uppercase">Price</div>
                                    </th>

                                </tr>
                                </thead>
                                <tbody>
                                @foreach (Cart::content() as $item)
                                    <tr>
                                        <th scope="row" class="border-0">
                                                <div class="ml-1 d-inline-block align-middle">
                                                    <span>{{$item->qty}} X </span>
                                                    <p class="mb-0"> <a
                                                            href="{{route('shop.show',$item->model->slug)}}"
                                                            class="text-dark align-middle">{{$item->model->name}}</a>
                                                    </p>
                                                </div>
                                        </th>
                                        <td class="border-0 align-middle text-center"><strong>£ {{$item->model->price}}</strong>
                                        </td>
                                    </tr>
                                    @endforeach
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="col-md-12">
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
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="{{ mix('/js/checkout.js') }}"></script>
@include('component.brand')
@endsection
