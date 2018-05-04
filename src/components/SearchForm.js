import React, {Component} from 'react';
import {connect} from 'react-redux';
import {domainSearch} from '../actions/domainSearch';

class SearchForm extends Component {

	componentDidMount(domain) {
		this.props.dispatch(domainSearch('hellonast.com'));
	}
  	render() {
  		
  		if(this.props.available === false) {
  			return (
  				<div>{this.props.domain} is not available</div>
  			);
  		}

	    return (
	      <div>
	        {this.props.domain} is available
	      </div>
	    );
  	}
}

const mapStateToProps = state => {
	return {
		domain: state.domain.domain.domain
	};
};

export default connect(mapStateToProps)(SearchForm);