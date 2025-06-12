'use client'
import React from 'react'

function MapEmbed() {
    return (
        <div className="map-embed">
            <iframe
                title='Google Map'
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14297.108584227675!2d88.313396!3d26.3822324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e4f91827683fdb%3A0xf2dfe603c6ed803c!2z4Kao4Kau4Ka44KeN4Kak4KeHIOCmrOCmvuCmh-Cmn-CmuA!5e0!3m2!1sbn!2sin!4v1748694214401!5m2!1sbn!2sin"
                style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}

export default MapEmbed
