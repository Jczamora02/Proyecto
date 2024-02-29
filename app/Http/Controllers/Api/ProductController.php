<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{

    public function index()
    {
        $products = Product::all();
        return $products;
    }


    public function store(Request $request)
    {
        $product = new Product();
        $product->name = $request->name;
        $product->lastName = $request->lastName;
        $product->businessName = $request->businessName;
        $product->identification = $request->identification;
        $product->phone = $request->phone;
        $product->country = $request->country;
        $product->city = $request->city;
        $product->created_at = $request->created_at;
        $product->updated_at = $request->updated_at;
        
        $product->save();

    }


    public function show(string $id)
    {
       $product = Product::find($id);
       return $product;
    }


    public function update(Request $request, $id)
    {
        $product = Product::findOrFail($request->id);
        $product->name = $request->name;
        $product->lastName = $request->lastName;
        $product->businessName = $request->businessName;
        $product->identification = $request->identification;
        $product->phone = $request->phone;
        $product->country = $request->country;
        $product->city = $request->city;
        $product->created_at = $request->created_at;
        $product->updated_at = $request->updated_at;

        $product->save();
        return $product;
    }

    public function destroy(string $id)
    {
        $product =Product::destroy($id);
        return $product;
    }
}
