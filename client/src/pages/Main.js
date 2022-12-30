import React from "react";
import { Link } from "react-router-dom";
import dummyData from "../components/dummyData";
import Mainslider from "../components/main/Mainslider";
import Nftsmallcard from "../components/main/Nftsmallcard";
import Ranker from "../components/main/Ranker";
import Slider from "../components/main/Slider";
import './Main.css'

const Main = () => {
    const nftData1 = dummyData.filter(e=>e.category==='Notable');
    const nftData2 = dummyData.filter(e=>e.category==='BuyToday')

    return <div className="Main">
        <Mainslider></Mainslider>
        <Ranker></Ranker>
        <h2 className="main-collection-subtitle">Notable Collections</h2>
        <Slider>
            {
                nftData1.map((e)=>{
                    return <Link to={'/collection' + e.collectionName.replace(/ /gi,'-')}><Nftsmallcard imgUrl={e.collectionImgUrl} title={e.collectionName}></Nftsmallcard></Link>
                })
            }
        </Slider>
        <h2 className="main-collection-subtitle">Top collector buys today</h2>
        <Slider>
            {
                nftData2.map((e)=>{
                    return <Link to={'/collection' + e.collectionName.replace(/ /gi,'-')}><Nftsmallcard imgUrl={e.collectionImgUrl} title={e.collectionName}></Nftsmallcard></Link>
                })
            }
        </Slider>


    </div>
}


export default Main