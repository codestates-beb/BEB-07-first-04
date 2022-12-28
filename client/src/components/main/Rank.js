import React from "react";
import './Rank.css'


const Rank = ({i}) => {


    return <div className="main-ranker-rank">
        <div className="main-ranker-rank-left-container">
            <div className="main-ranker-rank-number">
                {i}
            </div>
            <div className="main-ranker-rank-img">
                <img src="https://i.seadn.io/gcs/files/d2051befa1918d9e99191ff2a12ffc69.gif?auto=format&w=384"></img>
            </div>
            <div className="main-ranker-rank-title">
                <h5>ETH GOBBLERS</h5>
                <p>floor: 0.37ETH</p>
            </div>
        </div>
        <div className="main-ranker-rank-right-container">            
            <div className="main-ranker-rank-volume">
                <h5>388ETH</h5>
            </div>
        </div>
    </div>
}

export default Rank;