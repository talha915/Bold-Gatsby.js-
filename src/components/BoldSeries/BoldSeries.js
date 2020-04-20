import React, { Component } from "react"
import "../../styles/main.css";

import boldseries from '../../Data/bold-series.json';

// Components
import BoldSeriesCoaches from './BoldSeriesCoaches';
import BoldMovies from './BoldMovies';

class BoldSerie extends Component {

    constructor(props) {
        super(props);
        this.state = {
            boldSeries: ''
        }
    }

    UNSAFE_componentWillMount() {
        this.setBoldSeries();
    }

    setBoldSeries = () => {
        this.setState({ boldSeries: boldseries });
    }


    render() {
        console.log("Series: ", this.state.boldSeries);
        return (
            <section className="article-section">
                <img className="circle-shape" src="images/circle-img06.svg" width="505" height="505" alt="img description" />
                <div className="container">
                    <div className="section-header">
                        <h2 className="h1 heading-border">
                            <strong>BOLDS</strong>ERIES <br />
                            <span className="text text-red lowercase ">with MASTE<strong>RCOACHES</strong></span>
                        </h2>
                        <p>Join a Master Coaching Series to accelerated the process of making you Bold moves.</p>
                    </div>
                    <BoldSeriesCoaches serieCoach={this.state.boldSeries}/>
                    <BoldMovies boldMovie={this.state.boldSeries.section2}/>
                </div>
            </section>
        )
    }
}


export default BoldSerie;
