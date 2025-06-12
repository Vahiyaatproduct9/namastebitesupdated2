import React from 'react'
import './css/BookaSeat.css'
import BookaSeatButton from './ClientComponent/bookaseat'

const BookaSeat = () => {
    return (
        <>
            <div className="bookaseat">


                <div className="video-blur">
                    <div className="bookaseat-text">
                        <h1>Get 10% Off on your first Visit</h1>

                    </div>
                    <BookaSeatButton />
                </div>
            </div>

        </>
    )
}

export default BookaSeat
