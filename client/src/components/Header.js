import React from 'react';
import {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import {AiOutlineSearch, AiOutlineWallet} from 'react-icons/ai';
import {CgProfile} from 'react-icons/cg';
import "./Header.css"
import Web3 from 'web3';

function Header () {
  const [walletAddress, setWalletAddress] = useState("");
	const [web3, setWeb3] = useState();

  
  useEffect(()=> {
    getCurrentWalletConnected();
  });


    useEffect(() => {
        if (typeof window.ethereum !== "undefined") { 
            try {
                const web = new Web3(window.ethereum); 
            } catch (err) {
                console.log(err);
            }
        }
    }, []);

  const isLogin = async()  => {
    const accounts = await window.ethereum.request({
      method: "eth_accounts",
    });
    if(!accounts[0]) {
      document.location.href = "/"
      alert('Please Connect Wallet')
    } else {
      document.location.href = "/mypage"
    }
  } 

  const connectWallet = async () => {
    try {
      if (window.ethereum !== "undefined" && typeof window.ethereum !== "undefined") {
        const accounts = await window.ethereum.request({method: "eth_requestAccounts",});
        setWalletAddress(accounts[0]);
      } else {
        alert("Please install Metamask.");
      }
    } catch (error) {
      console.error(error); //
    }
  };

  const getCurrentWalletConnected = async () => {
    try {
      if (window.ethereum !== "undefined" && typeof window.ethereum !== "undefined") {
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
        if(accounts.length>0){
          setWalletAddress(accounts[0]);
        }
        
      } else {
        alert("Connect to MetaMask using the Wallet button");
      }
    } catch (error) {
      console.error(error); //
    }
  };



  return(
  
    <div className="headerMain">
      <Link to="/">    
        <div className="logoContainer">
          <img src="https://cdn.worldvectorlogo.com/logos/opensea.svg" 
          width="40"
          height="40"
          alt=" "  />
        <div className="logoText">OpenC</div>
        </div>
        </Link>

        <div className="searchBar">
          <div className="searchIcon">
            <AiOutlineSearch />
          </div>
          <input 
          className="searchInput" 
          placeholder='Search items, Collections, and Accounts'></input>
        </div>

      <div className="headerItems">
        <Link to="explore">
          <div className="headerItem">Explore</div>
        </Link>
      
        <Link to="collection">
          <div className="headerItem">Collection</div>
        </Link>
      </div>

      <div className="profileIcon">
      <Link to="mypage">
      
        <CgProfile onClick={isLogin}/> 
        </Link>
      </div>
        <div className="walletIcon">
          <AiOutlineWallet onClick={()=>connectWallet()}/>
        </div>
        <div className="isConnectedContainer">
          {walletAddress.length>0 ? `Connected :` `${walletAddress.substring(0,6)}...${walletAddress.substring(38)}` : "Not Connected"}
        </div>


    </div>

    
)}

export default Header;