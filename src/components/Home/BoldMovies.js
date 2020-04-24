import React, { Component } from 'react';
import Slider from "react-slick";
import "../../styles/main.css";

import { navigate } from "gatsby"


class BoldMovies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bolds: ''
        }
    }

    UNSAFE_componentWillMount() {
        this.setBolds();
    }

    setBolds = () => {
        this.setState({ bolds: this.props.boldData });
    }

    getBoldMovies = () => {
        let data = this.state.bolds.videoarray;
        let result = data.map((items, index) => {
            return (
                <div className="slick-slide" key={index}>
                    <div className="img-box">
                        <img src={items.image} width="326" height="200" alt="img description" />
                        <a href="#" className="btn-play"><i className="icon-play"></i></a>
                        <span className="text">{items.time}</span>
                    </div>
                    <div className="text-box">
                        <h2>{items.name}</h2>
                        <p>{items.text1}<br /> {items.text2}</p>
                    </div>
                </div>
            )
        })
        return result;
    }

    boldPledge=()=> {
        navigate('/boldpledge');
    }

    render() {
        const settings = {
            dots: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
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
            <div>
                <div class="info-block">
                    <img class="circle-shape" src="images/circle-img01.png" width="600" height="600" alt="img description" />
                    <div class="container">
                        <ul class="list">
                            <li>6 Life Sectors</li>
                            <li>25+ Classes</li>
                            <li>All-In-One Platfrom</li>
                            <li>10+ Coaches</li>
                            <li>5 Master Tools</li>
                        </ul>
                    </div>
                </div>
                <section className="bold-movies">
                    <img className="circle-shape" src="images/circle-img03.svg" width="600" height="600" alt="img description" />
                    <div className="container">
                        <div className="section-header">
                            <h2 className="h1 heading-border">
                                <span className="subtitle lowercase">Here the stories of</span>
                                <strong>bold</strong>movies <br />
                                <span className="text lowercase">from others:</span>
                            </h2>
                            <p>The Bold podcast hosted by Aidan Salvi one of our Master Coaches shares the journey and decision made by people from various walks of life in how they made Bold decision in thair path to fulfillment and success and what it took to get here.</p>
                        </div>
                        <div className="play-carousel">
                            
                            <Slider {...settings} className="video-slider">
                                {this.getBoldMovies()}
                            </Slider>
                            
                           
                        </div>
                        <div className="btn-holder center">
                            <a href="#" className="btn btn-border">See the Full Series</a>
                        </div>
                    </div>
                </section>
                <section class="start-coaching">
                    <div class="container">
                        <div class="text-box">
                            <p>Start with a coaching as low as $99/month (billed annually). 100% satisfaction quaranteed.</p>
                        </div>
                        <div class="btn-holder">
                            <a href="#" class="btn" onClick={this.boldPledge}>Get Started</a>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default BoldMovies;