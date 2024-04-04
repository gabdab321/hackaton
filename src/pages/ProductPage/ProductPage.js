import React, {useRef} from 'react';
import {useParams} from "react-router-dom";
import cl from "./ProductPage.module.css"
import {products} from "../../consts/products";
import StarSVG from "../../assets/Star.svg"
import HeartSVG from "../../assets/Heart.svg"
import CardSVG from "../../assets/card.svg"
import {soapComponents, soapFlavor, soapSize} from "../../consts/soap";
import co from "co";

const ProductPage = () => {
    const {id} = useParams()
    const product = products.find(prod => prod.id === +id)
    const selectedFlavor = useRef(null)
    const selectedSize = useRef(null)

    function handleComponents(e) {
        if(e.target.className === `${cl.param_button} ${cl.selected}`) {
            e.target.className = `${cl.param_button}`
        } else {
            e.target.className = `${cl.param_button} ${cl.selected}`
        }
    }

    function handleFlavor(e) {
        e.target.className = `${cl.param_button} ${cl.selected}`

        if(selectedFlavor.current) {
            selectedFlavor.current.className = `${cl.param_button}`
        }

        selectedFlavor.current = e.target
    }

    function handleSize(e) {
        e.target.className = `${cl.param_button} ${cl.selected}`

        if(selectedSize.current) {
            selectedSize.current.className = `${cl.param_button}`
        }

        selectedSize.current = e.target
    }

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
                    {product.constructor
                        ?
                        ""
                        :
                        <>
                            <p className={cl.product_params}>Аромат: {product.flavor}</p>
                            <p className={cl.product_params}>Розмір: {product.size}мм</p>
                        </>
                    }
                    <div className={cl.btn_container}>
                        <button className={cl.btn}><img src={CardSVG}/>Купити</button>
                        <button className={cl.btn}><img src={HeartSVG}/>Зберегти</button>
                    </div>
                </div>
            </div>
            {product.constructor
                ?
                <>
                    <div className={cl.constructor_container}>
                        <p>Приберіть непотрібні компоненти:</p>
                        <div className={cl.param_container}>
                            {soapComponents.map(comp => <button onClick={handleComponents} className={`${cl.param_button} ${cl.selected}`} key={comp}>{comp}</button>)}
                        </div>
                    </div>

                    <div className={cl.constructor_container}>
                        <p>Оберіть аромат:</p>
                        <div className={cl.param_container}>
                            {soapFlavor.map(comp => <button onClick={handleFlavor} className={`${cl.param_button}`} key={comp}>{comp}</button>)}
                        </div>
                    </div>

                    <div className={cl.constructor_container}>
                        <p>Оберіть розмір:</p>
                        <div className={cl.param_container}>
                            {soapSize.map(comp => <button onClick={handleSize} className={`${cl.param_button}`} key={comp}>{comp}</button>)}
                        </div>
                    </div>
                </>
                :
                ""
            }
        </div>
    );
};

export default ProductPage;