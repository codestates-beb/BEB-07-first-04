import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Nftcard from './Nftcard';
import reload_logo from '../../assets/reload.png';
import axios from 'axios';


import { ethers } from 'ethers';
import contractAddress from '../../contract/ContractAddress';
import contractAbi from '../../contract/MakingNFT_ABI'
import './Nftitems.css'
import useInterval from './useInterval';


const Nftitems = ({imgUrl}) => {
    const [count,setCount] = useState(0);
    const [tokenMax,setTokenMax] = useState(0);

    useInterval(() => {
        setCount(count + 1);
    }, 1000);
    
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const makingContract = new ethers.Contract(contractAddress, contractAbi, provider);

    console.log(makingContract)
    
    return (
    <div className='collection-nft'>
        <div className='collection-nft-reload'>
            <div className='collection-nft-reload-img' onClick={()=>{setCount(0)}}><img alt='reload' src={reload_logo}></img></div>
            <div className='collection-nft-reload-time'>Updated {count>=60?`${Math.floor(count/60)}m`:`${count}s`} ago</div>
        </div>
        <div className='collection-nft-items'>
            {

            }
            <Link to={`../NFT_transaction`} state={{tokenId:1}}><Nftcard imgUrl={imgUrl}></Nftcard></Link>
            <Link to={`../NFT_transaction`} state={{tokenId:2}}><Nftcard imgUrl={imgUrl}></Nftcard></Link>
            <Link to={`../NFT_transaction`} state={{tokenId:3}}><Nftcard imgUrl={imgUrl}></Nftcard></Link>
            <Link to={`../NFT_transaction`} state={{tokenId:4}}><Nftcard imgUrl={imgUrl}></Nftcard></Link>
            <Link to={`../NFT_transaction`} state={{tokenId:5}}><Nftcard imgUrl={imgUrl}></Nftcard></Link>
            <Link to='#'><Nftcard imgUrl={imgUrl}></Nftcard></Link>
            <Link to='#'><Nftcard imgUrl={imgUrl}></Nftcard></Link>
            <Link to='#'><Nftcard imgUrl={imgUrl}></Nftcard></Link>
            <Link to='#'><Nftcard imgUrl={imgUrl}></Nftcard></Link>
            <Link to='#'><Nftcard imgUrl={imgUrl}></Nftcard></Link>
            <Link to='#'><Nftcard imgUrl={imgUrl}></Nftcard></Link>
            <Link to='#'><Nftcard imgUrl={imgUrl}></Nftcard></Link>
            <Link to='#'><Nftcard imgUrl={imgUrl}></Nftcard></Link>
            <Link to='#'><Nftcard imgUrl={imgUrl}></Nftcard></Link>
            <Link to='#'><Nftcard imgUrl={imgUrl}></Nftcard></Link>

        </div>
    </div>
    );
};

export default Nftitems;