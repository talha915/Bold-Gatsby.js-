import React, { Component } from 'react';
import "../../styles/main.css";

import index from '../../Data/index.json';

import Sliders from './Slider';
import OurStories from '../OurStory/OurStories';
import Recently from './Recently';
import BoldMovies from './BoldMovies';

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

    setHome = () => {
        this.setState({ homeData: index });
    }

    render() {
        return (
            <div>       
                <Sliders />
                <OurStories />
                <Recently recent={this.state.homeData.section8} />
                <BoldMovies boldData={this.state.homeData.sectionboldmovies} />
            </div>
        )
    }
}

export default Home;