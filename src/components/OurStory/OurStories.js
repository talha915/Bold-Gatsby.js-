import React, { Component } from "react"
import "../../styles/main.css";

import ourstory from '../../Data/our-story.json';

import Founder from './Founder';
import BoldThinking from './BoldThinking';
import BoldExecution from './BoldExcecution';
import BeBold from './Bebold';
import BoldMovement from './BoldMovement';
import InfoBanner from './InfoBanner';

class OurStories extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ourstories: ''
        }
    }

    UNSAFE_componentWillMount() {
        this.setStories();
    }

    setStories=()=> {
        this.setState({ourstories: ourstory});
    }

    render() {
        return(
            <main id="main">
                <Founder founderData={this.state.ourstories} />
                <BoldThinking thinkingData={this.state.ourstories.section2} />
                <BoldExecution executionData={this.state.ourstories.section3} />
                <BeBold boldData={this.state.ourstories.section4}/>
                <BoldMovement />
                <InfoBanner section6={this.state.ourstories.section6} section7={this.state.ourstories.section7}/>
            </main>
        )
    }
}

export default OurStories;