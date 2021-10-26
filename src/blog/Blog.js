import React from "react";
import fb from '../img/facebook.png';
import insta from '../img/instagram.png';
import li from '../img/linkedin.png';

import "./Blog.css";

function Blog() {
    return (
        <div id="Blog">
            <div className="socialContainer">
                <a href="https://www.facebook.com/DonDreano"
                    className="socialLinkHover"
                    target="_blank"
                    rel="noreferrer">
                    <img src={fb} alt='icon fb' className="socialLink" /></a>
                <a href="https://www.instagram.com/dondreano/"
                    className="socialLinkHover"
                    target="_blank"
                    rel="noreferrer">
                    <img src={insta} alt='icon instagram' className="socialLink" /></a>
                <a href="https://www.linkedin.com/in/nicolas-drean-b58291139/"
                    className="socialLinkHover"
                    target="_blank"
                    rel="noreferrer">
                    <img src={li} alt='icon linkedin' className="socialLink" /></a>
            </div>
        </div>
    );
}

export default Blog;