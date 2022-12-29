import React, { useEffect } from 'react';
import BackgroundImg from '../components/MyPage/backgroundimg';
import ProfileImg from '../components/MyPage/profileImg';
import Item from '../components/MyPage/item';
import UserInfo from '../components/MyPage/userInfo';
import MenuBar from '../components/MyPage/menubar';
import { useState } from 'react';
import axios from 'axios';

//css
import './MyPage.css';

const Mypage = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const [userInfo, setUserInfo] = useState();
  const [items, setItems] = useState([]);

  const apiUrl = 'http://localhost:8080/api/user/get';
  const getItemApiUrl = 'http://localhost:8080/api/items/getbyowneraddr';
  const getInfo = async () => {
    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts',
    });
    setWalletAddress(accounts[0]);
    const apiRes = await axios.put(apiUrl, { walletAddress: accounts[0] });
    setUserInfo(apiRes.data);
    const getItemsRes = await axios.put(getItemApiUrl, {
      walletAddress: accounts[0],
    });
    setItems(getItemsRes.data.content);
  };

  useEffect(() => {
    getInfo();
  }, []);

  let username = '';
  let backgroundImgUrl = '';
  let profileImg = '';
  if (userInfo) {
    username = userInfo.content.username;
    backgroundImgUrl = userInfo.content.backgroundPicUrl;
    profileImg = userInfo.content.profilePicUrl;
  }

  // const items = [
  //   {
  //     img: 'https://i.seadn.io/gae/9W1YRF-lCsRkgx0Dzdq-QW2wuKd_fTniehvW6mJRXFAhb7_4GivT7fzf2D60x6P0Dxtha93o1mE8xi0C-h5etGfvaq4VPxaALAR1cKM?auto=format&w=750',
  //     name: 'FirstNFT',
  //     collection: 'Minchobing',
  //   },
  //   {
  //     img: 'https://i.seadn.io/gae/9W1YRF-lCsRkgx0Dzdq-QW2wuKd_fTniehvW6mJRXFAhb7_4GivT7fzf2D60x6P0Dxtha93o1mE8xi0C-h5etGfvaq4VPxaALAR1cKM?auto=format&w=750',
  //     name: 'SecondNFT',
  //     collection: 'HeHe',
  //   },
  // ];

  return (
    <div id="mypage">
      <div id="backgroundimg">
        <BackgroundImg bgimg={backgroundImgUrl} />
      </div>
      <div id="userprofile">
        <ProfileImg profImg={profileImg} />
        <UserInfo username={username} walletAddress={walletAddress} />
      </div>
      <div id="menubar">
        <MenuBar />
      </div>
      <div id="items">
        {items === 'No items' ? (
          <div>No Items</div>
        ) : (
          items.map((e) => (
            <Item
              className={`item${items.indexOf(e)}`}
              metadata={e.metaData}
              contractAddress={e.collectionAddress}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Mypage;
