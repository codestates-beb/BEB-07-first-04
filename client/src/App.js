import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import Collection from './pages/Collection';
import Mypage from './pages/Mypage';
import ConnectWallet from './pages/connectWallet';
import { useState } from 'react';

function App() {
  const [walletAddress, setWalletAddress] = useState('');
  const [isConnected, setConnected] = useState(false);
  return (
    <div className="App">
      여기에 헤더가 들어가나요
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
        <Route path="/collection" element={<Collection></Collection>}></Route>
        <Route path="/explore" element={<Collection></Collection>}></Route>
        <Route path="/mypage" element={<Mypage></Mypage>}></Route>
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
    </div>
  );
}

export default App;
