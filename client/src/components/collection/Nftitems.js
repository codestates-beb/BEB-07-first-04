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
    const fakeFetch = (delay = 2000) => new Promise(res => setTimeout(res, delay));

    const [count,setCount] = useState(0);
    const [tokenMax,setTokenMax] = useState(0);
    const [fakeState,setFakeState] = useState(1);

    const fetchItems = async () =>{
        setFakeState(0)
        await fakeFetch();
        setFakeState(1);
    }

    useInterval(() => {
        setCount(count + 1);
    }, 1000);
    
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const makingContract = new ethers.Contract(contractAddress, contractAbi, provider);

    console.log(makingContract)
    
    return (
    <div className='collection-nft'>
        <div className='collection-nft-reload'>
            <div className='collection-nft-reload-img' 
                onClick={()=>{
                    fetchItems();
                    setCount(0)
                }
                }><img alt='reload' src={reload_logo}></img></div>
            <div className='collection-nft-reload-time'>Updated {count>=60?`${Math.floor(count/60)}m`:`${count}s`} ago</div>
        </div>
        <div className='collection-nft-items'>
            {
                fakeState
                ?[...Array(15)].map((_,i)=>{
                    return <Link to={`../NFT_transaction`} state={{tokenId:i+1}}><Nftcard imgUrl={imgUrl}></Nftcard></Link>
                })
                :<div class="loading-container">
                    <div class="loading"></div>
                    <div id="loading-text">OPEN C</div>
                </div>
            }


        </div>
    </div>
    );
};

export default Nftitems;