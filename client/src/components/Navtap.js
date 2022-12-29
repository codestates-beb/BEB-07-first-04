import React, { useState } from "react";
import Navtapitem from "./Navtapitem";
import './Navtap.css'


const Navtap = ({category,setCategory}) => {
    return  (
        <nav className="navtap-nav">
            {
                ['Trending','Top'].map((e,i)=>{
                    return <div className="navtap-nav-tap-wrapper" onClick={()=>{setCategory(i)}}><Navtapitem title={e} isSelected={category===i}></Navtapitem></div>
                })
            }
        </nav>
        
)}

export default Navtap;
