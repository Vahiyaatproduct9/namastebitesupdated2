'use client';
const logo = "/images/logo.png"
import './css/Navbar.css';
const menu = "/images/menu.png";
import Image from 'next/image';
import Link from 'next/link';

import React, { useEffect, useRef } from 'react';

const Navbar = () => {
    const lastScroll = useRef(0);

    function handleToggle() {
        const bar = document.getElementById("bar") as HTMLElement | null;
        if (!bar) return;
        const disp = getComputedStyle(bar).display;
        bar.style.display = disp === "none" ? "block" : "none";
        const toggle = document.getElementById("toggle") as HTMLElement | null;
        if (!toggle) return;
        const toggleOn = getComputedStyle(toggle).display;

        toggle.style.display = toggleOn === 'none' ? 'block' : 'none';

        const strong = document.querySelector('strong') as HTMLElement | null;
        const headnav = document.querySelector('.head-nav') as HTMLElement | null;
        if (strong) {
            strong.style.display = (toggleOn === 'block') ? 'block' : 'none';
        }
        if (bar) {
            bar.style.backgroundColor = (toggleOn === 'block') ? 'rgba(51, 51, 65, 1)' : 'transparent';
        }
        if (headnav) {
            headnav.style.backgroundColor = (toggleOn === 'block') ? 'rgba(51, 51, 65, 1)' : 'transparent';
        }
    }

    useEffect(() => {
        const bar = document.querySelector('.head-nav') as HTMLElement | null;
        function onScroll() {
            const currentScroll = window.scrollY;
            if (!bar) return;
            if (currentScroll > lastScroll.current) {
                bar.style.top = "-100px";
            } else {
                bar.style.top = "0";
            }
            lastScroll.current = currentScroll;
        }
        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    useEffect(() => {
        const bare = document.querySelector('#bar') as HTMLElement | null;
        function handleResize() {
            if (!bare) return;
            bare.classList.remove(window.innerWidth > 1200 ? 'box' : 'bar');
            bare.classList.add(window.innerWidth > 1200 ? 'bar' : 'box');
        }
        window.addEventListener('resize', handleResize);
        window.addEventListener('load', handleResize);

        // Initial call
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('load', handleResize);
        };
    }, []);

    return (<>
        <nav style={{
            top: 0
        }} className="head-nav">
            <Link href="https://vahiyaatproduct9.github.io/namastebitesupdated/">
                <div className="brand">
                    <Image width={24} height={24} src={logo} alt="Bites Logo Image" />

                    {/* <h3>Namaste Bites</h3> */}
                </div>
            </Link>
            <div className="toggle" onClick={handleToggle}>
                <Image fill id="toggle" src={menu} alt="Menu" />

                <strong style={{
                    fontWeight: 800,
                    fontSize: "4rem",
                    display: "none"
                }}>&times;</strong>
            </div>
            <ul id="bar" style={{
                top: 0
            }} className="box">
                <li id="home">Home</li>
                <li id="aboutus">About Us
                    <ul>
                        <li>Owner's Words</li>
                    </ul>
                </li>
                <li className="menu">Menu
                    <ul>
                        <li>Momo</li>
                        <li>Chowmien</li>
                        <li>Pakoda</li>
                        <li>Rolls</li>
                        <li>Main Course</li>
                        <li>Dessert</li>
                    </ul>
                </li>
                <li>Gallery</li>
                <li>Hiring</li>
                <li>Contact</li>
                <Link href={'/bookaseat'}><li className="bookaseat"><span>Book a Seat</span></li></Link>
            </ul>
        </nav>
    </>
    )
}

export default Navbar
