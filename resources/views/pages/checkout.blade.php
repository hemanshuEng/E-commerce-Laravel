@extends('layouts.app')
@section('content')
    <div class="container py-5">
        <div class="row  justify-content-around py-5 px-1 bg-white rounded shadow-sm mb-5">
            <div class="col-md-7 bg-light rounded mb-5 p-5">
                <h2>Billing Details</h2>
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
                </div>
            </div>
            <div class="col-md-4 bg-light rounded mb-5 p-5">
                <h2>Cart Total</h2>
                <div class="row">
                    <div class="col-md-12">
                        <ul>
                            <li>
                                <span>product</span>
                                <span>price</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

@include('component.brand')
@endsection
