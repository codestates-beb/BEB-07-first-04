import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Nftcard from './Nftcard';
import reload_logo from '../../assets/reload.png'

import './Nftitems.css'
import useInterval from './useInterval';


const Nftitems = () => {
    const [count,setCount] = useState(0);
    useInterval(() => {
        // Your custom logic here
        setCount(count + 1);
      }, 1000);

    return (
    <div className='collection-nft'>
        <div className='collection-nft-reload'>
            <div className='collection-nft-reload-img' onClick={()=>{setCount(0)}}><img src={reload_logo}></img></div>
            <div className='collection-nft-reload-time'>Updated {count>=60?`${Math.floor(count/60)}m`:`${count}s`} ago</div>
        </div>
        <div className='collection-nft-items'>
            <Link to='#'><Nftcard></Nftcard></Link>
            <Link to='#'><Nftcard></Nftcard></Link>
            <Link to='#'><Nftcard></Nftcard></Link>
            <Link to='#'><Nftcard></Nftcard></Link>
            <Link to='#'><Nftcard></Nftcard></Link>
            <Link to='#'><Nftcard></Nftcard></Link>
            <Link to='#'><Nftcard></Nftcard></Link>
            <Link to='#'><Nftcard></Nftcard></Link>
            <Link to='#'><Nftcard></Nftcard></Link>
            <Link to='#'><Nftcard></Nftcard></Link>
            <Link to='#'><Nftcard></Nftcard></Link>
            <Link to='#'><Nftcard></Nftcard></Link>

        </div>
    </div>
    );
};

export default Nftitems;