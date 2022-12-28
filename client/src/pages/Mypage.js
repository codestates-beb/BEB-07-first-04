import React from 'react';
import BackgroundImg from '../components/MyPage/backgroundimg';
import ProfileImg from '../components/MyPage/profileImg';
import Item from '../components/MyPage/item';
import UserInfo from '../components/MyPage/userInfo';
import MenuBar from '../components/MyPage/menubar';

//css
import './MyPage.css';

const Mypage = () => {
  const username = 'Unnamed';
  const walletAddress = '0xCD0510aEcD00BdD36ac9272f1a905bf775753355';
  const backgroundImgUrl =
    'https://cdn.discordapp.com/attachments/1056736677932048424/1056736700921032734/image.png';
  const profileImg =
    'https://cdn.discordapp.com/attachments/1056736677932048424/1056738030439899176/image.png';
  const items = [
    {
      img: 'https://i.seadn.io/gae/9W1YRF-lCsRkgx0Dzdq-QW2wuKd_fTniehvW6mJRXFAhb7_4GivT7fzf2D60x6P0Dxtha93o1mE8xi0C-h5etGfvaq4VPxaALAR1cKM?auto=format&w=750',
      name: 'FirstNFT',
      collection: 'Minchobing',
    },
    {
      img: 'https://i.seadn.io/gae/9W1YRF-lCsRkgx0Dzdq-QW2wuKd_fTniehvW6mJRXFAhb7_4GivT7fzf2D60x6P0Dxtha93o1mE8xi0C-h5etGfvaq4VPxaALAR1cKM?auto=format&w=750',
      name: 'SecondNFT',
      collection: 'HeHe',
    },
  ];
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
        {items.map((e) => (
          <Item
            className={`item${items.indexOf(e)}`}
            img={e.img}
            name={e.name}
            collection={e.collection}
          />
        ))}
      </div>
    </div>
  );
};

export default Mypage;
