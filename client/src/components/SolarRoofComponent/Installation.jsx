import { Link } from 'react-router-dom'
import DesignVideo from '../SolarRoofComponent/video/Carousel_Design.mp4' 
import InstallationVideo from '../SolarRoofComponent/video/Carousel_Installation.mp4'
import { useState } from 'react'
const Installation = () => {
    const [showVideo, setVideo] = useState('Design')

    const handleVideo = (options) => {
        if(showVideo === options) {
            setVideo('')
        } else {
            setVideo(options)
        }
    }

    return (
        <div className='h-screen w-full'>
            <div className='flex flex-col px-4 pt-4 lg:hidden'>
                <div>
                    <p className='text-[17px] text-main'>Installation</p>
                    <p className='text-[24px] text-main'>Trusted Expertise</p>
                </div>
                <div className='mt-3'>
                    <p className='text-[14px] text-primary'>Our in-house team of energy professionals has installed nearly 4.0 GW of solar across approximately 480,000 roofs—cumulatively generating over 25.0 TWhs of clean energy. From design to power on, we take care of everything. Chat with a Tesla Advisor to ask any questions about Solar Roof.</p>
                </div>
                <div>
                    <video src={DesignVideo} controls autoPlay alt='hi'
                        style={{
                            left: '0', // Set the left position to center the image horizontally
                            // Set a larger height for small screens to zoom in
                            objectFit: 'cover', // To maintain aspect ratio and fill the container
                        }}
                        className='h-[500px] lg:h-[570px] w-full lg:hidden' />
                    
                </div>
            </div>
        </div>
    )
}

export default Installation
