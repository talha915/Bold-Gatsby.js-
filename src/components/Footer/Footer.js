import React from "react"

import { Link } from "gatsby";

import "../../styles/main.css";
import { globalHistory } from "@reach/router";

const Footer = ({ siteTitle }) => (
    <footer id="footer">
        <div className="container">
            <div className="menu-wrap">
                <div className="col">
                    <strong className="title">explore</strong>
                    <ul className="nav">
                        <li className={(globalHistory.location.pathname === "/" ? "active" : "")}><Link to="/"><a>Home</a></Link></li>
                        <li className={(globalHistory.location.pathname === "/" ? "story" : "")}><Link to="/story"><a>Our Story</a></Link></li>
                        <li className={(globalHistory.location.pathname === "/" ? "boldseries" : "")}><Link to="/boldseries"><a>Bold Series</a></Link></li>
                        <li className={(globalHistory.location.pathname === "/" ? "mastercoaches" : "")}><Link to="/mastercoaches"><a>Master Coaches</a></Link></li>
                        <li className={(globalHistory.location.pathname === "/" ? "membership" : "")}><Link to="/membership"><a>Membership</a></Link></li>
                        <li className={(globalHistory.location.pathname === "/" ? "app" : "")}><Link to="/app"><a>App</a></Link></li>
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
            <div className="bottom-footer">
                <div className="logo">
                    <a href="#"><img src="images/logo-footer.svg" width="122" height="29" alt="bebold" /></a>
                </div>
                <span className="copyright">© 2020 <a href="#">BeBold</a>  |  All rights reserved.</span>
            </div>
        </div>
    </footer>
)

export default Footer