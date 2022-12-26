import React from 'react';
import './profileImg.css';

const ProfileImg = (props) => {
  return <img src={props.profImg} id="profileimg" alt="profile"></img>;
};

export default ProfileImg;
