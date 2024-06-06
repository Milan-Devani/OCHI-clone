import React from 'react'
import homeimg from '../img/Homepage-Photo-663x469.jpg';
import Btn from './Btn';

function About() {
    const btn_name = "read more"
    return (
        <div className='w-full pt-20 pb-14 bg-[#cdea68] rounded-t-3xl'>
            <div className='container mx-auto px-[53.33px]'>
                <div className='mb-[64px]'>
                    <p className='text-[3.61vw] leading-none float-laft'>
                        Ochi is a strategic partner for fast-grow­ing tech businesses that need to <span>raise funds</span>, <span>sell prod­ucts, ex­plain com­plex ideas</span>, and <span>hire great peo­ple.</span>
                    </p>
                </div>
            </div>
            <div className='border-t-2 border-[#99ad53] pt-5'>
                <div className='container mx-auto px-[53.33px] '>
                    <div className='row flex'>
                    <div className='w-1/2'>
                            <h3 className='font-difrent text-6xl'>Our approach:</h3>
                            <button className='about-btn-main flex items-center mt-8'>
                                <Btn btn_name={btn_name} size="large" />
                            </button>
                        </div>
                        <div className='w-1/2'>
                            <div className='about-hover-main img h-[71vh] rounded-3xl overflow-hidden'>
                                <img src={homeimg} className='about-hover-main-img w-full h-full object-cover object-center' alt="Homepage" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About