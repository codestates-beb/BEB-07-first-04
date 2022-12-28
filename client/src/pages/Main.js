import React from "react";
import Header from "../components/Header";
import Ranker from "../components/main/Ranker";
import Slider from "../components/main/Slider";

const Main = () => {
    return <div className="Main">
        <Slider></Slider>
        <Ranker></Ranker>
    </div>
}


export default Main