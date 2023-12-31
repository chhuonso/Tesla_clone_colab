import React from 'react'
import { Link } from 'react-router-dom'
import DesignVideo from '../SolarRoofComponent/video/Carousel_Design.mp4'
import InstallationVideo from '../SolarRoofComponent/video/Carousel_Installation.mp4'
import { useState } from 'react'
const Installation = () => {
    const [showVideo, setVideo] = useState('Design')

    const handleVideoCarousel = (videoType) => {
        setVideo(videoType)
    }

    const carousel = [
        {
            videoType: 'Design',
            content: (
                <>
                    <span className='w-[300px] border-2 border-black mt-10'></span>
                    <div className='flex flex-col'>
                        <p>Design</p>
                        <p className='mt-3'>Aerial imagery and 3D modeling determine your custom design</p>
                    </div>
                </>
            )
        },
        {
            videoType: 'Install',
            content: (
                <>
                    <span className='w-[300px] border-2 border-black mt-10'></span>
                    <div className='flex flex-col'>
                        <p>Design</p>
                        <p className='mt-3'>Aerial imagery and 3D modeling determine your custom design</p>
                    </div>
                </>
            )
        },
        {
            videoType: 'Install',
            content: (
                <>
                    <span className='w-[300px] border-2 border-black mt-10'></span>
                    <div className='flex flex-col'>
                        <p>Design</p>
                        <p className='mt-3'>Aerial imagery and 3D modeling determine your custom design</p>
                    </div>
                </>
            )
        },
    ]

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
                    <video src={showVideo === 'Design' ? DesignVideo : InstallationVideo} controls autoPlay alt='hi'
                        style={{
                            left: '0',
                            objectFit: 'cover',
                        }}
                        className='h-[300px] mt-20 lg:h-[570px] w-full lg:hidden' />
                    <div className='flex flex-row w-[1900px]  gap-5'>
                        {carousel.map((video, idx) => (
                            <div key={idx} className='w-[13%] snap-x snap-mandatory overflow-scroll' onClick={() => handleVideoCarousel(video.videoType)}>
                                <div className='snap-start flex-shrink-0'>
                                    {video.content}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Installation
