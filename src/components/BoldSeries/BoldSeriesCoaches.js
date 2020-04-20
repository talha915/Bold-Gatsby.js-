import React, { Component } from "react"
import "../../styles/main.css";

class BoldSeriesCoaches extends Component {

    constructor(props) {
        super(props);
        this.state = {
            boldCoaches: ''
        }
    }

    UNSAFE_componentWillMount() {
        this.setBoldCoaches();
    }

    setBoldCoaches = () => {
        this.setState({ boldCoaches: this.props.serieCoach });
    }

    getBoldCoaches=()=> {
        let data = this.state.boldCoaches.section1.boldserieslist;
        let result = data.map((items, index)=> {
            return(
                <article className="article" key={index}>
                    <div className="img-box">
                        <img src={items.image} width="488" height="256" alt="img description" />
                        <ul className="avatar-list">
                            <li><a href="#"><img src={items.imageofbutton} width="50" height="50" alt="img description" /></a></li>
                        </ul>
                    </div>
                    <div className="text-box">
                        <h2>{items.heading}</h2>
                        <p>{items.para}</p>
                    </div>
                </article>
            )
        })
        return result;
    }

    render() {
        return (
            <section className="article-section">
                <img className="circle-shape" src="images/circle-img06.svg" width="505" height="505" alt="img description" />
                <div className="container">  
                    <div className="article-holder">
                        {this.getBoldCoaches()}
                    </div>
                </div>
            </section>
        )
    }
}


export default BoldSeriesCoaches;
