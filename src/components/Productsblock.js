import React from "react"
import Product from "./Product"
import ProductList from "./ProductList"

export default function Productsblock(){

    function toProduct(object) {
        return(
            <Product theProps={object}/>
        )
    }

    let productArray = ProductList.arrayOfProducts.map(toProduct);

    return(
        <div className="productstyle">
            {productArray}

        </div>
    )
}   




