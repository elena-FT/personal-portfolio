import React from "react";
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Elena</h1>
                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#experiences" className="footer__link">Expériences</a>
                    </li>

                    <li>
                        <a href="#projects" className="footer__link">Projects</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://www.instagram.com" className="footer__social-link" target="_blank" rel="noreferrer">
                        <i className="bx bxl-instagram"></i>
                    </a>

                    <a href="https://www.linkedin.com/in/elena-fouillet" className="footer__social-link" target="_blank" rel="noreferrer">
                        <i className="bx bxl-linkedin"></i>
                    </a>

                    <a href="https://github.com/elena-FT" className="footer__social-link" target="_blank" rel="noreferrer">
                        <i className="bx bxl-github"></i>
                    </a>
                </div>

                <span className="footer__copy">
                    &#169; Erynavia. All rights reserved.
                </span>
            </div>
        </footer>
    )
}

export default Footer;