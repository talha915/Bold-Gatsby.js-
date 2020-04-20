import React, { Component } from "react"

import "../../styles/main.css";

class MembershipHeader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            membershipheader: ''
        }
    }

    UNSAFE_componentWillMount() {
        this.setMembershipHeader();
    }

    setMembershipHeader=()=> {
        this.setState({membershipheader: this.props.headerRes});
    }

    getMembershipHeader=()=> {
        let data = this.state.membershipheader;
        return(
            <div className="section-header">
                <h2 className="h1 heading-border">
                    <strong>{data.mainheading}</strong>{data.heading1}
					<span className="text text-red">{data.furtherheading}</span>
                </h2>
                <p>{data.detail}</p>
            </div>
        )
    }

    render() {
        return(
            <div>
                {this.getMembershipHeader()}
            </div>
        )
    }
}

export default MembershipHeader;
