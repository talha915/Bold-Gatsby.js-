import React, { Component } from "react"
import "../../styles/main.css";

import boldpledgecommitment from '../../Data/bold-pledge-commitment.json';

// Components

class BoldCommitment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            boldcommitment: ''
        }
    }

    UNSAFE_componentWillMount() {
        this.setBoldCommitment();
    }

    setBoldCommitment = () => {
        this.setState({ boldcommitment: boldpledgecommitment });
    }


    render() {
        return (
            <main id="main">
                <section className="pledge-section commitment">
                    <div className="container">
                        <div className="section-header">
                            <h2 className="h1 heading-border">
                                <strong className="subtitle lowercase">The</strong>
                                <strong>BOLD</strong>PLEDGE
							<span className="text text-red">COMMITMENT</span>
                            </h2>
                            <p>{this.state.boldcommitment.detail}</p>
                        </div>
                        <form action="#">
                            <div className="heading-holder">
                                <h2>Pledge created: <strong>#312</strong></h2>
                            </div>
                            <div className="input-column">
                                <div className="col">
                                    <div className="form-group">
                                        <label htmlFor="email">{this.state.boldcommitment.text1}</label>
                                        <input id="email" className="form-control" type="text" placeholder={this.state.boldcommitment.text2} />
                                        <input className="form-control" type="text" placeholder={this.state.boldcommitment.text3} />
                                        <input className="form-control" type="text" placeholder={this.state.boldcommitment.text4} />
                                    </div>
                                </div>
                            </div>
                            <div className="btn-holder center">
                                <button className="btn" type="submit">{this.state.boldcommitment.button}</button><br />
                                <a href="$" className="btn btn-sm btn-border">{this.state.boldcommitment.text5}</a>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
        )
    }
}


export default BoldCommitment;
