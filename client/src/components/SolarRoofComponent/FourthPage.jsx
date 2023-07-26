import React from 'react'
import Video from './video/solar-roof-video.mp4'
import { Link } from 'react-router-dom'
const FourthPage = () => {
    return (
        // Mobile devices
        <div className='h-screen w-full '>
            <div>
                <video src={Video} preload='auto' autoPlay controls loop alt="solar roof image"
                    style={{
                        left: '0', // Set the left position to center the image horizontally
                        // Set a larger height for small screens to zoom in
                        objectFit: 'cover', // To maintain aspect ratio and fill the container
                    }}
                    className='h-[500px] lg:h-[570px] w-full lg:hidden' />
            </div>
            <div className='flex flex-col px-4 pt-4 lg:hidden'>
                <div>
                    <p className='text-[17px] text-main'>Durability</p>
                    <p className='text-[24px] text-main'>Take on the Elements</p>
                </div>
                <div className='mt-3'>
                    <p className='text-[14px] text-primary'>Solar Roof is comprised of both glass solar tiles and steel roofing tiles. Glass solar tiles produce energy, while architectural-grade steel tiles add longevity and corrosion resistance to your roof. Both are durable, strong and engineered for all-weather protection. With a 25-year warranty, Solar Roof will continue to produce clean energy and protect your home for decades to come.</p>
                </div>
                <div className='mt-6'>
                    <Link to='/'>
                        <button className='border-[3px] rounded border-black w-full h-10 text-[14px] text-main font-bold'>
                            Order Now
                        </button>
                    </Link>
                </div>
            </div>
            {/*Large Devices */}
            <div className='hidden lg:flex'>
                <div className='w-[85%]'>
                    <video src={Video} controls autoPlay alt="Video of the durability of solar roofs"
                        style={{
                            // Set a larger height for small screens to zoom in
                            objectFit: 'cover', // To maintain aspect ratio and fill the container
                        }}
                        className=' w-full h-screen' />
                </div>
                <div className='hidden lg:flex lg:flex-col lg:space-x-20 w-[30%] lg:pt-[45px] lg:px-[25px]'>
                    <div className='hidden lg:flex lg:flex-col items-start lg:h-[95%]'>
                        <p className='text-[17px] text-main'>Durability</p>
                        <p className='text-[22px] text-main xl:text-[28px]'>Take on the Elements</p>
                        <p className='text-[14px] text-primary mt-3'>Solar Roof is comprised of both glass solar tiles and steel roofing tiles. Glass solar tiles produce energy, while architectural-grade steel tiles add longevity and corrosion resistance to your roof. Both are durable, strong and engineered for all-weather protection. With a 25-year warranty, Solar Roof will continue to produce clean energy and protect your home for decades to come.</p>
                        <div className='mt-auto flex flex-col items-start  space-y-5 w-full'>
                            <Link to='/'>
                                <button className='border-[3px] rounded border-black  w-[250px] h-10 text-[14px] text-main font-bold'>
                                    Order Now
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FourthPage
