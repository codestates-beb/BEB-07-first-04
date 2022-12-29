import React from "react";
import { Link } from "react-router-dom";
import Mainslider from "../components/main/Mainslider";
import Nftsmallcard from "../components/main/Nftsmallcard";
import Ranker from "../components/main/Ranker";
import Slider from "../components/main/Slider";
import './Main.css'

const Main = () => {


    return <div className="Main">
        <Mainslider></Mainslider>
        <Ranker></Ranker>
        <h2 className="main-collection-subtitle">Notable Collections</h2>
        <Slider>
            {
                [...Array(14)].map((_)=>{
                    return <Link to='/collection'><Nftsmallcard imgUrl='https://i.seadn.io/s/production/b4d40f24-3508-4e9c-aced-910a38eb20de.png?w=500&auto=format' title='Cartoon pets world'></Nftsmallcard></Link>
                })
            }
        </Slider>
        <h2 className="main-collection-subtitle">Top collector buys today</h2>
        <Slider>
            {
                [...Array(14)].map((_)=>{
                    return <Link to='/collection'><Nftsmallcard imgUrl='https://i.seadn.io/gcs/files/f7f2eef477405738bb0a69b48c039875.png?w=500&auto=format' title='Quirkies Originals'></Nftsmallcard></Link>
                })
            }
        </Slider>


    </div>
}


export default Main