'use client'
import '../helpernew.css'
import Image from "next/image"
const logo = "/images/logo.jpg"

import React from 'react'

const Intro = () => {
    return (

        <>
            <div className="Intro">

                <Image src={logo} alt="Logo.png" height={300} width={300} />

            </div>
            <div className="Heading">
                <h1>Namaste Bites</h1>
                <br />
                <p>"The taste of Home"</p>
            </div>
        </>
    )
}

export default Intro
