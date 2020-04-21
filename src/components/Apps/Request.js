import React, { Component } from 'react';
import "../../styles/main.css";

class Request extends Component {

    constructor(props) {
        super(props);
        this.state = {
            banner: ''
        }
    }

    UNSAFE_componentWillMount() {
        this.setBanner();
    }

    setBanner=()=> {
        this.setState({banner: this.props.request});
    }

    render() {
        return(
            <div className="get-access" style={{backgroundImage: "url(images/img37.jpg)"}}>
				<div className="container">
					<form action="#" className="access-form">
						<div className="input-col">
							<i className="ico icon-tablet-mobile"></i>
							<div className="form-group">
								<label htmlFor="email">{this.state.banner.heading}</label>
								<input id="email" className="form-control bg-dark" type="text" placeholder={this.state.banner.text} />
							</div>
						</div>
						<div className="btn-holder">
							<button className="btn" type="submit">{this.state.banner.buttontext}</button>
						</div>
					</form>
				</div>
			</div>
        )
    }
}

export default Request;