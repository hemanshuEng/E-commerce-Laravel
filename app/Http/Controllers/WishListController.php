<?php

namespace App\Http\Controllers;

use Gloudemans\Shoppingcart\Facades\Cart;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class WishListController extends Controller
{
    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return RedirectResponse
     */
    public function destroy($id)
    {
        Cart::instance('addToWishList')->remove($id);
        return back()->with('success', 'Item has been Removed  From Wish List');
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return RedirectResponse
     */
    public function addToCart($id)
    {
        $item = Cart::instance('addToWishList')->get($id);

        Cart::instance('addToWishList')->remove($id);

        $duplicates = Cart::instance('default')->search(function($cartItem, $rowId) use ($id) {
            return  $rowId === $id;
        });

        if($duplicates->isNotEmpty()) {
            return redirect()->route('cart.index')->with('success', 'Item is already into Cart');
        }

        Cart::instance('default')->add($item->id,$item->name, 1 , $item->price)->associate('App\Product');

        return redirect()->route('cart.index')->with('success', 'Item was added to Cart');
    }
}
