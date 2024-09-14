import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Donate from './components/Donate';
import MyCarousel from "./components/Carousel";
import WhyGive from "./components/WhyGive";
import StatsSection from "./components/StatsSection";
import IndiaDonate  from './components/IndiaDonate';
import  OtherCountriesDonate  from './components/OtherCountriesDonate';

function Main() {
  return (
    <div>
      <MyCarousel />
      <WhyGive />
      <hr  className='border-[1.5px] my-24 '/>
      <StatsSection />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/donate/in/Annual-Gift-Programme" element={<IndiaDonate/>} />
          <Route path="/donate/oc/Annual-Gift-Programme" element={<OtherCountriesDonate/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;