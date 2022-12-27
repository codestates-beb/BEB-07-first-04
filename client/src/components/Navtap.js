import React, { useState } from "react";
import Navtapitem from "./Navtapitem";
import './Navtap.css'


const Navtap = () => {
    const [selectedIndex,setSelectedIndex] = useState(0);

    return  (
        <nav className="navtap-nav">
            {
                ['Trending','Top'].map((e,i)=>{
                    return <div className="navtap-nav-tap-wrapper" onClick={()=>{setSelectedIndex(i)}}><Navtapitem title={e} isSelected={selectedIndex===i}></Navtapitem></div>
                })
            }
        </nav>
        
)}

export default Navtap;
