import React from 'react'
import SolarLogo from '../../images/solar-panel.jpg'
import { GiSolarPower } from 'react-icons/gi'
import { Link } from 'react-router-dom'
const Landing = () => {
    return (
        <div>
            <div className='h-screen bg-cover bg-center flex flex-col  justify-around' style={{ backgroundImage: `url(${SolarLogo})` }}>
                <div className='relative text-center'>
                    <h1 className='text-4xl font-bold '>Solar Roof</h1>
                </div>
                <div className='flex items-center justify-center relative top-[7.9rem]'>
                    <div className='grid grid-cols-3 lg:grid-cols-4 gap-4'>
                        <div className='flex flex-col items-center text-white h-24'>
                        
                                <GiSolarPower className='text-[38px]' />
                            <p className='text-[12px] font-bold'>Beautiful</p>
                            <p className='text-[12px] font-bold'>Solar</p>
                        </div>
                        <div className='flex flex-col items-center text-white h-24'>
                            <p className='text-[24px] text-white'>25-<span className='text-[20px] text-white '>Year</span></p>
                            <p className='text-[12px] font-bold'>Tile</p>
                            <p className='text-[12px] font-bold'>Waranty</p>
                        </div>
                        <div className='flex flex-col items-center  text-white h-24'>
                            <p className='text-[24px] text-white'>24/7</p>
                            <p className='text-[12px] font-bold'>Outage</p>
                            <p className='text-[12px] font-bold'>Protection</p>
                        </div>
                        <div className='flex justify-center text-white h-24'>
                            <Link>
                                <button className='border-[3px] rounded border-white py-[4px] px-[40px] text-[14px]'>Order Now</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing
