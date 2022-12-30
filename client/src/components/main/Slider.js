import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Slider.css";
import Swiper from "./Swiper";



const Slider = ({children}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleButtonClick = (direction) => {
        let newIndex = currentIndex + direction;
        if(newIndex>=3) newIndex =0;
        if(newIndex<0) newIndex =2;
        
        setCurrentIndex(newIndex);
    }

    // 데이터 fetch
    // useEffect(()=>{
    //     fetch
    // },[]);

    return <div className="slider">

        <div className="swiper-container-wrapper">
            <button 
                className="slider-arrow-button slider-left-arrow"
                onClick={()=>{handleButtonClick(-1)}}>
                <svg xmlns="http://www.w3.org/2000/svg" id="Bold" viewBox="0 0 24 24"><path d="M10.957,12.354a.5.5,0,0,1,0-.708l4.586-4.585a1.5,1.5,0,0,0-2.121-2.122L8.836,9.525a3.505,3.505,0,0,0,0,4.95l4.586,4.586a1.5,1.5,0,0,0,2.121-2.122Z"/></svg>
            </button>
            <button 
                className="slider-arrow-button slider-right-arrow"
                onClick={()=>{handleButtonClick(1)}}>
            <svg xmlns="http://www.w3.org/2000/svg" id="Bold" viewBox="0 0 24 24" ><path d="M15.75,9.525,11.164,4.939A1.5,1.5,0,0,0,9.043,7.061l4.586,4.585a.5.5,0,0,1,0,.708L9.043,16.939a1.5,1.5,0,0,0,2.121,2.122l4.586-4.586A3.505,3.505,0,0,0,15.75,9.525Z"/></svg>
            </button>
            <div className="swiper-container"
                style={{ transform: `translateX(${ (-1*currentIndex *25)}%)`}}>
                {/* 데이터를 뿌려준다. 
                    Ex) [].map((e)=>{
                        return   <Link to='/collection/e.collectionTitle'>
                                    <Swiper imgUrl = {e.imgUrl} colllectionTitle = {e.collectionTitle} floorPrice = {e.floorPrice} />
                                </Link>   
                        
                    })
                 */}
                {
                    children
                }
                 {/* <Link to='/collection'><Swiper></Swiper></Link>   
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
                 <Link to='#'><Swiper></Swiper></Link>    */}
                
  
            </div>

        </div>
    </div>
}

export default Slider