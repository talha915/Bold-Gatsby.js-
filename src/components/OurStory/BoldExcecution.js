import React, { Component } from "react"
import "../../styles/main.css";

class BoldExecution extends Component {

    constructor(props) {
        super(props);
        this.state = {
            execution: ''
        }
    }

    UNSAFE_componentWillMount() {
        this.setExecution();
    }

    setExecution = () => {
        this.setState({ execution: this.props.executionData });
    }

    getExecutionVideos = () => {
        let data = this.state.execution.boldexecutionvideos;
        let videoResults = data.map((items, index) => {
            return (
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
                <div className="container">
                    <div className="section-header">
                        <h2 className="h1 heading-border"><strong>BOLD</strong>EXECUTION</h2>
                        <p>{this.state.execution.subheading}</p>
                    </div>
                    <div className="cols-holder">
                        {this.getExecutionVideos()}
                    </div>
                </div>
            </section>
        )
    }
}

export default BoldExecution;