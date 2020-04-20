import React, { Component } from "react"

import "../../styles/main.css";

class MasterTestimonials extends Component {

    constructor(props) {
        super(props);
        this.state = {
            testimonialsData: ''
        }
    }

    UNSAFE_componentWillMount() {
        this.setMasterTestimonials();
    }

    setMasterTestimonials = () => {
        this.setState({ testimonialsData: this.props.testimonials });
    }

    getTestimonials = () => {
        let data = this.state.testimonialsData.coachreviews;
        let reviews = data.map((items, index)=> {
            return(
                <div className="column" key={index}>
                    <i className="icon-qoute"></i>
                    <div className="head">
                        <div className="img-box">
                            <a href="#">
                                <img src={items.image} width="96" height="96" alt="img description" />
                            </a>
                        </div>
                        <div className="text-box">
                            <strong className="title"><a href="#">{items.coachname}</a></strong>
                            <span className="time text-red">{items.text}</span>
                        </div>
                    </div>
                    <ul className="star-rating">
                        <li><a href="#"><i className="icon-star"></i></a></li>
                        <li><a href="#"><i className="icon-star"></i></a></li>
                        <li><a href="#"><i className="icon-star"></i></a></li>
                        <li><a href="#"><i className="icon-star"></i></a></li>
                        <li><a className="inactive" href="#"><i className="icon-star"></i></a></li>
                    </ul>
                    <p>{items.details}</p>
                </div>
            )
        })
        return reviews;
    }

    render() {
        return (
            <section className="testimonials">
                
                <img className="circle-shape" src="images/circle-img06.svg" width="1003" height="1003" alt="img description" />
                <div className="container">
                    <div className="header">
                        <strong className="heading">{this.state.testimonialsData.heading}<br /> {this.state.testimonialsData.heading1}</strong>
                    </div>
                    <div className="cols-holder">
                        {this.getTestimonials()}
                    </div>
                    <div className="btn-holder center">
                        <a href="#" className="btn btn-sm btn-border">See more</a>
                    </div>
                </div>
            </section>
        )
    }
}

export default MasterTestimonials;
