import React from 'react';
import './item.css';

const Item = (props) => {
  return (
    <div id="id_div">
      <img src={props.img} id="item_img" alt="item img"></img>
      <p id="item_name">{props.name}</p>
      <p id="item_collection">{props.collection}</p>
    </div>
  );
};

export default Item;
