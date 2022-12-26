import React from 'react';
import { useNavigate } from 'react-router-dom';

import './connectWallet.css';
function ConnectWallet(props) {
  const navigate = useNavigate();
  const account = props.walletAddress;
  const setAccount = props.setWalletAddress;
  const isConnected = props.isConnected;
  const setConnected = props.setConnected;

  const connectWallet = async () => {
    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts',
    });

    if (isConnected) setAccount('');
    else setAccount(accounts[0]);
    setConnected(!isConnected);
  };

  return (
    <div className="connectWallet">
      <button
        className="metaConnect"
        onClick={() => {
          connectWallet();
        }}
      >
        {isConnected ? 'Disconnect' : 'Connect MetaMask'}
      </button>
      <div className="userInfo">주소:{account}</div>
      <button className="goBack" onClick={() => navigate(-1)}>
        방금 페이지로 돌아가기
      </button>
    </div>
  );
}

export default ConnectWallet;
