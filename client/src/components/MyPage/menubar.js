import React from 'react';
import './menubar.css';
import { Link } from 'react-router-dom';

const MenuBar = () => {
  return (
    <div>
      <button>Collected</button>
      <button>Avtivity</button>
      <Link to='../NFT_Making'><button>Minting</button></Link>
    </div>
  );
};

export default MenuBar;
