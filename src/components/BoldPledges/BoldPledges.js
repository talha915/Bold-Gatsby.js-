import React, { Component } from "react"
import "../../styles/main.css";

import boldpledges from '../../Data/bold-pledge.json';

// Components

class BoldPledges extends Component {

    constructor(props) {
        super(props);
        this.state = {
            boldpledge: ''
        }
    }

    UNSAFE_componentWillMount() {
        this.setBoldSeries();
    }

    setBoldSeries=()=> {
        this.setState({ boldpledge: boldpledges });
    }

	getImpactOptions=()=> {
		let data = this.state.boldpledge.form.choicedropdown.boldseries;
		let results = data.map((items, index)=> {
			return(
				<option key={index}>{items.fieldtitle}</option>
			)
		})
		return results;
	}

	getTimeFrame=()=> {
		let data = this.state.boldpledge.form.timeframe.timeframearray;
		let results = data.map((items, index)=> {
			return(
				<label className="custom-radio" key={index}>
					<input id="timeframe" type="radio" name="readio" />
					<span className="form-control label-text">{items.fieldtitle}</span>
				</label>
			)
		})
		return results;
	}

	getCommitmentProgress=()=> {
		let data = this.state.boldpledge.form.CommitmenttoProgress.CommitmenttoProgress;
		let results = data.map((items, index)=> {
			return(
				<input key={index} className="form-control" type="text" placeholder={items.fieldtitle} />
			)
		})
		return results;
	}

	pledgeCommitment=()=> {
		window.location.pathname = "/boldpledgecommitment";
	}

    render() {
        return (
            <section className="pledge-section">
				<div className="container">
					<div className="section-header">
						<h2 className="h1 heading-border">
							<strong className="subtitle lowercase">{this.state.boldpledge.mainheading}</strong>
							<strong>BOLD</strong>PLEDGE
						</h2>
						<p>{this.state.boldpledge.detail1}</p>
					</div>
					<div className="text-area">
						<p>The first step to making <strong>BOLD</strong>MOVES is take the <strong>BOLD</strong>PLEDGE to act and start changing your mindset.</p>
					</div>
					<form action="#">
						<div className="form-holder">
							<div className="col">
								<div className="form-group">
									<label htmlFor="choice">{this.state.boldpledge.form.choicedropdown.heading}</label>
									<div className="select-holder">
										<select id="choice" className="form-control custom-select">
											{this.getImpactOptions()}
										</select>
									</div>
								</div>
							</div>
							<div className="col">
								<div className="form-group">
									<label htmlFor="timeframe">{this.state.boldpledge.form.timeframe.heading}</label>
									{this.getTimeFrame()}
								</div>
							</div>
							<div className="col">
								<div className="form-group">
									<label htmlFor="commitment">{this.state.boldpledge.form.CommitmenttoProgress.heading}</label>
									{this.getCommitmentProgress()}
								</div>
							</div>
						</div>
						<div className="form-holder">
							<div className="col">
								<div className="form-group">
									<label htmlFor="name">{this.state.boldpledge.form.name_field.heading}</label>
									<input id="name" className="form-control" type="text" placeholder={this.state.boldpledge.form.name_field.textfeild} />
								</div>
							</div>
							<div className="col">
								<div className="form-group">
									<label htmlFor="mail">{this.state.boldpledge.form.email_field.heading}</label>
									<input id="mail" className="form-control" type="email" placeholder={this.state.boldpledge.form.email_field.textfeild} />
								</div>
							</div>
							<div className="col">
								<div className="form-group">
									<label htmlFor="phone">{this.state.boldpledge.form.phone_field.heading}</label>
									<input id="phone" className="form-control" type="text" placeholder={this.state.boldpledge.form.phone_field.textfeild} />
								</div>
							</div>
						</div>
						<div className="form-holder">
							<div className="col">
								<div className="form-group">
									<label htmlFor="sms">{this.state.boldpledge.form.notifyme.heading}</label>
									<input id="sms" className="form-control" type="text" placeholder={this.state.boldpledge.form.notifyme.textfeild} />
								</div>
							</div>
						</div>
						<div className="btn-holder center">
							<a className="btn" onClick={()=>this.pledgeCommitment()} style={{cursor: "pointer"}}>{this.state.boldpledge.form.button}</a>
						</div>
					</form>
				</div>
			</section>
        )
    }
}


export default BoldPledges;
