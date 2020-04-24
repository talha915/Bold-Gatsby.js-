import React, { Component } from "react"
import "../../styles/main.css";

import Slider from "react-slick";
import { navigate } from "gatsby";
class BoldMovies extends Component {

    constructor(props) {
        super(props);
        this.state = {
            boldCoaches: ''
        }
    }

    UNSAFE_componentWillMount() {
        this.setBoldMovies();
    }

    setBoldMovies = () => {
        this.setState({ boldCoaches: this.props.boldMovie });
    }

    boldPledge=()=> {
        navigate('/boldpledge');
    }

    getBoldMovies = () => {
        let data = this.state.boldCoaches.boldmovieslist;
        let result = data.map((items, index) => {
            return (
                <div className="slide" key={index}>
                    <div className="img-box">
                        <img src={items.image} width="326" height="200" alt="img description" />
                        <a href="#" className="btn-play"><i className="icon-play"></i></a>
                        <span className="text">{items.time}</span>
                    </div>
                    <div className="text-box">
                        <h2>{items.name}</h2>
                        <p>{items.text1}<br/> {items.text2}</p>
                    </div>
                </div>
            )
        })
        return result;
    }

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                  }
                },
                {
                  breakpoint: 480,
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
                            <div className="video-slider">
                                <Slider {...settings} className="bold_slider">
                                    {this.getBoldMovies()}
                                </Slider>
                            </div>
                            
                        </div>
                        <div className="btn-holder center">
                            <a href="#" className="btn btn-border">See the Full Series</a>
                        </div>
                    </div>
                </section>
                <section className="start-coaching">
                    <div className="container">
                        <div className="text-box">
                            <p>Start with a coaching as low as $99/month (billed annually). 100% satisfaction quaranteed.</p>
                        </div>
                        <div className="btn-holder">
                            <a href="#" className="btn" onClick={this.boldPledge}>Get Started</a>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}


export default BoldMovies;
