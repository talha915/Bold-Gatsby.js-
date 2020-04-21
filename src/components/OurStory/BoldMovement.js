import React, { Component } from "react"
import "../../styles/main.css";

class BoldMovement extends Component {

    constructor(props) {
        super(props);
        this.state = {
            boldmoment: ''
        }
    }

    render() {
        return (
            <section className="bebold-movement">
                <img className="circle-shape" src="images/circle-img01.png" width="600" height="600" alt="img description" />
                <img className="circle-shape shape2" src="images/circle-img02.png" width="272" height="600" alt="img description" />
                <div className="container">
                    <div className="section-header">
                        <h2 className="h1 heading-border"><span className="subtitle">The</span> BE<strong>BOLD</strong><br /> <strong>MOVEMENT</strong></h2>
                    </div>
                    <div className="info-holder">
                        <div className="wrap active">
                            <div className="text-box">
                                <h2>Progress above movement.</h2>
                                <p>Being motivated is different than taking action.</p>
                                <p>Progress, any progress, can be an inspiration for future progress. But being bold involves moving beyond “discussing” and “motivating”  and into “doing”.</p>
                            </div>
                        </div>
                        <div className="wrap">
                            <div className="text-box">
                                <h2>Death to Deadlines.</h2>
                                <p>Due dates create anxiety and negativity, which stalls progress. Be Bold creates a mindset that rewards and builds upon progress.</p>
                            </div>
                        </div>
                        <div className="wrap">
                            <div className="text-box">
                                <h2>Focus, Health, Sleep.</h2>
                                <p>The focus is always the end result when making a Bold journey. The progression toward the goal, not the barrier(s) will help you stay focused.</p>
                                <p>The Bold Movement journey relies on a routine of health and sleep to stay focused on forward progress.</p>
                            </div>
                        </div>
                        <div className="wrap">
                            <div className="text-box">
                                <h2>Balanced Progress.</h2>
                                <p>A forward-thinking mindset is one of a balanced daily progression.</p>
                                <p>Every day is an opportunity to make progress. Some progress is more noticeable than others and some progress may not look like progress at first. </p>
                                <p>Balanced progress is a holistic view of where you were and where you want to be and finding the right balance as you move forward</p>
                            </div>
                        </div>
                        <div className="wrap">
                            <div className="text-box">
                                <h2>Get Stuff Done.</h2>
                                <p>When you are progressing forward, you may not realize all that you have accomplished. “Getting stuff done” is a natural byproduct in the Bold Movement progression. The Bold Movement is about doing and accomplishing, not motivating. </p>
                            </div>
                        </div>
                        <div className="wrap">
                            <div className="text-box">
                                <h2>Bold Moves.</h2>
                                <p>What is a Bold Move? A Bold Move is a move that has been on your mind for quite some time but something is holding you back from making it. Usually an inner fear of some sort.</p>
                                <p>A bold move(s) will be personal to each person. The complexity of the Bold Movement will vary. And the success of the bold move will be different for each set of circumstances.</p>
                                <p>The obstacles to bold moves will also vary and may not be obvious at first or throughout the journey. The important thing to keep in mind is that once the forward momentum has been established, then focus on the goal and the progress.</p>
                            </div>
                        </div>
                        <div className="wrap">
                            <div className="text-box">
                                <h2>The Science of Productivity.</h2>
                                <p>Be Bold is about establishing a different mindset to the productivity world as we know it.</p>
                                <p>Be Bold looks at the future of workflow and productivity in a more scientific manner that is focused on progress without the anxiety of deadlines.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default BoldMovement;