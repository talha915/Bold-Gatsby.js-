import React, { Component } from "react"
import "../../styles/main.css";
import bgImage from '../../images/circle-img07.svg';

// Data
import masterCoach from '../../Data/master-coaches.json';

// Components
import MasterHeader from './MasterHeader';
import MasterTab from './MasterTab';
import MasterTestimonials from "./MasterTestimonials";
import MasterForm from "./MasterForm";

import { Link } from "gatsby"
import { navigate } from "@reach/router"
class MasterCoaches extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mastercoaches: ''
        }
    }
    UNSAFE_componentWillMount() {
        this.setMasterCoaches();
    }

    setMasterCoaches = () => {
        this.setState({ mastercoaches: masterCoach });
    }

    getMasterCoachesCards = () => {
        if (this.state.mastercoaches) {
            let data = this.state.mastercoaches.coachesSection.coacharray;
            let coaches = data.map((items, index) => {
                return (             
                    <div className="col" key={index} onClick={()=>this.selectedCard(items, index)}>
                        <div className="img-box">
                            <a ><img src={items.coachimage} width="385" height="385" alt="img description" /></a>
                        </div>
                        <div className="text-box">
                            <h2><a>{items.coachname}</a></h2>
                            <span className="designation">{items.text}</span>
                        </div>
                    </div>
                )
            })
            return coaches;
        }
    }

    selectedCard=(data, index)=> {
        localStorage.setItem('selected', JSON.stringify(data));
        navigate("/mastercoachdetail#tab-01");
    }

    render() {
        return (
            <main id="main">
                <section className="coaches-section">
                    <img className="circle-shape" src={bgImage} width="505" height="505" alt="img description" />
                    <div className="container">
                        <MasterHeader headerRes={this.state.mastercoaches} />
                        <MasterTab tabRes={this.state.mastercoaches.coachesSection.categoryarray} />
                        <div className="coaches-holder">
                            {this.getMasterCoachesCards()}
                        </div>
                        <div className="btn-holder center">
                            <a href="#" className="btn btn-sm btn-border">See more</a>
                        </div>
                    </div>
                </section>
                <MasterTestimonials testimonials={this.state.mastercoaches.testimonials} />
                <MasterForm />
            </main>
        )
    }
}


export default MasterCoaches;
