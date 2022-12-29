import React from "react";
import "./Swiper.css";

const Swiper = ({imgUrl,collectionTitle,floorPrice}) => {

    return <div className="main-slider-swiper">
            <span className="">
                <img className="main-slider-swiper-bgimg" src="https://i.seadn.io/gcs/files/1f3dae543849e6769de98fdb49780398.png?auto=format&w=1000" alt="image"></img>
            </span>
            <div className="main-slider-swiper-description">
                <h5>NFT 제목</h5>
                <span>Floor : 0.112ETH</span>
            </div>
    </div>  
}

export default Swiper