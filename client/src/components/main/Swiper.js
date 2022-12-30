import React from "react";
import "./Swiper.css";

const Swiper = ({imgUrl,collectionTitle,floorPrice}) => {

    return <div className="main-slider-swiper">
            <span className="main-slider-swiper-bgimg-wrapper">
                <img className="main-slider-swiper-bgimg" src={imgUrl} alt="image"></img>
            </span>
            <div className="main-slider-swiper-description">
                <h5>{collectionTitle}</h5>
                <span>Floor : 0.112ETH</span>
            </div>
    </div>  
}

export default Swiper