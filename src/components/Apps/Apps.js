import React, { Component } from "react"
import "../../styles/main.css";

import app from '../../Data/app.json';
import scrollToComponent from 'react-scroll-to-component';
// Components
import Sliders from './Slider';
import Request from './Request';

class Apps extends Component {

    constructor(props) {
        super(props);
        this.state = {
            appData: '',
            activeData: 1
        }
    }

    UNSAFE_componentWillMount() {
        this.setApp();
    }
   
    setApp = () => {
        this.setState({ appData: app });
    }


    smooth=(data)=> {
        this.setState({activeData: data});
    }
    
    render() {
        
        return (
            <div>
                <div class="fixed-block">
                    <ul class="fix-pagination">
                        <li onClick={()=>this.smooth(1)} className={(this.state.activeData && this.state.activeData == 1 ? "active": "")}><a onClick={() => scrollToComponent(this.first, { offset: 0, align: 'top', duration: 1500})}></a></li>
                        <li className={(this.state.activeData && this.state.activeData == 2 ? "active": "")} onClick={()=>this.smooth(2)}><a onClick={() => scrollToComponent(this.second, { offset: 0, align: 'top', duration: 1500})}></a></li>     
                    </ul>
                    <span class="counter"></span>
                    <i class="icon-arrow-down"> </i>
                    <strong class="title">Explore & <span>BE</span>BOLD</strong>
                </div>
                <main id="main">
                    <Sliders ref={(section) => { this.first = section}} sliderData={this.state.appData.section1} />
                    <Request ref={(section) => { this.second = section}} request={this.state.appData.section2} />
                </main>
            </div>
        )
    }
}


export default Apps;
