import React, { Component } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import "../../styles/main.css";

class Slider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sliders: ''
        }
    }

    UNSAFE_componentWillMount() {
        this.setSliderData();
    }

    setSliderData=()=> {
        this.setState({sliders: this.props.sliderData});
    }

    getSliderImages=()=>{
        let data = this.state.sliders.slider;
        let slides = data.map((items, index)=> {
            return(
                <div className="slide" key={index}>
                    <div className="img-holder">
                        <img src={items.image} width="285" height="500" alt="img description" />
                    </div>
                </div>
            )
        })
        return slides;
    }


    render() {
        return (
            <section className="app-section">
                <img className="circle-shape" src="images/circle-img09.svg" width="505" height="505" alt="img description" />
                <div className="container">
                    <div className="section-header">
                        <h2 className="h1 heading-border">
                            BE<strong>BOLD</strong>MOBILE<strong>APP</strong>
                        </h2>
                        <p>Connect with coaches, download videos, see support files and more from our mobile app.</p>
                    </div>
					<div className="app-slider">
                        <div className="slideset">
                            <AwesomeSlider>
                                {this.getSliderImages()}
                            </AwesomeSlider>                          
                        </div>
                        <a href="#" className="btn-prev"><i className="icon-arrow-prev"></i></a>
                        <a href="#" className="btn-next"><i className="icon-arrow-next"></i></a>
                    </div>
                    <div className="btn-holder">
                        <a className="btn-app" href="#"><img src={this.state.sliders.appstoreimage} width="120" height="40" alt="appstore" /></a>
                        <a className="btn-app google-play" href="#"><img src={this.state.sliders.googleplayimage} width="135" height="40" alt="googleplay" /></a>
                    </div>
                </div>
            </section>
        );
    }
}

export default Slider;