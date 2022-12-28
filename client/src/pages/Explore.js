import React from "react";
import Exploreitems from "../components/explore/Exploreitems";
import Header from "../components/Header";
import Navtap from "../components/Navtap";
import './Explore.css'

const Explore = () => {
    return <div className="Explore">
        <h1>Explore collections</h1>
        <Navtap></Navtap>
        <Exploreitems></Exploreitems>
    </div>
}


export default Explore;