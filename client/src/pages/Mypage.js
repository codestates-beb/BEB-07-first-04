import React from 'react';
import BackgroundImg from '../components/MyPage/backgroundimg';
import ProfileImg from '../components/MyPage/profileImg';
import Item from '../components/MyPage/item';
import UserInfo from '../components/MyPage/userInfo';

//css
import './MyPage.css';

const Mypage = () => {
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
    <div>
      <div id="backgroundimg">
        <BackgroundImg bgimg={backgroundImgUrl} />
      </div>
      <div>
        <ProfileImg profImg={profileImg} />
      </div>
      <UserInfo />
      <div id="items">
        {items.map((e) => (
          <Item img={e.img} name={e.name} collection={e.collection} />
        ))}
      </div>
    </div>
  );
};

export default Mypage;
