import React from 'react';
import './userInfo.css';

const UserInfo = (props) => {
  return (
    <div>
      <p id="username">{props.username}</p>
      <p id="walletAddress">{props.walletAddress}</p>
    </div>
  );
};

export default UserInfo;
