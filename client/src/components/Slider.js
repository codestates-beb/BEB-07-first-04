import React from "react";
import "./Slider.css";
import Swiper from "./Swiper";



const Slider = () => {
    return <div className="main-slider">
        <div className="main-slider-heading-wrapper">
            <h1>Explore, collect and sell NFTs</h1>
        </div>
        <button className="main-slider-arrow-button main-slider-left-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" id="Bold" viewBox="0 0 24 24"><path d="M10.957,12.354a.5.5,0,0,1,0-.708l4.586-4.585a1.5,1.5,0,0,0-2.121-2.122L8.836,9.525a3.505,3.505,0,0,0,0,4.95l4.586,4.586a1.5,1.5,0,0,0,2.121-2.122Z"/></svg>
        </button>
        <button className="main-slider-arrow-button main-slider-right-arrow">
           <svg xmlns="http://www.w3.org/2000/svg" id="Bold" viewBox="0 0 24 24" ><path d="M15.75,9.525,11.164,4.939A1.5,1.5,0,0,0,9.043,7.061l4.586,4.585a.5.5,0,0,1,0,.708L9.043,16.939a1.5,1.5,0,0,0,2.121,2.122l4.586-4.586A3.505,3.505,0,0,0,15.75,9.525Z"/></svg>
        </button>
        <div className="main-swiper-container">
            <Swiper></Swiper>
            <Swiper></Swiper>
            <Swiper></Swiper>
            <Swiper></Swiper>
            <Swiper></Swiper>
        </div>
    </div>
}

export default Slider