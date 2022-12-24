import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import Collection from './pages/Collection';


function App() {
  return (
    <div className="App">
      APP입니다.
      <Routes>
        <Route path='/' element={<Main></Main>}></Route>
        <Route path='/collection' element={<Collection></Collection>}></Route>
        <Route></Route>
      </Routes>
    </div>
  );
}

export default App;
