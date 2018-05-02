import React, {Component} from 'react';
import {connect} from 'react-redux';
import {domainSearch} from '../actions/domainSearch';

class SearchForm extends Component {

	componentDidMount(domain) {
		this.props.dispatch(domainSearch('fartqueens.com'));
	}

  	render() {
	    return (
	      <div>
	        hello
	      </div>
	    );
  	}
}

/*const mapStateToProps = state => {
	return {
		domain: state.domain
	};
};*/

export default connect(null)(SearchForm);