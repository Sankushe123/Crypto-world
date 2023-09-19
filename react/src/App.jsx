import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Coins from './Components/Coins/Coins';
import CoinsDetails from './Components/Coins/CoinsDetails';
import Exchanges from './Components/Exchange/Exchanges';
function App() {
  return(
   <Router>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/coins" element={<Coins/>} />
        <Route path="/coin/:id" element={<CoinsDetails/>} />
        <Route path="/exchanges" element={<Exchanges/>} />
      </Routes>
   </Router>
  )
}

export default App;