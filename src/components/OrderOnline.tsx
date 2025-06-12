// import swiggy from '@/../../public/images/swiggy.png'
// import zomato from '@/../../public/images/zomato.png'
// import blinkit from '/images/blinkit.png'
import './css/OrderOnline.css'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const OrderOnline = () => {
    return (
        <>
            <div className="orderonline-body">
                <div className="orderonline-text">
                    <h1>Order Online On →</h1>
                </div>
                <div className="orderonline-button-container">
                    <Link href={"/"} className="swiggy">Swiggy
                        <Image width={12} height={12} src='/images/swiggy.png' alt="swiggy" />
                    </Link>
                    <Link href={"/"} className="zomato">Zomato
                        <Image width={12} height={12} src='/images/zomato.png' alt="zomato" /></Link>
                    <Link href={"/"} className="blinkit">Blinkit
                        <Image width={12} height={12} src='/images/blinkit.png' alt="Blinkit" /></Link>
                </div>
            </div>
        </>
    )
}

export default OrderOnline
