import { Link } from 'react-router-dom'
import LargeControlImg from '../../images/controlsImages/large-control.avif'
import MediumControlImg from '../../images/controlsImages/medium-control.avif'
import SmallControlImg from '../../images/controlsImages/small-control.avif'
const Control = () => {
    return (
        <div className='h-screen w-full '>
            <div className=''>
                <img src={SmallControlImg} alt="solar roof image"
                    // Changes the images for different screen sizes
                    srcSet={`${SmallControlImg} 480w, ${MediumControlImg} 768w, ${LargeControlImg} 1024w`}
                    style={{
                        left: '0', // Set the left position to center the image horizontally
                        // Set a larger height for small screens to zoom in
                        objectFit: 'cover', // To maintain aspect ratio and fill the container
                    }}
                    className='h-[500px] lg:h-[570px] w-full' />
            </div>
            <div className='flex flex-col px-4 pt-4 lg:hidden'>
                <div>
                    <p className='text-[17px] text-main'>Design</p>
                    <p className='text-[24px] text-main'>Complement Your Home's Aesthetic</p>
                </div>
                <div className='mt-3'>
                    <p className='text-[14px] text-primary'>Install Solar Roof and power your home with a fully integrated solar and energy storage system. The glass solartiles and steel roofing tiles look great up close and from the street, complementing your home's natural styling. Schedule a virtual consultation with a Tesla Advisor to learn more.</p>
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
            <div className='hidden lg:flex lg:justify-center lg:items-center lg:pt-[40px]' >
                <div className='hidden lg:flex lg:space-x-20 lg:px-[100px]'>
                    <div className='hidden lg:flex flex-col items-start'>
                        <p className='text-[17px] text-main'>Design</p>
                        <p className='text-[22px] text-main xl:text-[28px]'>Complement Your Home's <br></br>Aesthetic</p>
                        <Link to='/' className='mt-2'>
                            <button className='border-[3px] w-[200px] rounded border-black h-10 text-[14px] text-main font-bold'>
                                Order Now
                            </button>
                        </Link>
                    </div>
                    <div className='w-[600px]'>
                        <p className='text-[14px] text-primary'>Install Solar Roof and power your home with a fully integrated solar and energy storage system. The glass solartiles and steel roofing tiles look great up close and from the street, complementing your home's natural styling. Schedule a virtual consultation with a Tesla Advisor to learn more.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Control
