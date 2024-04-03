import React from 'react';
import MainSlider from "../../components/MainSlider/MainSlider";
import ProductsList from "../../components/ProductsList/ProductsList";
import About from "../../components/About/About";
import Footer from "../../components/Footer/Footer";

const MainPage = () => {
    return (
        <div>
            <MainSlider/>
            <ProductsList/>
            <About/>
        </div>
    );
};

export default MainPage;