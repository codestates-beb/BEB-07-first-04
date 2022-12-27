import React, { useState } from 'react';
import './Nftcard.css'

const Nftcard = () => {
    const [isHovering, setIsHovering] = useState(0);
    const [isActive, setIsActive] = useState(0);


    return (
        <div className='collection-nftcard'
            onMouseOver={() => setIsHovering(1)} onMouseOut={() => setIsHovering(0)} onPointerDown={() => { setIsActive(1); console.log('down') }} onPointerUp={() => { setIsActive(0); console.log('up') }}>
            <div className={isHovering ? 'collection-nftcard-wrapper-etherlogo opacity-1' : 'collection-nftcard-wrapper-etherlogo '}>
                <svg fill="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ><path d="M18.527 12.2062L12 16.1938L5.46875 12.2062L12 1L18.527 12.2062ZM12 17.4742L5.46875 13.4867L12 23L18.5312 13.4867L12 17.4742V17.4742Z" fill="white"></path></svg>
                <path d="M18.527 12.2062L12 16.1938L5.46875 12.2062L12 1L18.527 12.2062ZM12 17.4742L5.46875 13.4867L12 23L18.5312 13.4867L12 17.4742V17.4742Z" fill="white"></path>
            </div>
            <div className='collection-nftcard-img-wrapper'>
                <img className={isHovering ? 'collection-nftcard-img img-scale-1-2' : 'collection-nftcard-img'} src='https://i.seadn.io/gae/PVkBLZVHM13l4cvudxeqEJb7lVANP3G6_mN1BZ-DoQUqUjIRPcIMn-WQLwLpA569Od6RUYeX4e0CbS8n9LL44MDDXJ9I6_eN2shLNQ?auto=format&w=750'></img>
            </div>
            <div className='collection-nftcard-description'>
                <h5>1234</h5>
                <h5>{123.22}ETH</h5>
                <p>ends in 3days</p>
            </div>
            <div className={isHovering ? 'collection-nftcard-buy-button collection-nftcard-buy-button-appear ' : 'collection-nftcard-buy-button'}><h5 className={isActive ? 'collection-nftcard-buy-button-active' : 'collection-nftcard-buy-button-not-active'}>Buy Now</h5></div>

        </div>
    );
};

export default Nftcard;