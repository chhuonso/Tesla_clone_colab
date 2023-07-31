import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import MensMobile from '../../images/shopImages/men_mobile.avif'
import WomanMobile from '../../images/shopImages/women_mobile.avif'
import KidMobile from '../../images/shopImages/Kids_mobile.avif'
const Apparel = () => {
    const apparelData = [
        {
            id: 1,
            bgImg: `${MensMobile}`,
            title: "Men's Apparel",
            path: "/category/apparel/men",
            btn: "Shop Now",
        },
        {
            id: 2,
            bgImg: `${WomanMobile}`,
            title: "Men's Apparel",
            path: "/category/apparel/woman",
            btn: "Shop Now",
        },
        {
            id: 3,
            bgImg: `${KidMobile}`,
            title: "Kid's Apparel",
            path: "/category/apparel/kid",
            btn: "Shop Now",
        }
    ]
    return (
        <>
            <div style={{}} className='snap-y snap-mandatory h-screen overflow-scroll'>
                {
                    apparelData.map(({ title, price, subTitle, bgImg, leftBtn, rightBtn }, id) => {
                        return (
                            <div key={id} style={{ backgroundImage: `url(${bgImg})` }} className='h-screen bg-cover bg-center flex flex-col justify-around snap-start'>
                                <div className='relative text-center'>
                                    <h1 className='text-4xl font-bold '>{title}</h1>
                                    <p className='underline underline-offset-4 pt-2 text-sm font-light'>{price}</p>
                                    <p className='text-sm'>{subTitle}</p>
                                </div>
                                <div className='flex flex-col items-center gap-5 justify-center text-sm lg:flex-row md:flex-row relative '>
                                    <button className='bg-white rounded-md w-96 md:w-64 lg:mx-4 mt-2 h-10 text-[#393c41] top-[40%] p-2 '>{rightBtn}</button>
                                    <button className='bg-[#393c41] rounded-md w-96 md:w-64 lg:mx- mt-2 h-10  text-white p-2 '>{leftBtn}</button>
                                </div>
                                {/* <div className=' fixed bg-[#393c41] w-12 h-10 rounded text-white flex justify-center items-center text-xl inset-x-12 lg:inset-y-100 lg:inset-x-[95%] '>
                                <BsChatLeftDots size={24} />
                            </div> */}
                            </div>
                        )
                    })
                }
                <div className='h-screen bg-cover bg-center flex flex-col justify-between snap-start' style={{ backgroundImage: `url(})` }} >
                    <div className='relative text-center top-[15%]'>
                        <h1 className='text-4xl font-bold '>Accessories</h1>
                    </div>
                    <div className='flex flex-col items-center gap-5 justify-center text-sm lg:flex-row md:flex-row relative'>
                        <button className='bg-white rounded-md w-96 md:w-64 lg:mx-4 mt-2 h-10 text-[#393c41] p-2 relative top-[30%]'>Shop Now</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Apparel
