import React, { Component } from "react"
import "../../styles/main.css";
import bgImage from '../../images/circle-img07.svg';

// Data
import masterCoach from '../../Data/master-coaches.json';

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

    UNSAFE_componentWillMount() {
        this.setState({ mastercoaches: JSON.parse(localStorage.getItem('selected')) });
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

    getLessons = () => {
        let data = this.state.mastercoaches.lesson.arrayoflesson;
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

    showSelected=()=> {
        let type = window.location.href.split("#")[1];
    }

    getPopup=()=> {
        return(
            <div class="popup-holder">
                <a href="#" class="btn-close"><i class="icon-cross" onClick={this.popUp}></i></a>
                <div class="popup">
                    <div class="img-holder">
                        <img src="images/img41.jpg" width="931" height="520" alt="img description" />
                        <a class="btn-play" href="#"><i class="icon-play"></i></a>
                        <span class="text">00:00:00 / 00:04:50</span>
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

    popUp=()=> {
        this.setState({showPopup: !this.state.showPopup});
    }

    render() {
        return (
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
                                    <li className={window.location.href.split("#")[1] == "tab-01" ? "active" : ""} ><a href="#tab-01" onClick={this.showSelected}>Overview</a></li>
                                    <li className={window.location.href.split("#")[1] == "tab-02" ? "active" : ""}><a href="#tab-02" onClick={this.showSelected}>Lessons</a></li>
                                    <li className={window.location.href.split("#")[1] == "tab-03" ? "active" : ""}><a href="#tab-03">Q & A</a></li>
                                </ul>
                                <div className="tab-content">
                                    {window.location.href.split("#")[1] == "tab-01" ?
                                        <div id="tab-01" >
                                            {this.overView()}
                                        </div>
                                        :
                                        window.location.href.split("#")[1] == "tab-02" ?
                                            <div id="tab-02">
                                                {this.getLessons()}
                                            </div>
                                            :
                                            <div id="tab-03" >
                                                {this.getQA()}
                                            </div>
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
        )
    }
}


export default MasterDetail;
