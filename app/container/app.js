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
			(<ul className="collection"> {this.state.info.map(function (item, i) {
				return (
							<Repositories key = {i} name = {item.name} description = {item.description} language = {item.language} stars = {item.stargazers_count} forks = {item.forks} avatar = {item.owner.avatar_url}/>	
					)
				})
				 }
			</ul>)
			:
			(
				<div className="loading">
					<i className="fa fa-refresh fa-spin fa-3x fa-fw"></i>
				</div>
			)
	}
}

module.exports = App;