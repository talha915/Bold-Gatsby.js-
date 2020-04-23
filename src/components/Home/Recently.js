import React, { Component } from 'react';

import "slick-carousel/slick/slick.css";
 import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
class Recently extends Component {

    constructor(props) {
        super(props);
        this.state = {
            recently: ''
        }
    }

    UNSAFE_componentWillMount() {
        this.setRecent();
    }

    setRecent=()=> {
        this.setState({recently: this.props.recent})
    }

    getItems=()=> {
        let data = this.state.recently.carouselarray;
        let results = data.map((items, index)=> {
            return(
                <div className="slide" key={index}>
                    <div className="image" style={{backgroundImage: "url(/images/img08.jpg)"}}>

                    </div>
                    <div className="text-box">
                        <h2>{items.heading}</h2>
                        <p>{items.text}<br /> {items.text1}</p>
                        <a href="#" className="btn">{items.buttontext}</a>
                    </div>
                </div>
            )
        })
        return results;
    }

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
          
          };
        return(
            <div className="carousel-holder">
				<div className="container">
					<strong className="heading">{this.state.recently.heading}</strong>
					<div className="carousel">
                        <Slider {...settings}>
                            {this.getItems()}
                        </Slider>
					</div>
				</div>
			</div>
        )
    }
}

export default Recently;