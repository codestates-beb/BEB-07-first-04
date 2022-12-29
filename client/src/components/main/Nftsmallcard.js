import React from 'react';
import './Nftsmallcard.css';

const Nftsmallcard = ({imgUrl,title}) => {
    return (
        <div className='Nftsmallcard'>
            <div className='Nftsmallcard-img-wrapper'>
                <img className='Nftsmallcard-img' src={imgUrl}></img>
            </div>
            <div className='Nftsmallcard-description-container'>
                <h5 className='Nftsmallcard-description-title'>{title}</h5>
                <div className='Nftsmallcard-description-detail'>
                    <div className='Nftsmallcard-description-price'>
                        <p>FLOOR</p>
                        <h5>0.14ETH</h5>
                    </div>
                    <div className='Nftsmallcard-description-price'>
                        <p>TOTAL VOLUME</p>
                        <h5>10K ETH</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nftsmallcard;