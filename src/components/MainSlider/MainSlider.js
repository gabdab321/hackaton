import React from "react";
import Slider from "react-slick";
import cl from "./MainSlider.module.css"
import Slide1 from "../../assets/slides/1.png"
import Slide3 from "../../assets/slides/3.png"
import Slide4 from "../../assets/slides/4.png"
import Slide5 from "../../assets/slides/5.png"
import ArrowLeft from "../../assets/ArrowLeft.svg"
import ArrowRight from "../../assets/ArrowRight.svg"

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${cl.arrow}`}
            style={{ ...style, right: "40px"}}
            onClick={onClick}
        ><img src={ArrowRight}/></div>
    );
}

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${cl.arrow}`}
            style={{ ...style, left: "40px",}}
            onClick={onClick}
        ><img src={ArrowLeft}/></div>
    );
}

export default function MainSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>
    };
    return (
        <Slider {...settings}>
            <div className={cl.slide}>
                <img src={Slide1}/>
            </div>
            <div className={cl.slide}>
                <img src={Slide3}/>
            </div>
            <div className={cl.slide}>
                <img src={Slide4}/>
            </div>
            <div className={cl.slide}>
                <img src={Slide5}/>
            </div>
        </Slider>
    );
}