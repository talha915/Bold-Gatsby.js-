import React, { Component } from "react"
import "../../styles/main.css";

import app from '../../Data/app.json';

// Components
import Slider from './Slider';
import Request from './Request';

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
            <main id="main">
                <Slider sliderData={this.state.appData.section1}/>
                <Request request={this.state.appData.section2}/>
            </main>
        )
    }
}


export default Apps;
