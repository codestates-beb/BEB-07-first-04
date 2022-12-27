import React from "react";
import "./Slider.css";
import Swiper from "./Swiper";
import Footer from "./Footer"


const Slider = () => {
    return <div className="main-slider">
        <div className="main-slider-heading-wrapper">
            <h1>Explore, collect and sell NFTs</h1>
        </div>
        <button className="main-slider-left-arrow"></button>
        <button className="main-slider-right-arrow"></button>
        <div className="main-swiper-container">
            <Swiper></Swiper>
            <Swiper></Swiper>
            <Swiper></Swiper>
            <Swiper></Swiper>
        
        </div>
        <Footer />
    </div>
}

export default Slider