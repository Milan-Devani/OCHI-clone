import React from 'react'
import { motion } from 'framer-motion'

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-20 bg-[#004d43] rounded-t-3xl'>
      <div className='text text-[#fff] border-t-[1px] border-b-[1px] border-[#e7e7e7] flex whitespace-nowrap overflow-hidden items-center'>
      <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 8 }} className='in uppercase text-[28.476vw] leading-[0.6] mb-[3.61vw] pr-20'>We are Ochi</motion.h1>
      <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 8 }} className='in uppercase text-[28.476vw] leading-[0.6] mb-[3.61vw] pr-20'>We are Ochi</motion.h1>
      <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 8 }} className='in uppercase text-[28.476vw] leading-[0.6] mb-[3.61vw] pr-20'>We are Ochi</motion.h1>
      </div>
    </div>
  )
}

export default Marquee
