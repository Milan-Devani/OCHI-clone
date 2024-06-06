import React, { useState } from 'react';
import bg_fyde from '../img/bg-Fyde.png';
import bg_vise from '../img/bg-vise.jpg';
import bg_Trawa from '../img/bg-Trawa.jpg';
import bg_Premium_Blend from '../img/bg-Premium Blend.png';
import Btn from './Btn';
import { motion } from 'framer-motion';
import { Power4 } from 'gsap/all';

// absolute right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] 

function Featured() {
  const [isHovering, setHovering] = useState(false);
  const [isHovering2, setHovering2] = useState(false);
  const [isHovering3, setHovering3] = useState(false);
  const [isHovering4, setHovering4] = useState(false);


  const btn_name = "View all case studies";

  return (
    <div className='w-full pt-24 pb-40'>
      <div className='container mx-auto px-[53.33px]'>
        <h3 className='pb-0.5 mb-10 font-difrent text-6xl'>Featured projects</h3>
      </div>
      <div className='border-t-2 border-[#b2b2b2]'>
        <div className='container mx-auto px-[53.33px]'>
          <div className='row flex pt-14 gap-5'>
            <div
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
              className='card-container w-1/2 relative'
            >
              <h1 className='absolute flex overflow-hidden left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-[138.6px] uppercase text-[#cdea68]'>
                {"FYDE".split("").map((item, index) => (
                  <motion.span
                    key={index}
                    initial={{ y: "100%" }}
                    animate={isHovering ? ({ y: "0" }) : ({ y: "100%" })}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * .06,
                    }}
                    className='inline-block'
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <div className='set-text flex items-center'>
                <span className='w-3 h-3 rounded-full bg-[#212121] mr-[8px]'></span>
                <p className='uppercase text-[0.95vw]'>Fyde</p>
              </div>
              <div className='box-img-div box-img-div-1 bg-[#cccccd] overflow-hidden w-[46vw] h-[83.5vh] rounded-xl my-4'>
                <img src={bg_fyde} className='box-img w-full h-full object-cover object-center' alt="Fyde" />
              </div>
              <div className='flex gap-3'>
                {["audit", "Copywriting", "Sales Deck", "Slides Design"].map((item, index) => (
                  <button key={index} className='icon icon-enter py-[8px] px-[15px]'>
                    <span className='font-difrent i uppercase text-[14.99px] leading-none'>{item}</span>
                  </button>
                ))}
              </div>
            </div>
            <div
              onMouseEnter={() => setHovering2(true)}
              onMouseLeave={() => setHovering2(false)}
              className='card-container2 w-1/2 relative'
            >
              <h1 className='absolute flex overflow-hidden right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-[138.6px] uppercase text-[#cdea68]'>
                {"VISE".split("").map((item, index) => (
                  <motion.span
                    key={index}
                    initial={{ y: "100%" }}
                    animate={isHovering2 ? ({ y: "0" }) : ({ y: "100%" })}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * .06,
                    }}
                    className='inline-block'
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <div className='set-text flex items-center'>
                <span className='w-3 h-3 rounded-full bg-[#212121] mr-[8px]'></span>
                <p className='uppercase text-[0.95vw]'>vise</p>
              </div>
              <div className='box-img-div box-img-div-1 bg-[#cccccd] overflow-hidden w-[46vw] h-[83.5vh] rounded-xl my-4'>
                <img src={bg_vise} className='box-img w-full h-full object-cover object-center' alt="Vise" />
              </div>
              <div className='flex gap-3 mt-4'>
                {["Agency", "Company Presentation"].map((item, index) => (
                  <button key={index} className='icon icon-enter py-[8px] px-[15px]'>
                    <span className='font-difrent i uppercase text-[14.99px] leading-none'>{item}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className='row flex pt-14 gap-5'>
          <div
              onMouseEnter={() => setHovering3(true)}
              onMouseLeave={() => setHovering3(false)}
              className='card-container w-1/2 relative'
            >
              <h1 className='absolute flex overflow-hidden left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-[138.6px] uppercase text-[#cdea68]'>
                {"TRAWA".split("").map((item, index) => (
                  <motion.span
                    key={index}
                    initial={{ y: "100%" }}
                    animate={isHovering3 ? ({ y: "0" }) : ({ y: "100%" })}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * .06,
                    }}
                    className='inline-block'
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <div className='set-text flex items-center'>
                <span className='w-3 h-3 rounded-full bg-[#212121] mr-[8px]'></span>
                <p className='uppercase text-[0.95vw]'>Fyde</p>
              </div>
              <div className='box-img-div box-img-div-1 bg-[#cccccd] overflow-hidden w-[46vw] h-[83.5vh] rounded-xl my-4'>
                <img src={bg_fyde} className='box-img w-full h-full object-cover object-center' alt="Fyde" />
              </div>
              <div className='flex gap-3'>
                {["audit", "Copywriting", "Sales Deck", "Slides Design"].map((item, index) => (
                  <button key={index} className='icon icon-enter py-[8px] px-[15px]'>
                    <span className='font-difrent i uppercase text-[14.99px] leading-none'>{item}</span>
                  </button>
                ))}
              </div>
            </div>
            <div
              onMouseEnter={() => setHovering4(true)}
              onMouseLeave={() => setHovering4(false)}
              className='card-container4 w-1/2 relative'
            >
              <h1 className='absolute flex overflow-hidden right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-[138.6px] uppercase text-[#cdea68]'>
                {"Premium Blend".split("").map((item, index) => (
                  <motion.span
                    key={index}
                    initial={{ y: "100%" }}
                    animate={isHovering4 ? ({ y: "0" }) : ({ y: "100%" })}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * .06,
                    }}
                    className='inline-block'
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <div className='set-text flex items-center'>
                <span className='w-3 h-3 rounded-full bg-[#212121] mr-[8px]'></span>
                <p className='uppercase text-[0.95vw]'>vise</p>
              </div>
              <div className='box-img-div box-img-div-1 bg-[#cccccd] overflow-hidden w-[46vw] h-[83.5vh] rounded-xl my-4'>
                <img src={bg_vise} className='box-img w-full h-full object-cover object-center' alt="Vise" />
              </div>
              <div className='flex gap-3 mt-4'>
                {["Agency", "Company Presentation"].map((item, index) => (
                  <button key={index} className='icon icon-enter py-[8px] px-[15px]'>
                    <span className='font-difrent i uppercase text-[14.99px] leading-none'>{item}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className='flex justify-center mt-[75px]'>
            <Btn btn_name={btn_name} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
