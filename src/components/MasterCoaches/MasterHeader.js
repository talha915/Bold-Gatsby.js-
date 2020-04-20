import React, { Component } from "react"

import "../../styles/main.css";

class MasterHeader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            masterheader: ''
        }
    }

    UNSAFE_componentWillMount() {
        this.setMasterHeader();
    }

    setMasterHeader = () => {
        this.setState({ masterheader: this.props.headerRes });
    }

    getMasterHeaderHeading = () => {
        let data = this.state.masterheader;
        return (
            <div className="section-header">
                <h2 className="h1 heading-border">
                    {data.mainheading}<strong>{data.heading1}</strong>
                </h2>
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.getMasterHeaderHeading()}
            </div>
        )
    }
}

export default MasterHeader;
