import React from "react"
import { Link } from "gatsby"

import Header from '../components/Header/Header';
import Home from "../components/Home/Home";
import Footer from '../components/Footer/Footer';

const IndexPage = () => (
  <div id="wrapper" className="home">
    <Header />
    <Home />
    <Footer />
  </div>
)

export default IndexPage
