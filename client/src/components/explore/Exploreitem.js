import React from "react";
import './Exploreitem.css';


const Exploreitem = ({bgImgUrl,imgUrl,collectionTitle}) => {
    return <div className="explore-item">
        <div className="explore-item-img">
            <img src={bgImgUrl}></img>
        </div>
        <div className="explore-item-profile">
            <div className="explore-item-profile-content">
                <div className="explore-item-profile-img">
                    <img src={imgUrl}></img>
                </div>
                <div className="explore-item-profile-title">
                   <h5>{collectionTitle}</h5> 
                </div>
            </div>
        </div>
    </div>
}


export default Exploreitem;