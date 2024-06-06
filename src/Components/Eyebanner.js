import React, { useEffect, useState } from 'react';
import bgimg from '../img/bg-img.jpg';

function Eyebanner() {

  const backgroundImageStyle = {
    backgroundImage: `url(${bgimg})`
  };

  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle-180);
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); // Empty dependency array to run the effect only once when the component mounts

  return (
    <div className='eye w-full h-screen overflow-hidden'>
      <div data-scroll data-scroll-speed="-.7" className='relative w-full h-full bg-cover bg-center' style={backgroundImageStyle}>
        <div className='absolute top-1/2 left-1/2 justify-center flex gap-10 -translate-x-1/2 -translate-y-1/2'>
          <div className='w-[15vw] h-[15vw] rounded-full flex items-center justify-center bg-[#fff]'>
            <div className='w-2/3 h-2/3 rounded-full relative bg-zinc-900'>
              <div className='line absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-10' style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}>
                <div className='w-5 h-5 rounded-full bg-[#fff]'></div>
              </div>
            </div>
          </div>
          <div className='w-[15vw] h-[15vw] rounded-full flex items-center justify-center bg-[#fff]'>
            <div className='w-2/3 h-2/3 rounded-full relative bg-zinc-900'>
              <div className='line absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-10' style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}>
                <div className='w-5 h-5 rounded-full bg-[#fff]'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Eyebanner;
