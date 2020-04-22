import React, { Component } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
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
                <div className="slide" style={{backgroundImage: 'images/img08.jpg' }} key={index}>
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
        console.log("Prop: ", this.state.recently);
        return(
            <div className="carousel-holder">
				<div className="container">
					<strong className="heading">{this.state.recently.heading}</strong>
					<div className="carousel">
                        <AwesomeSlider bullets={false}>
                            {this.getItems()}
                        </AwesomeSlider>
					</div>
				</div>
			</div>
        )
    }
}

export default Recently;