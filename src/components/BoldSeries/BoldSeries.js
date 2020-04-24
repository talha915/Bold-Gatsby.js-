import React, { Component } from "react"
import "../../styles/main.css";

import boldseries from '../../Data/bold-series.json';
import scrollToComponent from 'react-scroll-to-component';
// Components
import BoldSeriesCoaches from './BoldSeriesCoaches';
import BoldMovies from './BoldMovies';

class BoldSerie extends Component {

    constructor(props) {
        super(props);
        this.state = {
            boldSeries: '',
            activeData: 1
        }
    }

    UNSAFE_componentWillMount() {
        this.setBoldSeries();
    }

    setBoldSeries = () => {
        this.setState({ boldSeries: boldseries });
    }

    smooth=(data)=> {
        this.setState({activeData: data});
    }


    render() {
        return (
            <div>
                <div className="fixed-block">
                    <ul className="fix-pagination">
                        <li onClick={()=>this.smooth(1)} className={(this.state.activeData && this.state.activeData == 1 ? "active": "")}><a onClick={() => scrollToComponent(this.first, { offset: 0, align: 'top', duration: 1500})}></a></li>
                        <li onClick={()=>this.smooth(2)} className={(this.state.activeData && this.state.activeData == 2 ? "active": "")}><a onClick={() => scrollToComponent(this.second, { offset: 0, align: 'top', duration: 1500})}></a></li>
                        <li onClick={()=>this.smooth(3)} className={(this.state.activeData && this.state.activeData == 3 ? "active": "")}><a onClick={() => scrollToComponent(this.third, { offset: 0, align: 'top', duration: 1500})}></a></li>
                    </ul>
                    <i className="icon-arrow-down"></i>
                    <strong className="title">Explore & <span>BE</span>BOLD</strong>
                </div>
                <section className="article-section">
                    <img className="circle-shape" src="images/circle-img06.svg" width="505" height="505" alt="img description" />
                    <div className="container" ref={(section) => { this.first = section}}>
                        <div className="section-header" >
                            <h2 className="h1 heading-border">
                                <strong>BOLDS</strong>ERIES <br />
                                <span className="text text-red lowercase ">with MASTE<strong>RCOACHES</strong></span>
                            </h2>
                            <p>Join a Master Coaching Series to accelerated the process of making you Bold moves.</p>
                        </div>
                    </div>
                </section>
                <BoldSeriesCoaches ref={(section) => { this.second = section}} serieCoach={this.state.boldSeries} />
                <BoldMovies ref={(section) => { this.third = section}} boldMovie={this.state.boldSeries.section2} />
            </div>
        )
    }
}


export default BoldSerie;
