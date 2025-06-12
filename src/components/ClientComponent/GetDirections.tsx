
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
const direction = "/images/directions.png"
function GetDirections() {
    'use client';
    return (

        <div className="get-directions">
            <Link className="getdirections-button justify-center " href='https://www.google.com/maps/place/%E0%A6%A8%E0%A6%AE%E0%A6%B8%E0%A7%8D%E0%A6%A4%E0%A7%87+%E0%A6%AC%E0%A6%BE%E0%A6%87%E0%A6%9F%E0%A6%B8/@26.3822324,88.313396,15z/data=!4m6!3m5!1s0x39e4f91827683fdb:0xf2dfe603c6ed803c!8m2!3d26.3822051!4d88.3135545!16s%2Fg%2F11vhj0w5gg!5m1!1e4?entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D'>
                Get Directions
                <Image src={direction} alt="directions" height={100} width={100} className='relative' />
            </Link>
        </div>
    )
}

export default GetDirections
