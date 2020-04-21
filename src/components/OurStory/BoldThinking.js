import React, { Component } from "react"
import "../../styles/main.css";

class BoldThinking extends Component {

    constructor(props) {
        super(props);
        this.state = {
            thinking: ''
        }
    }

    UNSAFE_componentWillMount() {
        this.setThinking();
    }

    setThinking = () => {
        this.setState({ thinking: this.props.thinkingData });
    }

    getthinkingVideos=()=> {
        let data = this.state.thinking.boldthinkingvideos;
        let videoResults = data.map((items, index)=> {
            return(
                <div className="col" key={index}>
                    <div className="img-box">
                        <img src={items.image} width="387" height="216" alt="img description" />
                    </div>
                    <div className="text-box">
                        <h2>{items.heading}</h2>
                        <p>{items.subheading}</p>
                        <div className="btn-holder">
                            <a href="#" className="btn-play"><i className="ico icon-play"></i> {items.buttonname}</a>
                        </div>
                    </div>
                </div>
            )
        })
        return videoResults;
    }



    render() {
        return (
            <section className="three-columns">
                <img className="circle-shape" src="images/circle-img05.svg" width="600" height="600" alt="img description" />
                <div className="container">
                    <div className="section-header">
                        <h2 className="h1 heading-border"><strong>BOLD</strong>THINKING</h2>
                        <p>{this.state.thinking.subheading}</p>
                    </div>
                    <div className="cols-holder">
                        {this.getthinkingVideos()}
                    </div>
                </div>
            </section>      
        )
    }
}

export default BoldThinking;