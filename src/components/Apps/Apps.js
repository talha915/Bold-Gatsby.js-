import React, { Component } from "react"
import "../../styles/main.css";

import app from '../../Data/app.json';

// Components
import Sliders from './Slider';
import Request from './Request';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import scrollToComponent from 'react-scroll-to-component';
class Apps extends Component {

    constructor(props) {
        super(props);
        this.state = {
            appData: ''
        }
    }

    checkUrl = "01 / 07";

    UNSAFE_componentWillMount() {
        this.setApp();
    }

    setApp = () => {
        this.setState({ appData: app });
    }

    splitCheck=()=> {
        let url = window.location.href;
        let splitted = url.split("#");
        console.log("Splitted : ", splitted);
        if(splitted[1] == "first") {
            this.checkUrl = "01 / 02";
        }
        else {
            this.checkUrl = "02 / 02";
        }
    }

    render() {
        
        return (
            <div>
                <div class="fixed-block">
                    <ul class="fix-pagination">
                        <li ><a href="#first" onClick={this.splitCheck()}></a></li>
                        <li><a href="#second" onClick={this.splitCheck()}></a></li>
                    </ul>
                    <span class="counter">{this.checkUrl}</span>
                    <i class="icon-arrow-down"></i>
                    <strong class="title">Explore & <span>BE</span>BOLD</strong>
                </div>
                <main id="main">
                    <Sliders id="first" sliderData={this.state.appData.section1} />
                    <Request id="second" request={this.state.appData.section2} />
                </main>
            </div>
        )
    }
}


export default Apps;
