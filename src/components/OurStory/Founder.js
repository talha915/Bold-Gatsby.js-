import React, { Component } from "react"
import "../../styles/main.css";

class Founder extends Component {

    constructor(props) {
        super(props);
        this.state = {
            founderResults: ''
        }
    }
    
    UNSAFE_componentWillMount() {
        this.setFounders();
    }

    setFounders=()=> {
        this.setState({founderResults: this.props.founderData});
    }

    getMessage=()=> {
        let data = this.state.founderResults.section1;
        return (
            <div className="holder">
                <div className="heading-holder">
                    <span className="subtitle">{data.organized}</span>
                    <h2 className="h1 heading-border">AIDAN<strong>SALVI</strong></h2>
                </div>
                <div className="text-holder">
                    <p>{data.foundermessage}</p>
                    <p>{data.foundermessage2}</p>
                </div>
            </div>
        )
    }

    render() {
        return (
            <section className="container about-us">
                <div className="header">
                    <h1>{this.state.founderResults.mainheading} <br /> {this.state.founderResults.subheading}</h1>
                </div>
                {this.getMessage()}
            </section>
        )
    }
}

export default Founder;