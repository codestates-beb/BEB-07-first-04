import React from 'react';
// import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import './connectWallet.css';
function ConnectWallet() {
  const [account, setAccount] = useState('');
  const [isConnected, setConnected] = useState(false);

  const connectWallet = async () => {
    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts',
    });

    if (isConnected) setAccount('');
    else setAccount(accounts[0]);
    setConnected(!isConnected);
  };

  return (
    <div className="connectWallt">
      <button
        className="metaConnect"
        onClick={() => {
          connectWallet();
        }}
      >
        {isConnected ? 'Disconnect' : 'Connect MetaMask'}
      </button>
      <div className="userInfo">주소:{account}</div>
    </div>
  );
}

export default ConnectWallet;
