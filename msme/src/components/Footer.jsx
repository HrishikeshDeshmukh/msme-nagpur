import React from 'react'
import Logo from '../assets/Emblem.png'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <footer className="footer">

                <svg class="footer-wave-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100" preserveAspectRatio="none">
                    <path class="footer-wave-path" d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"></path>
                </svg>

                <div className="footer-content">
                    <div className="footer-content-column">
                        <div className="footer-logo">
                            <a className="footer-logo-link" href="#">
                                <img src={Logo} alt="" srcset="" height={70} />
                                <h1>MSME</h1>
                            </a>
                        </div>
                        <div className="footer-menu">
                            <p className="address">MSME-Development Institute, Ministry of Micro Small & Medium Enterprise (MSME),
                                Government of India, CGO Complex, Block "C", Seminary Hills, Nagpur-440006.</p>

                        </div>
                    </div>
                    <div className="footer-content-column">
                        <div className="footer-menu">
                            <h2 className="footer-menu-name"> Related Links</h2>
                            <ul id="menu-company" className="footer-menu-list">
                                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                    <a href="https://msme.gov.in/">Ministry of MSME</a>
                                </li>
                                <li className="menu-item menu-item-type-taxonomy menu-item-object-category">
                                    <a href="https://dcmsme.gov.in/">Office Of DCMSME</a>
                                </li>
                                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                    <a href="https://www.nsic.co.in/">NSIC</a>
                                </li>

                                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                    <a href="https://www.kviconline.gov.in/">KVIC</a>
                                </li>

                                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                    <a href="https://www.sidbi.in/en/">SIDBI</a>
                                </li>
                                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                    <a href="https://di.maharashtra.gov.in/_layouts/15/doistaticsite/English/index.html">Directorate Of Industries</a>
                                </li>
                                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                    <a href="https://mianagpur.in/">MIDC</a>
                                </li>
                            </ul>
                        </div>
                       
                    </div>
                    <div className="footer-content-column">
                        <div className="footer-menu">
                            <h2 className="footer-menu-name"> Quick Links</h2>
                            <ul id="menu-quick-links" className="footer-menu-list">
                                <li className="menu-item menu-item-type-custom menu-item-object-custom">
                                    <Link to='/'>Home</Link>
                                </li>
                                <li className="menu-item menu-item-type-custom menu-item-object-custom">
                                    <Link to='/about' >About</Link>
                                </li>
                                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                    <Link to='/act&rules'>MSME Act</Link>
                                </li>
                                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                    <a href="https://udyamregistration.gov.in/Government-India/Ministry-MSME-registration.htm">Registration</a>
                                </li>
                                <li className="menu-item menu-item-type-post_type_archive menu-item-object-customer">
                                    <a href="https://msme.gov.in/right-information-act">RTI</a></li>
                                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                                    <Link to="/contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-content-column">
                        <div className="footer-call-to-action">
                            <h2 className="footer-call-to-action-title"> Let's Chat</h2>
                            <p className="footer-call-to-action-description"> Have a support question?</p>
                            <a className="footer-call-to-action-button button" href="#" target="_self"> Get in Touch </a>
                        </div>
                        <div className="footer-call-to-action">
                            <h2 className="footer-call-to-action-title"> You Call Us</h2>
                            <p className="footer-call-to-action-link-wrapper"> <a className="footer-call-to-action-link" href="tel:1800787809" target="_self"> 1-800-7878-09 </a></p>
                        </div>
                    </div>

                </div>
                <hr />

                <div className="footer-end">
                    <p>Designed and Developed by ©Royals Webtech Pvt.Ltd.</p>
                    <p>Last Updated: March 28, 2024</p>
                </div>

            </footer >

        </>
    )
}

export default Footer
