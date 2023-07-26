import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { solarRoofLink } from '../../data'
const SolarRoofNav = () => {
    const [show, setShow] = useState(false)

    const controlNav = () => {
        if (window.scrollY > 800) {
            setShow(true)
        } else {
            setShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', controlNav)
        return (() => {
            window.addEventListener('scroll', controlNav)
        })
    }, [])

    return (
        <>
            {show && (
                <div className={`${show ? 'hidden lg:block lg:bg-nav-rgba lg:h-[42px] lg:fixed lg:top-0 lg:w-full lg:z-50 lg:pr-[24px] lg:pl-[24px]' : ''}`} style={{ backdropFilter: 'blur(24px)' }}>
                    <div className='lg:flex lg:justify-between lg:items-center lg:h-[42px]'>
                        <h6 className='lg:text-[17px] lg:text-white lg:font-bold'>Solar Roof</h6>
                        <ul className='lg:flex lg:justify-center lg:space-x-12 lg:items-center'>
                            {solarRoofLink.map(({ title, path }, id) => (
                                <li key={id}>
                                    {id === solarRoofLink.length - 1 ? (
                                        <Link to={path}>
                                            <button className='lg:text-[12px] lg:font-bold lg:bg-[#393C41] lg:text-white lg:px-4 lg:py-1.5 lg:rounded'>
                                                {title}
                                            </button>
                                        </Link>
                                    ) : (
                                        <Link to={path} className='lg:text-[12px] lg:text-white lg:font-bold'>{title}</Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </>
    )
}

export default SolarRoofNav
