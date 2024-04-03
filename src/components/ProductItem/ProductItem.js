import React from 'react';
import cl from "./ProductItem.module.css"
import StarSVG from "../../assets/Star.svg"
import {Link} from "react-router-dom";

const ProductItem = ({product}) => {
    return (
        <Link to={`/product/${product.id}`} className={cl.item}>
            <div className={cl.image}><img src={product.image} alt=""/></div>
            <p className={cl.name}>{product.name}</p>
            <p className={cl.price}>{product.price} грн</p>
            <div className={cl.rating}><img src={StarSVG}/> {product.rating}</div>
        </Link>
    );
};

export default ProductItem;