import React, { Component } from 'react';
import Slider from "react-slick";
import "../../styles/main.css";

class Sliders extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sliders: ''
        }
    }

    UNSAFE_componentWillMount() {
        this.setSliderData();
    }

    setSliderData = () => {
        this.setState({ sliders: this.props.sliderData });
    }

    getSliderImages = () => {
        let data = this.state.sliders.slider;
        let slides = data.map((items, index) => {
            return (
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
        const settings = {
            dots: true,
            infinite: true,
            rows: 0,
            speed: 1000,
            slidesToShow: 4,
            slidesToScroll: 1,
            PauseOnHover: false,
            adaptiveHeight: true,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 375,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        };
        return (
            <section className="app-section">

                <img className="circle-shape" src="/images/circle-img09.svg" width="505" height="505" alt="img description" />
                <div className="container">
                    <div className="section-header">
                        <h2 className="h1 heading-border">
                            BE<strong>BOLD</strong>MOBILE<strong>APP</strong>
                        </h2>
                        <p>Connect with coaches, download videos, see support files and more from our mobile app.</p>
                    </div>
                    <div className="app-slider">
                        <div className="slideset">
                            <Slider {...settings} className="app_slider">
                                {this.getSliderImages()}
                            </Slider>
                        </div>
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

export default Sliders;