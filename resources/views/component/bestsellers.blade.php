<div class="container seller">
    <div class="display-4 text-center text-uppercase mb-3 text-info">Best Seller</div>
    <div class="row">

        @foreach ($products as $product)
        <div class="col-md-3 mb-3 d-flex align-items-stretch">
            <div class="card">
                <a href="#">
                    <img src="img/item-1.jpg" alt="item" class="card-img-top">
                </a>
                <div class="card-body text-uppercase text-center">
                    <h5 class="card-title ">{{$product->name}}</h5>
                    <h5 class="font-weight-bold">£ {{$product->price}}</h5>
                </div>
            </div>
        </div>
        @endforeach

        {{-- <div class="col-md-3  mb-3">
                <div class="card">
                    <a href="#">
                        <img src="img/item-1.jpg" alt="item" class="card-img-top">
                    </a>
                    <div class="card-body text-uppercase text-center">
                        <h5 class="card-title "> women's boot shoes</h5>
                        <h5 class="font-weight-bold">£16</h5>
                    </div>
                </div>
        </div>
        <div class="col-md-3  mb-3">
                <div class="card">
                    <a href="#">
                        <img src="img/item-1.jpg" alt="item" class="card-img-top">
                    </a>
                    <div class="card-body text-uppercase text-center">
                        <h5 class="card-title "> women's boot shoes</h5>
                        <h5 class="font-weight-bold">£16</h5>
                    </div>
                </div>
            </div>
            <div class="col-md-3 mb-3">
                    <div class="card">
                        <a href="#">
                            <img src="img/item-1.jpg" alt="item" class="card-img-top">
                        </a>
                        <div class="card-body text-uppercase text-center">
                            <h5 class="card-title "> women's boot shoes</h5>
                            <h5 class="font-weight-bold">£16</h5>
                        </div>
                    </div>
            </div>
            <div class="col-md-3  mb-3">
                    <div class="card" >
                        <a href="#">
                            <img src="img/item-1.jpg" alt="item" class="card-img-top" >
                        </a>
                        <div class="card-body text-uppercase text-center">
                            <h5 class="card-title "> women's boot shoes</h5>
                            <h5 class="font-weight-bold">£16</h5>
                        </div>
                    </div>
                </div>
                <div class="col-md-3  mb-3">
                        <div class="card">
                            <a href="#">
                                <img src="img/item-1.jpg" alt="item" class="card-img-top">
                            </a>
                            <div class="card-body text-uppercase text-center">
                                <h5 class="card-title "> women's boot shoes</h5>
                                <h5 class="font-weight-bold">£16</h5>
                            </div>
                        </div>
                </div>
                <div class="col-md-3  mb-3">
                        <div class="card">
                            <a href="#">
                                <img src="img/item-1.jpg" alt="item" class="card-img-top">
                            </a>
                            <div class="card-body text-uppercase text-center">
                                <h5 class="card-title "> women's boot shoes</h5>
                                <h5 class="font-weight-bold">£16</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 mb-3">
                            <div class="card">
                                <a href="#">
                                    <img src="img/item-1.jpg" alt="item" class="card-img-top">
                                </a>
                                <div class="card-body text-uppercase text-center">
                                    <h5 class="card-title "> women's boot shoes</h5>
                                    <h5 class="font-weight-bold">£16</h5>
                                </div>
                            </div>
                    </div> --}}
    </div>
    <div class="row d-flex justify-content-center">

        <a href="#" class="btn btn-info py-3 px-5 text-uppercase" style="border-radius:50px">Shop Now</a>
    </div>
</div>
