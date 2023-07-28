import React from 'react'

const Spec = () => {
    return (
        <>
            <div className='h-screen w-full bg-black'>
                <div className='pt-9'>
                    <img src="https://www.tesla.com/sites/default/files/solarroof/specs/PanelMeasure_mobile2x.png" alt="solar roof image"
                        style={{
                            left: '0', // Set the left position to center the image horizontally
                            // Set a larger height for small screens to zoom in
                            objectFit: 'cover', // To maintain aspect ratio and fill the container
                        }}
                        className='h-[280px] lg:h-[570px] w-full' />
                </div>
                <div className='flex flex-col px-4 pt-20 lg:hidden'>
                    <div>
                        <p className='text-[24px] text-white'>Solar Roof Specs</p>
                    </div>
                    <div className='mt-6 flex'>
                        <div className='flex flex-col flex-1'>
                            <div className='w-[30px] bg-white h-[.40px]'/>
                            <h1 className='text-white space-y-2 text-[15px] mt-4'>Tile and Power Warranty</h1>
                            <h1 className='text-white text-[15px]'>25 Years</h1>
                            <div className='w-[30px] bg-white h-[.40px] mt-5'/>
                            <h1 className='text-white space-y-2 text-[15px] mt-4'>Tile and Power Warranty</h1>
                            <h1 className='text-white text-[15px]'>72 Years</h1>
                            <div className='w-[30px] bg-white h-[.40px] mt-5'/>
                            <h1 className='text-white space-y-2 text-[15px] mt-4'>Tile and Power Warranty</h1>
                            <h1 className='text-white text-[15px]'>72 Years</h1>
                        </div>
                        <div className='flex flex-col flex-1'>
                            <div className='w-[30px] bg-white h-[.40px]'/>
                            <h1 className='text-white mt-4'>Fire Rating</h1>
                            <h1 className='text-white'>Class A (highest rating)</h1>
                            <div className='w-[30px] bg-white h-[.40px]  mt-4'/>
                            <h1 className='text-white mt-4 text-[14px] font-medium'>Hail Rating</h1>
                            <h1 className='text-white '>Class 3</h1>
                            <div className='w-[30px] bg-white h-[.40px]  mt-4'/>
                            <h1 className='text-white mt-4 text-[14px] font-medium'>Roof Pitch</h1>
                            <h1 className='text-white'>≥ 2:12</h1>
                        </div>
    
                    </div>
                </div>
            </div>
        </>
    )
}

export default Spec
