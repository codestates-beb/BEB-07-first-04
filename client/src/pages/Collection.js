import React from 'react';
import { useParams } from 'react-router-dom';
import Nftitems from '../components/collection/Nftitems';
import dummyData from '../components/dummyData';
import './Collection.css'

const Collection = () => {
    const {collectionTitle} = useParams();
    const collectionData = dummyData.filter(e=>e.collectionName.replace(/ /gi,'-')===collectionTitle).at(0);
    console.log(collectionData)
    //collectionTitle을 활용해 데이터 받아오기
    //bgImgUrl, imgUrl, numOfItes, chainTitle, createdAt, NFTs{ nftImgUrl, id, price,}

    return (
        <div className='collection'>
            <div className='collection-background'>
                <div className='collection-background-img'>
                    <img src={collectionData.backgroundPicUrl}></img>
                </div>
                <div className='collection-profile-img'>
                    <img src={collectionData.profilePicUrl}></img>
                </div>
            </div>
            <div className='collection-content-description'>
                <h1 className='collection-content-description-title'>{collectionData.collectionName}</h1>
                <p className='collection-content-description-maker'>By <span>YugaLabs</span></p>
                <p className='collection-content-description-detail'>items <span>9,998</span>&nbsp;&nbsp; created At <span>Apr 2021</span> &nbsp;&nbsp; Chain <span>Ethereum</span></p>
                <p className='collection-content-description-writing'>The Bored Ape Yacht Club is a collection of 10,000 unique Bored Ape NFTs— unique digital collectibles living on...</p>
                <div className='collection-content-descripttion-line'></div>
                <Nftitems imgUrl={collectionData.collectionImgUrl}></Nftitems>
            </div>
        </div>
    );
};
 
export default Collection;