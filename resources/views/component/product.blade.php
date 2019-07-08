<div class="container product">
    <div class="row">
        <div class="col-md-4">
            <div class="row">
                <div class="col-12 border border-light text-info">
                    <h5 class="text-uppercase">Brand</h5>
                    <p>Nike</p>
                    <p>Nike</p>
                    <p>Nike</p>
                    <p>Nike</p>
                    <p>Nike</p>
                    <p>Nike</p>
                </div>
            </div>
        </div>
        <div class="col-md-8">
            <div class="row">
                @foreach ($products as $product)
                <div class="col-md-4  mb-3 d-flex align-items-stretch">
                    <div class="card">
                        <a href="{{route('shop.show',$product->slug)}}">
                            <img src="{{asset('img/'.$product->slug.'.jpg')}}" alt="item" class="card-img-top">
                        </a>
                        <div class="card-body text-uppercase d-flex align-items-end flex-column">
                            <h5 class="card-title align-self-center ">{{$product->name}}</h5>
                            <h5 class="font-weight-bold mt-auto">£{{$product->price}}</h5>
                        </div>
                    </div>
                </div>

                @endforeach

                {{-- <div class="col-md-4  mb-3">
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
                <div class="col-md-4  mb-3">
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
                <div class="col-md-4 mb-3">
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
                <div class="col-md-4  mb-3">
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
                <div class="col-md-4  mb-3">
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
                <div class="col-md-4  mb-3">
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
                <div class="col-md-4 mb-3">
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
                <div class="col-md-4 mb-3">
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
        </div>
    </div>
</div>
