import React, { useState } from "react";
import Exploreitems from "../components/explore/Exploreitems";
import Header from "../components/Header";
import Navtap from "../components/Navtap";
import './Explore.css'

const Explore = () => {
    const [category,setCategory] = useState(0);

    return <div className="Explore">
        <h1>Explore collections</h1>
        <Navtap category={category} setCategory={setCategory}></Navtap>
        <Exploreitems category={category}></Exploreitems>
    </div>
}


export default Explore;