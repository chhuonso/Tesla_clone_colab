import React from 'react'
import ImageThree from '../../images/solor-roof-with-car.jpeg'
import { Link } from 'react-router-dom'
const ThirdPage = () => {
    return (
        <div className='h-screen w-full '>
            <div className=''>
                <img src='https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Solar-Roof-Energy-Desktop-Global' alt="solar roof image"
                    style={{
                        left: '0', // Set the left position to center the image horizontally
                        // Set a larger height for small screens to zoom in
                        objectFit: 'cover', // To maintain aspect ratio and fill the container
                    }}
                    className='h-[500px] lg:h-[570px] w-full lg:hidden' />
            </div>
            <div className='flex flex-col px-4 pt-4 lg:hidden'>
                <div>
                    <p className='text-[17px] text-main'>Energy Storage</p>
                    <p className='text-[24px] text-main'>Protection Against Outages</p>
                </div>
                <div className='mt-3'>
                    <p className='text-[14px] text-primary'>Powerwall is a compact home battery that is bundled with Solar Roof, providing you with 24/7 energy security. It stores the energy you produce with Solar Roof so you can power your home anytime—at night or during an outage.</p>
                </div>
                <div className='mt-6'>
                    <Link to='/'>
                        <button className='border-[3px] rounded border-black w-full h-10 text-[14px] text-main font-bold'>
                            Order Now
                        </button>
                    </Link>
                </div>
                <div className='mt-3'>
                    <Link to='/'>
                        <button className='bg-[#F4F4F4] rounded w-full h-10 text-[14px] text-main font-bold'>
                            Learn More
                        </button>
                    </Link>
                </div>
            </div>
            {/*Large Devices */}
            <div className='hidden lg:flex'>
                <div className='hidden lg:flex lg:flex-col lg:space-x-20 w-[30%] lg:pt-[45px] lg:px-[25px]'>
                    <div className='hidden lg:flex lg:flex-col items-start lg:h-[95%]'>
                        <p className='text-[17px] text-main'>Energy Storage</p>
                        <p className='text-[22px] text-main xl:text-[28px]'>Protection Against<br></br>Outages</p>
                        <p className='text-[14px] text-primary'>Powerwall is a compact home battery that is bundled with Solar Roof, providing you with 24/7 energy security. It stores the energy you produce with Solar Roof so you can power your home anytime—at night or during an outage.</p>
                        <div className='mt-auto flex flex-col items-center justify-center space-y-5 w-full'>
                            <Link to='/'>
                                <button className='border-[3px] rounded border-black  w-[350px]   h-10 text-[14px] text-main font-bold'>
                                    Order Now
                                </button>
                            </Link>
                            <Link to='/'>
                                <button className='rounded bg-[#F4F4F4] w-[350px]  h-10 text-[14px] text-main font-bold'>
                                    Learn More
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='w-[85%]'>
                    <img src='https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Solar-Roof-Energy-Desktop-Global' alt="solar roof image"
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

export default ThirdPage
