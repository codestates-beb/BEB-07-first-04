import React from "react";
import { Link } from "react-router-dom";
import Navtap from "../Navtap";
import Rank from "./Rank";
import './Ranker.css'

const Ranker = () => {
    

    return <div className="main-ranker">
        <Navtap></Navtap>
        <div className="main-ranker-content-container">
            <div className="main-ranker-content-wrapper">
                <div className="main-ranker-content-title"><div>COLLECTION</div><div>VOLUME</div></div>
                {
                    [1,2,3,4,5].map((e)=>{
                        return <Link to='#'> <Rank i={e}></Rank></Link>;
                    })
                }
            </div>
            <div className="main-ranker-content-wrapper">
                <div className="main-ranker-content-title"><div>COLLECTION</div><div>VOLUME</div></div>
                {
                    [6,7,8,9,10].map((e)=>{
                        return <Link to='#'> <Rank i={e}></Rank></Link>;
                    })
                }
            </div>
        </div>
    </div>
}

export default Ranker