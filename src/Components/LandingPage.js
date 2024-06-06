import React from 'react'
import landingpageimg from '../img/content-image01.jpg';
import { motion } from 'framer-motion';

function LandingPage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-[#f1f1f1] pt-[149.33px] pb-[128px]'>
      <div className='container mx-auto px-[53.33px]'>
        <div className='textstructure mb-[106px]'>
          {["we create", "eye-opening", "presentations"].map((item, index) => (
            <div className='masker'>
              <div className='w-fit flex items-center'>
              {index === 1 && (
                  <motion.div 
                    initial={{ width: 0 }} 
                    animate={{ width: "9vw" }} 
                    transition={{ duration: 1, ease: [0.86, 0, 0.07, 0.995] }} 
                    className='w-[9vw] h-[5.68vw] relative top-[0.5vw] mr-3.5 rounded overflow-hidden'
                  >
                    <img src={landingpageimg} className='w-full h-full object-cover object-center' />
                  </motion.div>
                )}
                <h1 className='text-[9vw] text-[#212121] flex items-center h-full uppercase leading-[0.75]'>{item}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='border-t-[0.2px] border-[#212121] opacity-0.3' >
        <div className='container mx-auto px-[53.33px] flex justify-between py-6'>
          {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (
            <p className='text-[17px] text-[#212121]'>{item}</p>
          ))}

          <div className='start flex'>
            <button className='btn_landing btn-reuse align-middle flex justify-between '>
              <span className='uppercase align-middle rounded-full border-[1px] border-[#212121] text-[#212121] py-[4.53px] px-[12.8px] mr-[5px] text-[14.93px]'>Start the project</span>
              <div className='btn_landing_div btn_reuse_div border-[1px] rounded-full border-[#212121] w-[33px] h-[33px]'>
                <span className='btn_landing_div_span btn_reuse_div_span'>
                  <i className="fa-solid fa-arrow-up fa-rotate-by" style={{ color: '#000', '--fa-rotate-angle': '45deg' }}></i>
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage