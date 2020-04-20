import React, { Component } from "react"

import "../../styles/main.css";

class MembershipFooter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            membershipfooter: ''
        }
    }

    UNSAFE_componentWillMount() {
        this.setMembershipFooter();
    }

    setMembershipFooter = () => {
        this.setState({ membershipfooter: this.props.footerRes});
    }

    getMembershipFooter = () => {
        let data = this.state.membershipfooter;
        return (
            <div className="section" style={{ backgroundImage: "url(images/circle-img08.svg)" }}>
                <div className="container">
                    <p>{data.bannerheading1}<strong className="text-red">{data.bannerheading2}</strong>{data.bannerheading3}
					<strong className="text-red"><span>{data.bannerheading4}</span>{data.bannerheading5}</strong> <strong><span>{data.bannerheading6}</span>{data.bannerheading7}</strong></p>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.getMembershipFooter()}
            </div>
        )
    }
}

export default MembershipFooter;
