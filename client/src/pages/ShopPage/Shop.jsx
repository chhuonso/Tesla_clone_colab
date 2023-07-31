import React from 'react'
import ShopNavbar from '../../components/ShopNavbar/ShopNavbar'
import CarouselShop from '../../components/ShopLanding/CarouselShop'
import Apparel from '../../components/ShopLanding/Apparel'

const ShopLanding = () => {
    return (
        <>
            <ShopNavbar />
            <div>
                <CarouselShop />
                <Apparel />
            </div>
        </>
    )
}

export default ShopLanding
