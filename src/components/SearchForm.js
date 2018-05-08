import React, {Component} from 'react';
import {connect} from 'react-redux';
import {domainSearch} from '../actions/domainSearch';
import Results from './Results';

class SearchForm extends Component {

	handleSearch(e) {
		e.preventDefault();
		this.props.dispatch(domainSearch(this.input.value));
		this.input.value='';
	}

  	render() {
 		 		
  		return (
	  		<div className='domain_search'>
	  			<header className='banner' role='banner'>Domain Search</header>
	  			<Results className='results' />
	  			<form onSubmit={this.handleSearch.bind(this)}>
		  			<label aria-label='search' />
		  			<input type='text' ref={(input) => this.input = input}/>
		  			<button type='submit'>Search</button>
	  			</form>
			</div>
		)

	}
}

export default connect(null)(SearchForm);