import React, { Component } from 'react';
import "../../styles/main.css";

import index from '../../Data/index.json';

import Slider from './Slider';
import OurStories from '../OurStory/OurStories';
import Recently from './Recently';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            homeData: ''
        }
    }

    UNSAFE_componentWillMount() {
        this.setHome();
    }

    setHome=()=> {
        this.setState({homeData: index});
    }

    render() {
        return(
            <div>
                <Slider />
                <OurStories />
                <Recently recent={this.state.homeData.section8}/>
            </div>
        )
    }
}

export default Home;