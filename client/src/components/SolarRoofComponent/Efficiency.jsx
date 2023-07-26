import React from 'react'
import { Link } from 'react-router-dom'
import SolarProductionImg from '../../images/solar-production.jpeg'
const Efficiency = () => {
    return (
        <div className='h-screen w-full'>
            <div>
                <img src={SolarProductionImg} alt="solar roof image"
                    style={{
                        left: '0',
                        objectFit: 'cover',
                    }}
                    className='h-[500px] lg:h-[570px] w-full xl:hidden' />
            </div>
            <div className='flex flex-col px-4 pt-4 xl:hidden'>
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
            {/* extra large Devices */}
            <div className='hidden xl:flex'>
                <div className='hidden xl:flex xl:flex-col xl:space-x-20 w-[30%] xl:pt-[45px] xl:px-[25px]'>
                    <div className='hidden xl:flex xl:flex-col items-start xl:h-[95%]'>
                        <p className='text-[17px] text-main'>Efficiency</p>
                        <p className='text-[22px] text-main xl:text-[28px]'>Maximum Solar <br></br>Production</p>
                        <p className='text-[14px] text-primary mt-3'>Generate the most energy possible, even on roofs with complicated angles and intermittent sunlight. Glass solar tiles and architectural-grade steel tiles, vent covers and ridge caps come together to form a roof that is both durable and powerful. With Tesla Solar Inverter, your fully integrated system is safe, reliable and outage ready. And built-in connectivity ensures Tesla Solar Inverter continues to improve with each over-the-air software update.</p>
                        <div className='mt-auto flex flex-col items-start space-y-5 w-full'>
                            <Link to='/'>
                                <button className='border-[3px] rounded border-black w-[250px] h-10 text-[14px] text-main font-bold'>
                                    Order Now
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='hidden xl:flex xl:w-[85%]'>
                    <img src={SolarProductionImg} alt="solar roof image"
                        style={{
                            // Set a larger height for small screens to zoom in
                            objectFit: 'cover', // To maintain aspect ratio and fill the container
                        }}
                        className=' w-full h-screen' />
                </div>
            </div>
        </div>
    )
}

export default Efficiency
