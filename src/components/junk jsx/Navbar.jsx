import logo from "../images/logo.png"
import './Navbar.css';
import menu from "../images/menu.png";
export default function Navbar() {


    let lastscroll = window.scrollY;
    const bar = document.querySelector('.head-nav');



    function handleToggle() {
        const bar = document.getElementById("bar");
        const disp = getComputedStyle(bar).display;
        disp === "none" ? bar.style.display = "block" : bar.style.display = "none";
        const toggle = document.getElementById("toggle");
        const toggleOn = getComputedStyle(toggle).display;

        toggle.style.display = toggleOn === 'none' ?
            'block' : 'none';

        const strong = document.querySelector('strong');
        strong.style.display = (toggleOn === 'block') ?
            'block' : 'none';
        const nav = document.querySelector('.head-nav');
        nav.style.backgroundColor = (toggleOn === 'block') ?
            'rgba(51, 51, 65, 1)' : 'transparent';

    }
    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;
        if (currentScroll > lastscroll) {
            bar.style.top = "-100px";
        } else {
            bar.style.top = "0";
        }
        lastscroll = currentScroll;
    });
    window.addEventListener('resize', () => {

        document.querySelector('#bar').classList.remove(window.innerWidth > 1200 ? 'box' : 'bar');
        document.querySelector('#bar').classList.add(window.innerWidth > 1200 ? 'bar' : 'box');
    });
    window.addEventListener('load', () => {

        document.querySelector('#bar').classList.remove(window.innerWidth > 1200 ? 'box' : 'bar');
        document.querySelector('#bar').classList.add(window.innerWidth > 1200 ? 'bar' : 'box');
    })
    return (
        <>    <nav style={{
            top: 0
        }} className="head-nav">
            <a href="https://vahiyaatproduct9.github.io/namastebites/">
                <div className="brand">
                    <img src={logo} alt="Bites Logo Image" />

                    {/* <h3>Namaste Bites</h3> */}
                </div>
            </a>
            <div className="toggle" onClick={handleToggle}>
                <img id="toggle" src={menu} alt="Menu" />

                <strong style={{
                    fontWeight: 800,
                    fontSize: "4rem",
                    display: "none"
                }}>&times;</strong>
            </div>
            <ul id="bar" className="box">
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
                <li className="bookaseat"><span>Book a Seat</span></li>
            </ul>
        </nav>
        </>
    )

}