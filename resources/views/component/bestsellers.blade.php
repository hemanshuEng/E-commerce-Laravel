<div class="container seller">
    <div class="display-4 text-center text-uppercase mb-3 text-info">Best Seller</div>
    <div class="row">

        @foreach ($products as $product)
        <div class="col-md-3 mb-3 d-flex align-items-stretch">
            <div class="card">
                <a href="{{route('shop.show',$product->slug)}}">
                    <img src="{{asset('img/'.$product->slug.'.jpg')}}" alt="item" class="card-img-top">
                </a>
                <div class="card-body text-uppercase  d-flex align-items-end flex-column">
                    <h5 class="card-title align-self-center">{{$product->name}}</h5>
                    <h5 class="font-weight-bold mt-auto">£ {{$product->price}}</h5>
                </div>
            </div>
        </div>
        @endforeach

    </div>
    <div class="row d-flex justify-content-center">

        <a href="{{route('shop.index')}}" class="btn btn-info py-3 px-5 text-uppercase" style="border-radius:50px">Shop
            Now</a>
    </div>
</div>
