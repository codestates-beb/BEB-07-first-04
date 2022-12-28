import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navtap from "../Navtap";
import Rank from "./Rank";
import './Ranker.css'

const Ranker = () => {
    const [category,setCategory] = useState(0);


    // 필요 data fetch 
    // useEffect(()=>{
    //     fetch
    // },[])    

    return <div className="main-ranker">
        <Navtap category={category} setCategory={setCategory}></Navtap>
        <div className="main-ranker-content-container">
            <div className="main-ranker-content-wrapper">
                <div className="main-ranker-content-title"><div>COLLECTION</div><div>VOLUME</div></div>
                {
                    //받아온 데이터 뿌려주기
                    // data.map((e,i)=>{
                    //  return <Link to='/collection/e.collectionTitle'> <Rank i={i+1}></Rank></Link>;
                    //})
                    [1,2,3,4,5].map((e)=>{
                        return <Link to='#'> <Rank i={e}></Rank></Link>;
                    })
                }
            </div>
            <div className="main-ranker-content-wrapper">
                <div className="main-ranker-content-title"><div>COLLECTION</div><div>VOLUME</div></div>
                {
                    //받아온 데이터 뿌려주기
                    // data.map((e,i)=>{
                    //  return <Link to='/collection/e.collectionTitle'> <Rank i={i+1}></Rank></Link>;
                    //})
                    [6,7,8,9,10].map((e)=>{
                        return <Link to='#'> <Rank i={e}></Rank></Link>;
                    })
                }
            </div>
        </div>
    </div>
}

export default Ranker