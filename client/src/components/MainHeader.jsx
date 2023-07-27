import React from 'react'
import { links } from "../data"
import { BsChatLeftDots } from 'react-icons/bs'
// import Model3 from "./images/model-3.jpg"
import Navbar from './Navbar'
const MainHeader = () => {
    return (
        <> 
        <div style={{}} className=''>
            <Navbar />
            <p>Hi</p>
            <p>Hi</p>
            <h1>YO</h1>
            <h3>NICE!</h3>
            <h5>GOOD</h5>
            <h2>AWESOME</h2>
            {
                links.map(({ title, price, subTitle, bgImg, leftBtn, rightBtn }, id) => {
                    return (
                        <div key={id} style={{ backgroundImage: `url(${bgImg})`}} className='h-screen bg-cover bg-center flex flex-col  justify-around'>
                            <div className='relative text-center'>
                                <h1 className='text-4xl font-bold '>{title}</h1>
                                <p className='underline underline-offset-4 pt-2 text-sm font-light'>{price}</p>
                                <p className='text-sm'>{subTitle}</p>
                            </div>
                            <div className='flex flex-col items-center justify-center text-sm lg:flex-row'>
                                <button className='bg-[#393c41] rounded-md w-96 lg:w-64 lg:mx-4 mt-2 h-10  text-white p-2 '>{leftBtn}</button>
                                <button className='bg-white rounded-md w-96 lg:w-64 lg:mx-4 mt-4 h-10 text-[#393c41] p-2 '>{rightBtn}</button>
                            </div>
                            <div className=' absolute  bg-[#393c41] w-12 h-10 rounded text-white flex justify-center items-center text-xl inset-x-12 lg:inset-y-100 lg:inset-x-[95%] '>
                                <BsChatLeftDots size={24} />
                            </div>
                        </div>
                )
            })
        }
        </div>
    </>
        // <div className='h-screen bg-cover bg-center'>
        //   <Navbar/>
        //   <div >
        //     <div className='absolute inset-x-0 top-[15%] text-center'>
        //       <h1 className='text-4xl font-bold '>Model 3</h1>
        //       <p className='underline underline-offset-4 pt-2 text-sm font-light'>Starting at $32,740</p>
        //       <p className='text-sm'>After Federal Tax Credit</p>
        //     </div>
        //     <div>
        //     </div>
        //     <div className='flex flex-col items-center justify-center text-sm lg:flex-row absolute inset-x-0 bottom-[7%] '>
        //       <button className='bg-[#393c41] rounded-md w-96 lg:w-64 lg:mx-4 mt-2 h-10  text-white p-2'>Order Now</button>
        //       <button className='bg-white rounded-md w-96 lg:w-64 lg:mx-4 mt-4 h-10 text-[#393c41] p-2 '>Demo Drive</button>
        //     </div>
        //     <div className='absolute bottom-[2%] bg-[#393c41] w-12 h-10 rounded text-white flex justify-center items-center text-xl inset-x-12 lg:inset-y-100 lg:inset-x-[95%] animate-bounce'>
        //       <BsChatLeftDots size={24} />
        //     </div>
        //   </div>
        // </div>
    )
}

export default MainHeader