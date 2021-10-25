import React, { useState } from "react";
import logo from "../img/logo.png";
import drean from "../img/drean-bg.png";
import logonav from "../img/logonav.png";


import "./Home.css";

function Home() {
    // fixed Header
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");
        header.classList.toggle("active", window.scrollY > 600);
    });
    window.addEventListener("scroll", function () {
        const logonav = document.querySelector(".logonav");
        logonav.classList.toggle("active", window.scrollY > 600);
    });
    // Toogle Menu
    const [show, setShow] = useState(false);
    return (
        <div className="home" id="Home">
            <div className="home__bg">
                <div className="header d__flex align__items__center pxy__30">
                    {/* Toogle Menu */}
                    <img src={logonav} alt="" className="logonav" />
                    <div className="toggle__menu">
                        <svg onClick={() => setShow(!show)}
                            xmlns="http://www.w3.org/2000/svg"
                            width="36"
                            height="36"
                            fill="currentColor"
                            class="bi bi-justify black pointer"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
                            />
                        </svg>
                    </div>
                    {show ? (
                        <div className="sideNavbar">
                            <ul className="sidebar d__flex">
                                <li className="sideNavbar">
                                    <a href="#Home">Home</a>
                                </li>
                                <li className="sideNavbar">
                                    <a href="#About">About</a>
                                </li>
                                <li className="sideNavbar">
                                    <a href="#Services">Services</a>
                                </li>
                                <li className="sideNavbar">
                                    <a href="#Portfolio">Portfolio</a>
                                </li>
                                <li className="sideNavbar">
                                    <a href="#Blog">Blog</a>
                                </li>
                                <li className="sideNavbar">
                                    <a href="#Contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                    ) : null}
                </div>
                {/* HOME CONTENT */}
                <div className="container">
                    <div className="home__content">
                        <img src={drean} alt='' className="home__img" />
                        <img src={logo} alt="" className="logo__img" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;