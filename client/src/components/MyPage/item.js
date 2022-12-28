import React from 'react';
import './item.css';

const Item = (props) => {
  const onClickHandler = () => {
    window.location.replace('http://localhost:3000');
  };
  return (
    <div className={props.className} id="id_div" onClick={onClickHandler}>
      <img src={props.img} id="item_img" alt="item img"></img>
      <p id="item_name">{props.name}</p>
      <p id="item_collection">{props.collection}</p>
    </div>
  );
};

export default Item;
