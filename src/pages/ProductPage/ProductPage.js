import React from 'react';
import {useParams} from "react-router-dom";
import cl from "./ProductPage.module.css"
import {products} from "../../consts/products";
import StarSVG from "../../assets/Star.svg"
import HeartSVG from "../../assets/Heart.svg"
import CardSVG from "../../assets/card.svg"

const ProductPage = () => {
    const {id} = useParams()
    const product = products[id]

    return (
        <div className={cl.page}>
            <div className={cl.product_container}>
                <div className={cl.product_image}><img src={product.image}/></div>
                <div className={cl.product_information}>
                    <p className={cl.product_name}>{product.name}</p>
                    <p className={cl.product_price}>{product.price} грн</p>
                    <p className={cl.product_description}>{product.description}</p>
                    <div className={cl.product_rating}>
                        <img src={StarSVG}/>
                        <p>{product.rating}({product.reviewsCount} відгуки)</p>
                    </div>
                    <div className={cl.btn_container}>
                        <button className={cl.btn}><img src={CardSVG}/>Купити</button>
                        <button className={cl.btn}><img src={HeartSVG}/>Зберегти</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;