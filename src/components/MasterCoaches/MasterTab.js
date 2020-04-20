import React, { Component } from "react"

import "../../styles/main.css";

class MasterTab extends Component {

    constructor(props) {
        super(props);
        this.state = {
            masterTab: ''
        }
    }

    UNSAFE_componentWillMount() {
        this.setMasterTab();
    }

    setMasterTab = () => {
        this.setState({ masterTab: this.props.tabRes });
    }

    getMasterTab = () => {
        let tabs = this.state.masterTab.map((data, index)=> {
            return(
                <li key={index}>
                    <a href="#">
                        {data.categoryname}
                    </a>
                </li>
            )
        });
        return tabs;
    }

    render() {
        return (
            <ul className="filter-nav">
                {this.getMasterTab()}
            </ul>
        )
    }
}

export default MasterTab;
