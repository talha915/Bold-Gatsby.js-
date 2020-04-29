import React, { Component } from "react"
import "../../styles/main.css";

class BoldMovement extends Component {

    constructor(props) {
        super(props);
        this.state = {
            boldmoment: ''
        }
    }

    componentDidMount() {
        this.setBoldMovement();
    }

    setBoldMovement=()=> {
        this.setState({boldmoment: this.props.boldmovement});
    }

    getBoldMovement=()=> {
        if(this.state.boldmoment) {
            let boldmoment = this.state.boldmoment.thebeboldmomentarray.map((items, index)=> {
                return(
                    <div className="wrap" key={index}>
                        <div className="text-box">
                            <h2>{items.heading}</h2>
                            <p>{items.subheading1}</p>
                            <p>{items.subheading2}</p>
                        </div>
                    </div>
                )
            })
            return boldmoment;
        }
    }


    render() {
        return (
            <section className="bebold-movement">
                <img className="circle-shape" src="images/circle-img01.png" width="600" height="600" alt="img description" />
                <img className="circle-shape shape2" src="images/circle-img02.png" width="272" height="600" alt="img description" />
                <div className="container">
                    <div className="section-header">
                        <h2 className="h1 heading-border"><span className="subtitle">{this.state.boldmoment.heading}</span> BE<strong>BOLD</strong><br /> <strong>{this.state.boldmoment.heading2}</strong></h2>
                    </div>
                    <div className="info-holder">
                        {this.getBoldMovement()}                   
                    </div>
                </div>
            </section>
        )
    }
}

export default BoldMovement;