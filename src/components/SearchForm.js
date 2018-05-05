import React, {Component} from 'react';
import {connect} from 'react-redux';
import {domainSearch} from '../actions/domainSearch';
import Results from './Results';

class SearchForm extends Component {

	constructor(props) {
		super(props);
		this.state = {
			searchClicked: false
		}
	}

	handleView(searchClicked) {
		this.setState({
			searchClicked: true
		});
	}

	handleSearch() {
		this.props.dispatch(domainSearch(this.input.value));
		this.handleView();
	}

	handleNewSearch(searchClicked) {
		this.setState({
			searchClicked: false
		});
	}

  	render() {

  		if(this.state.searchClicked) {
  			return (
				<Results newSearch={this.handleNewSearch.bind(this)} />
			)
  		}
 		 		
  		return (
	  		<div>
	  			<label aria-label='search' />
	  			<input type='text' ref={(input) => this.input = input}/>
	  			<button type='button' onClick={this.handleSearch.bind(this)}>Search</button>
			</div>
		)
	}
}

export default connect(null)(SearchForm);