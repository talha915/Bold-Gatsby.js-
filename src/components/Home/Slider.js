import React, { Component } from 'react';
import Slider from "react-slick";
import "../../styles/main.css";


class Sliders extends Component {

    constructor(props) {
        super(props);
        this.state = {
            slidesData: ''
        }
    }

    componentDidMount() {
        this.setSlides();
    }

    setSlides = () => {
        this.setState({ slidesData: this.props.slides });
    }

    getSlides = () => {
        if (this.state.slidesData) {
            let slide = this.state.slidesData.map((items, index) => {
                return (
                    <div className="slick-slide" key={index}>
                        <div className="image">
                            <img src={items.image} alt="Image description" />
                        </div>
                        <div className="container">
                            <div className="caption">
                                <h1 className="heading-border">{items.heading}</h1>
                                <strong className="subtitle">{items.subtitle}</strong>
                                {items.paras.map((para, i) => {
                                    return (
                                        <p key={Math.random()}>
                                            {para.para}
                                        </p>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                )
            })
            return slide;
        }

    }

    render() {

        const settings = {
            dots: true,
            infinite: true,
            fade: true,
            infinite: true,
            autoplay: true,
            pauseOnHover: false,
            dots: false,
            arrows: true,
            appendArrows: ".slick-paging",
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            PauseOnHover: false,
            adaptiveHeight: true,
            rows: 0,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
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
            ]
        };
        return (
            <div className="main-slider-area">
                <div className="main-slider">
                    <Slider {...settings}>
                        {this.getSlides()}
                    </Slider>
                </div>
                <div className="slick-paging"></div>
            </div>
        )
    }
}

export default Sliders;