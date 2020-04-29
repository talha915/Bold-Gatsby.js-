import React, { Component } from "react"
import "../../styles/main.css";

import ourstory from '../../Data/our-story.json';

import scrollToComponent from 'react-scroll-to-component';

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
            ourstories: '',
            activeData: 1
        }
    }

    UNSAFE_componentWillMount() {
        this.setStories();
    }

    setStories = () => {
        this.setState({ ourstories: ourstory });
    }

    smooth=(data)=> {
        this.setState({activeData: data});
    }

    render() {
        return (
            <div className="ourstories">
                <div className="fixed-block">
                    <ul className="fix-pagination">
                        <li onClick={()=>this.smooth(1)} className={(this.state.activeData && this.state.activeData == 1 ? "active": "")}><a onClick={() => scrollToComponent(this.first, { offset: 0, align: 'top', duration: 1500})}></a></li>
                        <li onClick={()=>this.smooth(2)} className={(this.state.activeData && this.state.activeData == 2 ? "active": "")}><a onClick={() => scrollToComponent(this.second, { offset: 0, align: 'top', duration: 1500})}></a></li>
                        <li onClick={()=>this.smooth(3)} className={(this.state.activeData && this.state.activeData == 3 ? "active": "")}><a onClick={() => scrollToComponent(this.third, { offset: 0, align: 'top', duration: 1500})}></a></li>
                        <li onClick={()=>this.smooth(4)} className={(this.state.activeData && this.state.activeData == 4 ? "active": "")}><a onClick={() => scrollToComponent(this.fourth, { offset: 0, align: 'top', duration: 1500})}></a></li>
                        <li onClick={()=>this.smooth(5)} className={(this.state.activeData && this.state.activeData == 5 ? "active": "")}><a onClick={() => scrollToComponent(this.fifth, { offset: 0, align: 'top', duration: 1500})}></a></li>
                        <li onClick={()=>this.smooth(6)} className={(this.state.activeData && this.state.activeData == 6 ? "active": "")}><a onClick={() => scrollToComponent(this.sixth, { offset: 0, align: 'top', duration: 1500})}></a></li>
                    </ul>
                    <i className="icon-arrow-down"></i>
                    <strong className="title">Explore & <span>BE</span>BOLD</strong>
                </div>
                <main id="main">
                    <Founder  ref={(section) => { this.first = section}} founderData={this.state.ourstories} />
                    <BoldThinking  ref={(section) => { this.second = section}} thinkingData={this.state.ourstories.section2} />
                    <BoldExecution  ref={(section) => { this.third = section}} executionData={this.state.ourstories.section3} />
                    <BeBold  ref={(section) => { this.fourth = section}} boldData={this.state.ourstories.section4} />
                    <BoldMovement  ref={(section) => { this.fifth = section}} boldmovement={this.state.ourstories.section5}/>
                    <InfoBanner  ref={(section) => { this.sixth = section}} section6={this.state.ourstories.section6} section7={this.state.ourstories.section7} />
                </main>
            </div>
        )
    }
}

export default OurStories;