import './App.css';
// import './Outsite.css'
import React from 'react';
import Navbar from './Components/Navbar';
import LandingPage from './Components/LandingPage';
import Marquee from './Components/Marquee';
import About from './Components/About';
import Eyebanner from './Components/Eyebanner';
import Featured from './Components/Featured';
import Cards from './Components/Cards';
import Footer from './Components/Footer';
import Btn from './Components/Btn';
import LocomotiveScroll from 'locomotive-scroll';


function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full min-h-screen text-[#212121] bg-[#f1f1f1]'>
      <Navbar />
      <LandingPage />
      <Marquee/>
      <About/>
      <Eyebanner/>
      <Featured/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App;
