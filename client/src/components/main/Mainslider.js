import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Mainslider.css';
import Slider from './Slider';
import Swiper from './Swiper';
import star from '../../assets/chirstmas/star.png'
import ball from '../../assets/chirstmas/ball.png'
import gift from '../../assets/chirstmas/gift.png'

import axios from 'axios';

const Mainslider = () => {

    useEffect(()=>{
        axios.get('http://localhost:8080/api/collection/info',{
            contractAddress: '0x13313'
        })
        .then(res=>console.log(res));
    },[])

    return (
        <div className="mainslider">
            {[...Array(50)].map((_,i)=>{
                return <div class="snowflake"></div>
            })}
            {[...Array(10)].map((_,i)=>{
                return <div className='treestar'>
                     <img src={star}></img>
                </div>     
            })}
            {[...Array(10)].map((_,i)=>{
                return <div className='treestar'>
                     {/* <img src={ball}></img> */}
                </div>     
            })}
            {[...Array(10)].map((_,i)=>{
                return <div className='treestar'>
                     {/* <img src={tree}></img> */}
                </div>     
            })}
            {[...Array(6)].map((_,i)=>{
                return <div className='treestar'>
                     <img src={gift}></img>
                </div>     
            })}
            <div></div>
            <div></div>
            {[...Array(8)].map((_,i)=>{
                return <div className='treestar'>
                     <img src={ball}></img>
                </div>     
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