import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Mainslider.css';
import Slider from './Slider';
import Swiper from './Swiper';
import star from '../../assets/chirstmas/star.png'
import ball from '../../assets/chirstmas/ball.png'
import gift from '../../assets/chirstmas/gift.png'
import axios from 'axios';
import dummyData from '../dummyData.js'

const SERVER_URL = 'http://localhost:8080/api/collection/data';
const Mainslider =  () => {
    const contractAddress = '0x1001';
    const getCollection = async () =>{
        const response = await axios.put(SERVER_URL,{
            contractAddress:contractAddress}
        );
        console.log(response);
    }

    useEffect(()=>{
        console.log('effect');
        getCollection();
    },[]);
    

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
                {
                    
                    dummyData.filter(e=>e.category==='main').map(e=>{
                        return <Link to={'/collection/'+ e.collectionName.replace(/ /gi,'-')}>
                            <Swiper imgUrl={e.collectionImgUrl} collectionTitle={e.collectionName}></Swiper>
                        </Link>
                    })
                }
            </Slider>
        </div>
    );
};

export default Mainslider;