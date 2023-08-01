import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import MensMobile from '../../images/shopImages/men_mobile.avif'
import WomanMobile from '../../images/shopImages/women_mobile.avif'
import KidMobile from '../../images/shopImages/Kids_mobile.avif'
import PrimaryButton from '../btn/LargePrimaryBtn'
import Wrapper from '../wrappers/ScrollSnap'
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
            <Wrapper>
                {
                    apparelData.map(({ title, price, subTitle, bgImg, btn }, id) => {
                        return (
                            <div key={id} style={{ backgroundImage: `url(${bgImg})` }} className='h-screen bg-cover bg-center flex flex-col justify-between snap-start'>
                                <div className='relative text-center'>
                                    <p className='underline underline-offset-4 pt-2 text-sm font-light'>{price}</p>
                                    <p className='text-sm'>{subTitle}</p>
                                </div>
                                <div className='flex flex-col items-center gap-5 justify-end text-sm lg:flex-row md:flex-row relative mb-10'>
                                    <h1 className='text-4xl text-center font-bold w-96 md:w-64 lg:mx-4 mt-2 h-10 text-black top-[20%] p-2 text-[22px]'>{title}</h1>
                                    <PrimaryButton>{btn}</PrimaryButton>
                                </div>
                            </div>
                        )
                    })
                }
            </Wrapper>
        </>
    )
}

export default Apparel
