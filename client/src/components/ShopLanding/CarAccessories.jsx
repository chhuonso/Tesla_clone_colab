import React from 'react'
import PrimaryButton from '../btn/LargePrimaryBtn'
const CarAccessories = () => {
    return (
        <>
        <div style={{}} className='snap-y snap-mandatory h-screen overflow-scroll'>
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
                                <PrimaryButton >{btn}</PrimaryButton>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </>
    )
}

export default CarAccessories
