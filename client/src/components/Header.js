import React from 'react';
import {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import {AiOutlineSearch, AiOutlineWallet} from 'react-icons/ai';
import {CgProfile} from 'react-icons/cg';
import "./Header.css"
import Web3 from 'web3';

function Header () {

  const [account, setAccount] = useState("");
	const [web3, setWeb3] = useState();
   
    useEffect(() => {
        if (typeof window.ethereum !== "undefined") { 
            try {
                const web = new Web3(window.ethereum); 
            } catch (err) {
                console.log(err);
            }
        }
    }, []);

  const connectWallet = async () => {
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(accounts[0]);
      } else {
        alert("Please install Metamask.");
      }
    } catch (error) {
      console.error(error); //
    }
  };

  const isConnected = async () => {
    try {

      if (window.ethereum) {
 
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(accounts[0]);

      } else {
 
        alert("Please install Metamask.");
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
        <CgProfile /> 
        </Link>
      </div>
        <div className="walletIcon">
          <AiOutlineWallet onClick={()=>connectWallet()}/>
        </div>

{/* 마이페이지 -> 지갑 연결 먼저 진행할 수 있도록 코드 구현 필요 */}


    </div>
)}

export default Header;