import React, { Component } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/styles.css';
import "../../styles/main.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);

class Slider extends Component {
    render() {
        return (
            <div className="main-slider">
                <AutoplaySlider bullets={false} play={true} interval={10000} organicArrows={false}>
                    <div className="slide" style={{ backgroundImage: "url(images/slide-img01.jpg)" }}>
                        <div className="container">
                            <div className="caption">
                                <h1 className="heading-border">focus</h1>
                                <strong className="subtitle">Stay focused on what matters.</strong>
                                <p>A bold goal can be small or big, can take weeks or months to complete. But most Bold Moves usually have one small barrier that keeps us from executing on the move.</p>
                                <p>The Be Bold Movement reminds us it is important to say focused on the end result and the goal and not the barrier.</p>
                                <p>The Bold Movement singularizes one impact-focused question that will serve as the foundation for moving forward and staying focused. </p>
                                <div className="btn-holder">
                                    <a href="#" className="btn btn-next">next <i className="icon-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slide" style={{ backgroundImage: "url(images/slide-img02.jpg)" }}>
                        <div className="container">
                            <div className="caption">
                                <h1 className="heading-border">PROGRESS</h1>
                                <strong className="subtitle">Make progress daily.</strong>
                                <p>One of the 3 Pillars of Be Bold Thinking is Forward Progress.</p>
                                <p>Be Bold is NOT about motivation it is about movement. Taking action and forward progress is movement.</p>
                                <p>Do. Don’t just talk about doing. When you move past the discussion stage and into the doing stage, progress is being made.</p>
                                <p>People like Bold Movement thinking because it is progressive and continually challenges you into a forward-thinking mindset.</p>
                                <p>Every day is an opportunity to make progress.</p>
                                <div className="btn-holder">
                                    <a href="#" className="btn btn-next">next <i className="icon-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slide" style={{ backgroundImage: "url(images/slide-img03.jpg)" }}>
                        <div className="container">
                            <div className="caption">
                                <h1 className="heading-border">BOLD MOVES</h1>
                                <strong className="subtitle">Make life changing decisions.</strong>
                                <p>Bold Moves are personal to each person.</p>
                                <p>What defines a Bold Move? <br /> The factor or level of Boldness is very personal. But most Bold Moves have similar characteristics:</p>
                                <p>1) A Bold Move is a move that has been on your mind for quite some time but something is holding you back from execution. Usually the barrier an inner fear of some sort.</p>
                                <p>2) Bold Moves require additional work after taking the first action and take 5-6 months to realize true achievement, although a pillar of Be Bold thinking is not to live by deadlines. True achievement comes at different times for different people and goals. </p>
                                <p>3) Bold moves are pivotal and require one pivotal action to start the momentum. Identifying and conquering the big blocker may be obvious to some or could be hidden to others. </p>
                                <div className="btn-holder">
                                    <a href="#" className="btn btn-next">next <i className="icon-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slide" style={{ backgroundImage: "url(images/slide-img04.jpg)" }}>
                        <div className="container">
                            <div className="caption">
                                <h1 className="heading-border">SURPASS THE FEAR</h1>
                                <strong className="subtitle">Overcome the blocking fear.</strong>
                                <p>One of the 3 Pillars of Be Bold Thinking is to Surpass Fears.</p>
                                <p>Fearless People Think, Speak and Act differently than Fearful People.</p>
                                <p>It’s not the lack of desire but the fundamental fear that prevents us from taking the action to reach our fullest potential. </p>
                                <p>Tackle the inner fear to make a bold decision and take actionable, impactful steps that will be vital to moving beyond the fear. The action is at the center of attacking the fear. </p>
                                <p>You can be fearful and still move forward. And moving forward is to make progress daily.</p>
                                <div className="btn-holder">
                                    <a href="#" className="btn btn-next">next <i className="icon-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slide" style={{ backgroundImage: "url(images/slide-img05.jpg)" }}>
                        <div className="container">
                            <div className="caption">
                                <h1 className="heading-border">REACH THE PINNACLE</h1>
                                <strong className="subtitle">Be your best self.</strong>
                                <p>The bold framework helps support making large changes in your life. These changes will help you become your best self.</p>
                                <p>You will continually tell yourself you don’t know but you will learn. If you learn everyday, you make progress.</p>
                                <p>Do not fear making a mistake. Mistakes are opportunities. </p>
                                <div className="btn-holder">
                                    <a href="#" className="btn btn-next">next <i className="icon-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slide" style={{ backgroundImage: "url(images/slide-img06.jpg)" }}>
                        <div className="container">
                            <div className="caption">
                                <h1 className="heading-border">DEATH TO DEADLINES</h1>
                                <strong className="subtitle">Stay focused on progress not due dates.</strong>
                                <p>One of the 3 Pillars of Be Bold Thinking is that there are No Deadlines.</p>
                                <p>The bold framework helps outline key factors to success and creates a timeline, not a deadline, that is unique and personal to each situation.</p>
                                <p>Everyone progresses at different rates.</p>
                                <p>When you stay focused on progress, there are no due dates.  It is about making actionable and noticeable progress.</p>
                                <div className="btn-holder">
                                    <a href="#" className="btn btn-next">next <i className="icon-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slide" style={{ backgroundImage: " url(images/slide-img07.jpg)" }}>
                        <div className="container">
                            <div className="caption">
                                <h1 className="heading-border">LIVE AN ANXIETY<br /> FREE LIFE</h1>
                                <strong className="subtitle">Feel confident about your moves.</strong>
                                <p>People like Bold movement thinking because it is easy to digest and understand.</p>
                                <p>Bold Movement Thinking has an all-encompassing and holistic focus on executable actions. As you transition to looking at the “larger picture” in a holistic way, the triggers of normal anxiety will be lessened.</p>
                                <p>Do not let others discourage you as you take bold moves. Those that discourage you will trigger the anxiety you are wanting to leave behind.</p>
                                <div className="btn-holder">
                                    <a href="#" className="btn btn-next">next <i className="icon-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slide" style={{ backgroundImage: "url(images/slide-img08.jpg)" }}>
                        <div className="container">
                            <div className="caption">
                                <h1 className="heading-border">FEEL CONFIDENT</h1>
                                <strong className="subtitle">Build confidence with focused execution.</strong>
                                <p>The Be Bold mission is to challenge the conventional thinking, planning, and decision-making process for people that want to change, create change, or to be great. As you encounter and successfully accomplish the change or changes you envisioned, your confidence in yourself and your future will build.</p>
                                <p>People like Bold Movement thinking because it relies on accountability for proper execution. Accountability in turns helps build confidence in your decision to continue to move forward.</p>
                                <p>Bold Movement thinking relies on support network(s) and resources to help understand and execute your Bold Moves.</p>
                                <p>Ask others for help during the journey and conversely share your knowledge with others.</p>
                                <div className="btn-holder">
                                    <a href="#" className="btn btn-next">next <i className="icon-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </AutoplaySlider>
            </div>
        )
    }
}

export default Slider;