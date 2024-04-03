import React from 'react';
import cl from "./ProductsList.module.css"
import {products} from "../../consts/products";
import ProductItem from "../ProductItem/ProductItem";

const ProductsList = () => {
    return (
        <div className={cl.main}>
            <p className={cl.title}>Товари</p>
            <div className={cl.list}>
                {products.map(product => <ProductItem key={product.id} product={product}/>)}
            </div>
        </div>
    );
};

export default ProductsList;