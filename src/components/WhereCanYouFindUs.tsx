import './css/WhereCanYouFindUs.css';
import React from 'react'
import Image from 'next/image';
import MapEmbed from './ClientComponent/MapEmbed';
import GetDirections from './ClientComponent/GetDirections';

const WhereCanYouFindUs = () => {
    return (
        <>
            <div className='wherecanyoufindus-container'>
                <div className='wherecanyoufindus-header'>
                    <p>Where Can You Find Us?</p>
                </div>
                <section className="where-can-you-find-us">
                    <MapEmbed />
                    <div className="address">
                        <GetDirections />
                        <div className="location">
                            <div className="location-heading">
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <Image
                                        src='/images/location.png'
                                        alt="Location"
                                        width={20}
                                        height={20}
                                        style={{ marginRight: 8 }}
                                    />
                                    <h2>Location</h2>
                                </div>
                            </div>
                            <div className='location-text'>
                                <p>Kalagachh bus stand,<br /> Chopra, Bhagabati<br /> West Bengal<br />733207</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default WhereCanYouFindUs