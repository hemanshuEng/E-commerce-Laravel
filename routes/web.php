<?php

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

Route::get('/', 'BestSellerController@index');

// Route::view('/', 'pages.home');

Route::get('/shop', function () {
    return view('pages.men');
});

Route::get('/detail', function () {
    return view('pages.detail');
});
