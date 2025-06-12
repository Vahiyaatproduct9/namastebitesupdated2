import Link from 'next/link';
import React from 'react'

function BookaSeatButton() {
    'use client';
    return (
        <div className="bookaseat-button-div">
            <Link href={'/bookaseat'}> <button className="bookaseat-button">Book a Seat  →</button></Link>
        </div>
    )
}

export default BookaSeatButton
