import React from 'react';
import Nftcard from '../components/collection/Nftcard';
import Nftitems from '../components/collection/Nftitems';
import Header from '../components/Header';
import './Collection.css'

const Collection = () => {
    return (
        <div className='collection'>
            <div className='collection-background'>
                <div className='collection-background-img'>
                    <img src='https://i.seadn.io/gae/i5dYZRkVCUK97bfprQ3WXyrT9BnLSZtVKGJlKQ919uaUB0sxbngVCioaiyu9r6snqfi2aaTyIvv6DHm4m2R3y7hMajbsv14pSZK8mhs?auto=format&w=3840'></img>
                </div>
                <div className='collection-profile-img'>
                    <img src='https://i.seadn.io/gae/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB?auto=format&w=384'></img>
                </div>
            </div>
            <div className='collection-content-description'>
                <h1 className='collection-content-description-title'>Bored Ape Yacht Club</h1>
                <p className='collection-content-description-maker'>By <span>YugaLabs</span></p>
                <p className='collection-content-description-detail'>items <span>9,998</span>&nbsp;&nbsp; created At <span>Apr 2021</span> &nbsp;&nbsp; Chain <span>Ethereum</span></p>
                <p className='collection-content-description-writing'>The Bored Ape Yacht Club is a collection of 10,000 unique Bored Ape NFTs— unique digital collectibles living on...</p>
                <div className='collection-content-descripttion-line'></div>
                <Nftitems></Nftitems>
            </div>
        </div>
    );
};
 
export default Collection;