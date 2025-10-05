import { Route, Routes } from 'react-router-dom';
import './App.css';
import Exchange from './components/Exchange';
import CoinDetails from './components/CoinDetails';
import Coins from './Coin';
import './components/Exchange.css'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Exchange/>}/>
      <Route path='/coins' element={<Coins/>}/>
      <Route path='/coins/:id' element={<CoinDetails/>}/>
    </Routes>
    
  );
}

export default App;
