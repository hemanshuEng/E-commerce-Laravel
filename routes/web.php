<?php


use Gloudemans\Shoppingcart\Facades\Cart;
use Illuminate\Support\Facades\Config;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'BestSellerController@index')->name('home');

Route::get('/shop', 'ShopController@index')->name('shop.index');
Route::get('/shop/{product}', 'ShopController@show')->name('shop.show');

Route::get('/cart', 'CartController@index')->name('cart.index');
Route::post('/cart', 'CartController@store')->name('cart.store');
Route::delete('/cart/{product}', 'CartController@destroy')->name('cart.destroy');
Route::post('/cart/addToWishList/{product}', 'CartController@addToWishList')->name('cart.addToWishList');

Route::delete('/WishList/{product}', 'WishListController@destroy')->name('wishlist.destroy');
Route::post('/WishList/addToCart/{product}', 'WishListController@addToCart')->name('wishlist.addToCart');

Route::get('/checkout', 'CheckoutController@index')->name('checkout.index');
Route::post('/checkout', 'CheckoutController@store')->name('checkout.store');

Route::get('/thankyou', 'ConfirmationController@index')->name('confirmation.index');
$value = Config::get('app.timezone');


Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
});
