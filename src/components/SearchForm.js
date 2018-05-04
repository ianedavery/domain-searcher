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

	handleSearch(searchClicked) {
		this.setState({
			searchClicked
		});
		this.props.dispatch(domainSearch(this.input.value));
	}

	handleNewSearch(searchClicked) {
		this.setState({
			searchClicked
		});
	}

  	render() {

  		if(this.state.searchClicked) {
  			return (
				<Results newSearch={this.handleNewSearch.bind(this)} />
			)
  		}
 		 		
  		return (
	  		<form onSubmit={this.handleSearch}>
	  			<input type='text' ref={(input) => this.input = input}/>
	  			<button type='button' onClick={this.handleSearch.bind(this)}>Search</button>
			</form>
		)
	}
}

export default connect(null)(SearchForm);