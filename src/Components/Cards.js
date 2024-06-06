import React from 'react'
import cardLogo_1 from '../img/card-log-1.svg'
import cardLogo_2 from '../img/card-logo.svg'
import cardLogo_3 from '../img/card-logo-3.png'


function Cards() {
    return (
        <div className='w-full h-full bg-[#f1f1f1]'>
            <div className='container mx-auto px-[53.33px]'>
                <div className='flex gap-5'>
                    <div className='cardcontainer h-[57.6485vh] w-1/2 '>
                        <div className='w-full h-full rounded-xl bg-[#004d43]'>
                            <div className='relative h-full flex items-center justify-center'>
                                <img src={cardLogo_1} alt="" />
                                <button className='icon-card-1 icon-card-enter-1 absolute left-5 bottom-5 border-[#cdea68] border uppercase rounded-full px-[12px] py-[8px] text-[#cdea68] bg-tran'>
                                    <span className='font-difrent i uppercase text-[14.99px] leading-none ' >@2020-2022</span>
                                </button>
                                {/* <div className='absolute left-5 bottom-5 border-[#cdea68] border uppercase rounded-full px-[12px] py-[8px] text-[#cdea68] bg-tran'><span className='font-difrent'>@2020-2022</span></div> */}
                            </div>
                        </div>
                    </div>
                    <div className='cardcontainer h-[57.6485vh] flex gap-3 w-1/2 '>
                        <div className='w-1/2 h-full rounded-xl bg-[#212121]'>
                            <div className='relative h-full flex items-center justify-center'>
                                <img src={cardLogo_2} alt="" />
                                {/* <div className='absolute left-5 bottom-5 border-[#f1f1f1] border uppercase rounded-full px-[12px] py-[8px] text-[#f1f1f1] bg-tran'><span className='font-difrent'>Rating 5.0 on Clutch</span></div> */}
                                <button className='icon-card-2 icon-card-enter-2 absolute left-5 bottom-5 border-[#f1f1f1] border uppercase rounded-full px-[12px] py-[8px] text-[#f1f1f1] bg-tran'>
                                    <span className='font-difrent i uppercase text-[14.99px] leading-none'>Rating 5.0 on Clutch</span>
                                </button>
                            </div>
                        </div>

                        <div className='w-1/2 h-full rounded-xl bg-[#212121]'>
                            <div className='relative h-full flex items-center justify-center'>
                                <img className='w-[102px] h-[104px]' src={cardLogo_3} alt="" />
                                {/* <div className='absolute left-5 bottom-5 border-[#f1f1f1] border rounded-full px-[12px] py-[8px] text-[#f1f1f1] bg-tran'><span className='font-difrent'>Business Bootcamp Alumni</span></div> */}
                                <button className='icon-card-2 icon-card-enter-2 absolute left-5 bottom-5 border-[#f1f1f1] border rounded-full px-[12px] py-[8px] text-[#f1f1f1] bg-tran'>
                                    <span className='font-difrent i uppercase text-[14.99px] leading-none'>Business Bootcamp Alumni</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards