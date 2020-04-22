import React, { Component } from "react"
import "../../styles/main.css";

import app from '../../Data/app.json';

// Components
import Sliders from './Slider';
import Request from './Request';
import AnchorLink from 'react-anchor-link-smooth-scroll';

class Apps extends Component {

    constructor(props) {
        super(props);
        this.state = {
            appData: ''
        }
    }

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
                        <li class="active"><a ></a></li>
                        <li><a ></a></li>
                    </ul>
                    <span class="counter">01 / 07</span>
                    <i class="icon-arrow-down"></i>
                    <strong class="title">Explore & <span>BE</span>BOLD</strong>
                </div>
                <main id="main">
                    <Sliders sliderData={this.state.appData.section1} />
                    <Request request={this.state.appData.section2} />
                </main>
            </div>
        )
    }
}


export default Apps;
