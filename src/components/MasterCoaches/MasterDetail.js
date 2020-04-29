import React, { Component } from "react"
import "../../styles/main.css";
import bgImage from '../../images/circle-img07.svg';

// Data
import masterCoach from '../../Data/master-coaches.json';
import { navigate } from "@reach/router";
import { globalHistory } from "@reach/router";
// Components

class MasterDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mastercoaches: '',
            showType: 0,
            showPopup: false
        }
    }

    showType;

    componentDidMount() {
        this.setState({ mastercoaches: JSON.parse(localStorage.getItem('selected')) });
    }

    UNSAFE_componentWillMount() {
        window.scrollTo(0,0);
    }


    showOverview = () => {
        this.setState({ showType: 1 });
    }

    headSet = () => {
        let data = this.state.mastercoaches;
        return (
            <div className="head">
                <div className="title-holder">
                    <h2>{data.coachname}</h2>
                    <span className="designation">{data.text}</span>
                </div>
                <div className="btn-holder">
                    <a href="#" className="btn btn-border">Sample Play Lesson 1</a>
                </div>
            </div>
        )
    }

    overView = () => {
        if(this.state.mastercoaches) {
            window.scrollTo(0,0);
            let data = this.state.mastercoaches.Overview;
            return (
                <div>
                    <h3>{data.heading}</h3>
                    <p>{data.detail}</p>
                    <p>{data.detail1}</p>
                    <p>{data.detail2}</p>
                    <p>{data.detail3}</p>
                </div>
            )
        }
    }

    getLessons = () => {
        let data = this.state.mastercoaches.lesson.arrayoflesson;
        window.scrollTo(0,0);
        let lessons = data.map((items, index) => {
            return (
                <article className="lesson-article" key={index}>
                    <div className="content">
                        <div className="img-box">
                            <img src={items.image} width="264" height="185" alt="img description" />
                            <span className="text">{items.timefram}</span>
                        </div>
                        <div className="text-box">
                            <h3>{items.heading}</h3>
                            <strong className="subtitle">{items.subheading}</strong>
                            <p>{items.detail}</p>
                        </div>
                    </div>
                </article>
            )
        })
        return lessons;
    }

    getQA = () => {
        let data = this.state.mastercoaches.qandaa.overviewarray;
        window.scrollTo(0,0);
        let questions = data.map((items, index) => {
            return (
                <div className="que-ans">
                    <h3>{items.heading}</h3>
                    <p>{items.detail}</p>
                </div>
            )
        })
        return questions;
    }

    showSelected = () => {
        let type = globalHistory.location.hash;
        window.scrollTo(0,0);
    }

    getPopup = () => {
        window.scrollTo(0,0);
        return (
            <div class="popup-holder">
                <a class="btn-close"><i class="icon-cross" onClick={this.popUp}></i></a>
                <div class="popup">
                    <div class="img-holder">
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/LKFuXETZUsI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div class="text-holder">
                        <div class="text-box">
                            <h3>John Doe</h3>
                            <h2>Class One</h2>
                            <span class="designation">COACHES</span>
                        </div>
                        <div class="btn-holder">
                            <a href="#" class="btn btn-border">Explore the Class</a>
                            <a href="#" class="btn btn-border">Share the Trailer</a>
                            <a href="#" class="btn">Book Discovery Call</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    popUp = () => {
        navigate("/mastercoachdetail#tab-01");
        this.setState({ showPopup: !this.state.showPopup });
    }

    render() {
        window.scrollTo(0, 0);
        return (
            <div className="main-block">
                <section className="coaches-info">
                    <img className="circle-shape" src="images/circle-img10.svg" width="505" height="505" alt="img description" />
                    <div className="container">
                        <div className="section-header">
                            <h1 className="heading-border">master<strong>coach</strong></h1>
                        </div>
                        <div className="detail-holder">
                            <div className="img-col">
                                <div className="img-box">
                                    <img src={this.state.mastercoaches.coachimage} width="385" height="385" alt="img description" />
                                </div>
                                <a className="btn-watch" onClick={this.popUp}>Watch trailer</a>
                            </div>
                            <div className="text-col">
                                {this.headSet()}
                                <div className="tabset-holder">
                                    <ul className="tabset">
                                        <li className={globalHistory.location.hash == "#tab-01" ? "active" : ""} ><a href="#tab-01" onClick={this.showSelected}>Overview</a></li>
                                        <li className={globalHistory.location.hash == "#tab-02" ? "active" : ""}><a href="#tab-02" onClick={this.showSelected}>Lessons</a></li>
                                        <li className={globalHistory.location.hash == "#tab-03" ? "active" : ""}><a href="#tab-03">Q & A</a></li>
                                    </ul>
                                    <div className="tab-content">
                                        {globalHistory.location.hash == "#tab-01" ?
                                            <div id="tab-01" >
                                                {this.overView()}
                                            </div>
                                            :
                                            globalHistory.location.hash == "#tab-02" ?
                                                <div id="tab-02">
                                                    {this.getLessons()}
                                                </div>
                                                :
                                                globalHistory.location.hash == "#tab-03" ?
                                                    <div id="tab-03" >
                                                        {this.getQA()}
                                                    </div>
                                                    : ""
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {this.state.showPopup && this.state.showPopup ?
                        <div>
                            {this.getPopup()}
                        </div>
                        : ''
                    }
                </section>
                <section class="contact-form">
                    <div class="container">
                        <div class="text-area">
                            <h2 class="h1 heading-border lowercase">Book a Discovery Call.</h2>
                            <h3>Want to explore the possibilities?</h3>
                            <a href="#" class="btn">book now</a>
                        </div>
                        <form action="#" class="form-area">
                            <div class="form-group">
                                <label for="name">Name:</label>
                                <input id="name" class="form-control" type="text" placeholder="Enter your name..." />
                            </div>
                            <div class="form-group">
                                <label for="email">Email:</label>
                                <input id="email" class="form-control" type="email" placeholder="Enter your email..." />
                            </div>
                            <div class="form-group">
                                <label for="phone">Phone:</label>
                                <input id="phone" class="form-control" type="text" placeholder="Enter your phone..." />
                            </div>
                            <div class="form-group">
                                <label for="note">Notes:</label>
                                <textarea id="note" class="form-control" placeholder="Enter your notes..."></textarea>
                            </div>
                            <div class="form-group">
                                <label for="contact">Best time to contact:</label>
                                <div class="input-row">
                                    <input id="contact" class="form-control" type="text" placeholder="04-04-2020" />
                                    <input class="form-control" type="text" placeholder="10:00 AM" />
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        )
    }
}


export default MasterDetail;
