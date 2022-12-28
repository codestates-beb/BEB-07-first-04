import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import Collection from './pages/Collection';
import Explore from './pages/Explore';
import Mypage from './pages/Mypage';
import Header from './components/Header'
import Footer from './components/Footer'
import NFT_Making from './pages/NFT_Making';
import NFT_Transaction from './pages/NFT_Transaction';

import ConnectWallet from './pages/connectWallet';
import { useState } from 'react';

function App() {
  const [walletAddress, setWalletAddress] = useState('');
  const [isConnected, setConnected] = useState(false);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Main></Main>}></Route>
        <Route path='/collection' element={<Collection></Collection>}></Route>
        
        <Route path='/explore' element={<Explore></Explore>}></Route>
        <Route path='/mypage' element={<Mypage></Mypage>}></Route>
        <Route path='/NFT_Making' element={<NFT_Making />} />
        <Route path='/NFT_Transaction' element={<NFT_Transaction />} />
        <Route
          path="/connectwallet"
          element={
            <ConnectWallet
              setWalletAddress={setWalletAddress}
              walletAddress={walletAddress}
              isConnected={isConnected}
              setConnected={setConnected}
            />
          }
        ></Route>
        {/* <Route path='/NFT_Making' element={<NFT_Making />} />
        <Route path='/NFT_Transaction' element={<NFT_Transaction />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
