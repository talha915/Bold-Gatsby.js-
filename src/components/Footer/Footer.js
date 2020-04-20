import React from "react"

import "../../styles/main.css";

const Footer = ({ siteTitle }) => (
    <footer id="footer">
        <div className="container">
            <div className="menu-wrap">
                <div className="col">
                    <strong className="title">explore</strong>
                    <ul className="nav">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Our Story</a></li>
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