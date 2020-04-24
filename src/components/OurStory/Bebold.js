import React, { Component } from "react"
import "../../styles/main.css";

class BeBold extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bebold: ''
        }
    }

    UNSAFE_componentWillMount() {
        this.setBeBold();
    }

    setBeBold = () => {
        this.setState({ bebold: this.props.boldData });
    }

    getList=()=> {
        let data = this.state.bebold.beboldarray;
        let results = data.map((items, index)=> {
            return(
                <li key={index} className={index===2 ? "active" : ""}>{items.detail}</li>
            )
        })
        return results;
    }

   
    render() {
        return (
            <section className="container bebold-section">
				<div className="header">
					<h2 className="h1 heading-border">Be<strong>bold</strong></h2>
					<span className="subtitle">{this.state.bebold.subheading}</span>
				</div>
				<ol className="info">
					{this.getList()}
				</ol>
			</section>
        )
    }
}

export default BeBold;