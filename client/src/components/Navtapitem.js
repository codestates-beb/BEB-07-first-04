import React from 'react';
import './Navtapitem.css'

const Navtapitem = ({title,isSelected}) => {
    return (
        <h2 className={isSelected?'navtap-nav-tap navtap-nav-tap-selected':'navtap-nav-tap'}>
            {title}
            {isSelected&&<div className='navtap-nav-tap-selected-underline'></div>}
        </h2>

    );
};

export default Navtapitem;