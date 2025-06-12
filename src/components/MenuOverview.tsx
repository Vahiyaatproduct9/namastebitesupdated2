'use client';
import React from 'react'
import './css/MenuOverview.css'
import { TopSellers, MainCourse } from './js/MenuOverview'
import { StaticImageData } from 'next/image';
import Link from 'next/link';
const MenuOverview = () => {

    interface Item {
        img: string | StaticImageData,
        name: string,
        price: string,
    }

    function itemMaker(x: {
        img: string | StaticImageData;
        name: string;
        price: string;
    }) {
        return (
            <div className="sampleitem" key={x.name}>
                <div className='item-container' style={{
                    backgroundImage: `url(${typeof x.img === 'string' ? x.img : x.img.src})`
                }}>

                </div>
                <div className='sample'>
                    <h3>{x.name}</h3>
                    <p>Only at {x.price}</p>
                </div>
            </div>
        )
    }

    const topSellersItems = TopSellers.map(item => itemMaker(item));
    const mainCourseItems = MainCourse.map(item => itemMaker(item));

    return (

        <div className='w-full justify-center flex'>
            <div className='container'>
                <div className="menuoverview-container">
                    <div className='blur-menu'>
                        <div className="menuoverview-maintext">
                            <p>Menu Overview</p>
                        </div>
                        <div className="topsellers">
                            <div className="topsellers-text">
                                <p>Top Sellers →</p>
                            </div>
                            <div className="topsellers-items">

                                {topSellersItems}


                            </div>
                        </div>
                        <div className="topsellers">
                            <div className="topsellers-text">
                                <p>Main Course →</p>
                            </div>
                            <div className="topsellers-items">
                                {mainCourseItems}
                            </div>
                        </div>
                        <div className="seefullmenu">
                            <Link href={'/menu'} className="seefullmenu-button">
                                See Full Menu</Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuOverview
