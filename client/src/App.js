import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import Collection from './pages/Collection';
import Mypage from './pages/Mypage';
import NFT_Making from './pages/NFT_Making';
import NFT_Transaction from './pages/NFT_Transaction';


function App() {
  return (
    <div className="App">
      APP입니다.
      <Routes>
        <Route path='/' element={<Main></Main>}></Route>
        <Route path='/collection' element={<Collection></Collection>}></Route>
        <Route path='/explore' element={<Collection></Collection>}></Route>
        <Route path='/mypage' element={<Mypage></Mypage>}></Route>
        <Route path='/NFT_Making' element={<NFT_Making />} />
        <Route path='/NFT_Transaction' element={<NFT_Transaction />} />
      </Routes>
    </div>
  );
}

export default App;
