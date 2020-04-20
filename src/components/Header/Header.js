import React from "react"

import "../../styles/main.css";
import logo from '../../images/logo.svg';
import btnappstore from '../../images/btn-app-store.png';
import googleplaybtn from '../../images/btn-google-play.png';

const Header = ({ siteTitle }) => (
    <header id="header">
        <div className="container">
            <div className="logo">
                <a href="#"><img src={logo} width="122" height="29" alt="bebold" /></a>
            </div>
            <nav className="nav-area">
                <ul className="navbar">
                    <li className="active"><a href="#">Home</a></li>
                    <li><a href="#">Our Story</a></li>
                    <li><a href="#">bold series</a></li>
                    <li><a href="#">master coaches</a></li>
                    <li><a href="#">membership</a></li>
                    <li><a href="#">app</a></li>
                </ul>
                <div className="btn-holder">
                    <a className="btn-app" href="#"><img src={btnappstore} width="120" height="40" alt="appstore" /></a>
                    <a className="btn-app google-play" href="#"><img src={googleplaybtn} width="135" height="40" alt="googleplay" /></a>
                </div>
            </nav>
        </div>
        <input className="menu-check" id="menu" type="checkbox" />
        <label htmlFor="menu" className="nav-opener"><span></span></label>
        <div className="main-menu">
            <div className="holder">
                <div className="menu-wrap">
                    <div className="col">
                        <strong className="title">explore</strong>
                        <ul className="nav">
                            <li><a href="#">Home</a></li>
                            <li className="active"><a href="#">Our Story</a></li>
                            <li><a href="#">Bold Series</a></li>
                            <li><a href="#">Master Coaches</a></li>
                            <li><a href="#">Membership</a></li>
                            <li><a href="#">App</a></li>
                        </ul>
                    </div>
                    <div className="col">
                        <strong className="title">BEBOLD</strong>
                        <ul className="nav">
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Use</a></li>
                        </ul>
                    </div>
                    <div className="col">
                        <strong className="title">getstarted</strong>
                        <ul className="nav">
                            <li><a href="#">Login</a></li>
                            <li><a href="#">Sign up</a></li>
                        </ul>
                    </div>
                    <div className="col">
                        <strong className="title">socialmedia</strong>
                        <ul className="socialnetworks">
                            <li><a href="#"><i className="ico icon-twitter"></i> twitter</a></li>
                            <li><a href="#"><i className="ico icon-facebook"></i> facebook</a></li>
                            <li><a href="#"><i className="ico icon-linkedin"></i> linkedin</a></li>
                            <li><a href="#"><i className="ico icon-youtube"></i> youtube</a></li>
                            <li><a href="#"><i className="ico icon-instagarm"></i> instagram</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>
)


export default Header
