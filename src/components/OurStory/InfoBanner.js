import React, { Component } from "react"
import "../../styles/main.css";

class InfoBanner extends Component {

    constructor(props) {
        super(props);
        this.state = {
            info: '',
            banner: ''
        }
    }

    UNSAFE_componentWillMount() {
        this.setInfo();
        this.setBanner();
    }

    setInfo=()=> {
        this.setState({info: this.props.section6});
    }

    setBanner=()=> {
        this.setState({banner: this.props.section7});
    }

    render() {
        return (
            <div>
                <section className="info-section" style={{backgroundImage:  "url(images/circle-img08.svg)"}}>
                    <div className="container">
                        <div className="text-box">
                        <p>{this.state.info.bannerheading}</p>
                        </div>
                    </div>
                </section>

                <section className="banner-section" style={{backgroundImage: "url(images/img07.jpg)"}}>
                    <div className="container">
                        <div className="text-area">
                            <h2 className="h1 heading-border">{this.state.banner.heading}</h2>
                            <span className="subtitle">{this.state.banner.subheading}</span>
                            <div className="btn-holder">
                                <a href="#" className="btn">{this.state.banner.buttonname}</a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default InfoBanner;