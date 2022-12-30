import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import dummyData from "../dummyData";
import Navtap from "../Navtap";
import Rank from "./Rank";
import './Ranker.css'

const Ranker = () => {
    const [category,setCategory] = useState(0);
    const categoryWord = ['Trending','Top'];
    const nftData = dummyData.filter(e=>e.category===categoryWord[category]);
    console.log(nftData)
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
                    nftData.map((e,i)=>{
                        if(i<5) return <Link to={'/collection/' + e.collectionName.replace(/ /gi,'-')}> <Rank i={i+1} imgUrl={e.collectionImgUrl} collectionTitle={e.collectionName}></Rank></Link>;
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
                    nftData.map((e,i)=>{
                        if(i>=5) return <Link to={'/collection/' + e.collectionName.replace(/ /gi,'-')}> <Rank i={i+1} imgUrl={e.collectionImgUrl} collectionTitle={e.collectionName}></Rank></Link>;
                    })
                }
            </div>
        </div>
    </div>
}

export default Ranker