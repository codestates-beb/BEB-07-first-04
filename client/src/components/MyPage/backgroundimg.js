import React from 'react';
import './backgroundimg.css';

const BackgroundImg = (props) => {
  return <img src={props.bgimg} id="backgroundimg" alt="background Img"></img>;
};

export default BackgroundImg;
