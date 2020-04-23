import React, { Component } from "react"

import "../../styles/main.css";

class MembershipCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            membershipCard: ''
        }
    }

    UNSAFE_componentWillMount() {
        this.setMembershipCard();
    }

    setMembershipCard = () => {
        this.setState({ membershipCard: this.props.cardRes });
    }

    getMembershipCard = () => {
        let memberCards = this.state.membershipCard.membershipplanarray.map((data, index) => {
            return (
                <div className="column" key={index}>
                    <h2>{data.heading}</h2>
                    <p>{data.detail}</p>
                    <strong className="price">{data.textprice1}</strong>
                    <strong className="price">{data.textprice2}</strong>
                    <div className="holder">
                        <ul className="check-list">
                            <li>{data.property1}</li>
                            <li>{data.property2}</li>
                            <li>{data.property3}</li>
                        </ul>
                    </div>
                    <a className="btn" onClick={()=>this.memberShip()}>{data.buttontext}</a>
                </div>
            )
        })
        return memberCards;
    }

    memberShip=()=> {
        window.location.pathname = "/boldpledge";
    }

    render() {
        return (
            <div className="plan-holder">
                {this.getMembershipCard()}
            </div>
        )
    }
}

export default MembershipCard;
