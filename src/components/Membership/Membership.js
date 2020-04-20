import React, { Component } from "react"
import "../../styles/main.css";

import membership from '../../Data/Membership.json';

// Components
import MembershipHeader from './MembershipHeader';
import MembershipCard from './MembershipCard';
import MembershipFooter from './MembershipFooter';

class Memberships extends Component {

    constructor(props) {
        super(props);
        this.state = {
            membershipState: ''
        }
    }
    UNSAFE_componentWillMount() {
        this.setMembership();
    }

    setMembership=()=> {
        this.setState({membershipState: membership});
    }

    render() {
        return (
            <main id="main">
                <section className="plan-section">
                    <div className="container">
                        <MembershipHeader headerRes={this.state.membershipState} />
                        <MembershipCard cardRes={this.state.membershipState.section1}/>                   
                    </div>
                </section>
                <MembershipFooter footerRes={this.state.membershipState.section2}/>
            </main>
        )
    }
}    


export default Memberships;
