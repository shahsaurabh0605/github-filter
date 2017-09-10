import React, { Component } from "react";
import Data from "./../services/github_api";
import Repositories from "./../components/repositories"
//import {Loading} from "./../components/loading"

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			info: [],
		}
	}

	componentDidMount() {
		Data("").then(res => {
			this.setState({ info: res.data.items })
		})
	}

	render() {
		return this.state.info.length ?
			<div className="row">
				<div className="col s3">
				</div>
				<div className="col s9">
					<ul className="row"> {this.state.info.map(function (item, i) {
						return (
							<Repositories key={i} name={item.full_name} description={item.description} language={item.language} stars={item.stargazers_count} forks={item.forks} avatar={item.owner.avatar_url} />
						)
					})
					}
					</ul>
				</div>
			</div>
			:
			(
				<div className="loading">
					<i className="fa fa-refresh fa-spin fa-3x fa-fw"></i>
				</div>
			)
	}
}

module.exports = App;