import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Donate from './components/Donate';
import MyCarousel from "./components/Carousel";
import WhyGive from "./components/WhyGive";
import StatsSection from "./components/StatsSection";
import IndiaDonate  from './components/IndiaDonate';
import { FaqThree } from './components/Testimonials';
import { Footer } from './components/Footer';
import Helo from './components/Card';
import Card1 from './components/Card1';
import Card2 from './components/Card2';
import  OtherCountriesDonate  from './components/OtherCountriesDonate';

function Main() {
  return (
    <div>
      <MyCarousel />
      <WhyGive />
      <hr  className='border-[1.5px] my-24 '/>
      {/* <StatsSection /> */}
      <div className='flex justify-center items-center flex-wrap'>
        <Helo/>
        <Card1/>
        <Card2/>
      </div>
      <FaqThree/>
      <Footer/>
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