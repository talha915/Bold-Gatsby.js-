import React, { Component } from "react"
import "../../styles/main.css";

import app from '../../Data/app.json';

// Components
import Sliders from './Slider';
import Request from './Request';

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

    
    render() {
        
        return (
            <div>
                <div class="fixed-block">
                    <ul class="fix-pagination">
                        <li ><a href="#first" ></a></li>
                        <li><a href="#second" ></a></li>
                    </ul>
                    <span class="counter"></span>
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
