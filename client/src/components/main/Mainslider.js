import React from 'react';
import { Link } from 'react-router-dom';
import './Mainslider.css';
import Slider from './Slider';
import Swiper from './Swiper';

const Mainslider = () => {
    return (
        <div className="mainslider">
            {[...Array(50)].map((_,i)=>{
                return <div class="snowflake"></div>
            })}
            <div className="mainslider-heading-wrapper">
                <h1>Explore, collect and sell NFTs</h1>
            </div>
            <Slider>
                <Link to='#'><Swiper></Swiper></Link>   
                <Link to='#'><Swiper></Swiper></Link>   
                <Link to='#'><Swiper></Swiper></Link>   
                <Link to='#'><Swiper></Swiper></Link>   
                <Link to='#'><Swiper></Swiper></Link>   
                <Link to='#'><Swiper></Swiper></Link>   
                <Link to='#'><Swiper></Swiper></Link>   
                <Link to='#'><Swiper></Swiper></Link>   
                <Link to='#'><Swiper></Swiper></Link>   
                <Link to='#'><Swiper></Swiper></Link>   
                <Link to='#'><Swiper></Swiper></Link>   
                <Link to='#'><Swiper></Swiper></Link>   
                <Link to='#'><Swiper></Swiper></Link>   
                <Link to='#'><Swiper></Swiper></Link>   
                <Link to='#'><Swiper></Swiper></Link>   
            </Slider>
        </div>
    );
};

export default Mainslider;