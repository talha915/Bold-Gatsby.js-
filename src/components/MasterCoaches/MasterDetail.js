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
            mastercoaches: ''
        }
    }

    componentDidMount() {
        this.setState({mastercoaches: JSON.parse(localStorage.getItem('selected'))});
    }

    render() {
        console.log("Here Data: ", this.state.mastercoaches);
        return (
            <section class="coaches-info">
                <img class="circle-shape" src="images/circle-img10.svg" width="505" height="505" alt="img description" />
                <div class="container">
                    <div class="section-header">
                        <h1 class="heading-border">master<strong>coach</strong></h1>
                    </div>
                    <div class="detail-holder">
                        <div class="img-col">
                            <div class="img-box">
                                <img src="images/img22.jpg" width="385" height="385" alt="img description" />
                            </div>
                            <a href="#" class="btn-watch">Watch trailer</a>
                        </div>
                        <div class="text-col">
                            <div class="head">
                                <div class="title-holder">
                                    <h2>Emily lee</h2>
                                    <span class="designation">coach</span>
                                </div>
                                <div class="btn-holder">
                                    <a href="#" class="btn btn-border">Sample Play Lesson 1</a>
                                </div>
                            </div>
                            <div class="tabset-holder">
                                <ul class="tabset">
                                    <li class="active"><a href="#tab-01">Overview</a></li>
                                    <li><a href="#tab-02">Lessons</a></li>
                                    <li><a href="#tab-03">Q & A</a></li>
                                </ul>
                                <div class="tab-content">
                                    <div id="tab-01" style={{display: "none"}}>
                                        <h3>Header for overview</h3>
                                        <p>Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna.</p>
                                        <p>Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi. Aliquam erat ac ipsum. Integer aliquam purus. Quisque lorem tortor fringilla sed.</p>
                                        <p>Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi. Aliquam erat ac ipsum. Integer aliquam purus. Quisque lorem tortor fringilla sed. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna.</p>
                                        <p>Mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi. Aliquam erat ac ipsum. Integer aliquam purus. Quisque lorem tortor fringilla sed.</p>
                                    </div>
                                    <div id="tab-02" style={{display: "none"}}>
                                        <article class="lesson-article">
                                            <div class="content">
                                                <div class="img-box">
                                                    <img src="images/img09.jpg" width="264" height="185" alt="img description" />
                                                    <span class="text">00:00:00 / 00:04:50</span>
                                                </div>
                                                <div class="text-box">
                                                    <h3>Lorem ipsum dolor?</h3>
                                                    <strong class="subtitle">LESSON 1</strong>
                                                    <p>Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies.</p>
                                                </div>
                                            </div>
                                        </article>
                                        <article class="lesson-article">
                                            <div class="content">
                                                <div class="img-box">
                                                    <img src="images/img10.jpg" width="264" height="185" alt="img description" />
                                                    <span class="text">00:00:00 / 00:04:50</span>
                                                </div>
                                                <div class="text-box">
                                                    <h3>Lorem ipsum dolor?</h3>
                                                    <strong class="subtitle">LESSON 2</strong>
                                                    <p>Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies.</p>
                                                </div>
                                            </div>
                                        </article>
                                        <article class="lesson-article">
                                            <div class="content">
                                                <div class="img-box">
                                                    <img src="images/img11.jpg" width="264" height="185" alt="img description" />
                                                    <span class="text">00:00:00 / 00:04:50</span>
                                                </div>
                                                <div class="text-box">
                                                    <h3>Lorem ipsum dolor?</h3>
                                                    <strong class="subtitle">LESSON 2</strong>
                                                    <p>Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies.</p>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                    <div id="tab-03" style={{display: "none"}}>
                                        <div class="que-ans">
                                            <h3>Lorem ipsum dolor?</h3>
                                            <p>Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna.</p>
                                        </div>
                                        <div class="que-ans">
                                            <h3>Etia, ullamcorper?</h3>
                                            <p>Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna.</p>
                                        </div>
                                        <div class="que-ans">
                                            <h3>Maecenas malesuada elit?</h3>
                                            <p>Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Ut molestie a, ultricies porta urna. Lorem ipsum dolor sit amet enim. </p>
                                        </div>
                                        <div class="que-ans">
                                            <h3>Carabitur et ligula?</h3>
                                            <p> Ut molestie a, ultricies porta urna.Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}


export default MasterDetail;
