import React, {Component} from 'react';
import {connect} from 'react-redux';

class Results extends Component {

  	render() {

  		let results;

  		if(this.props.domain.domain.available === false) {
  			results = 
  					<div>{this.props.domain.domain.domain} is not available</div>;
  		}

	    if(this.props.domain.domain.available) {
	    	results = 
		        	<div>{this.props.domain.domain.domain} is available</div>;
	    }

	    if(this.props.domain.domain.code === 'INVALID_BODY') {
	    	results =
		        	<div>The domain you've entered does not meet the correct syntax criteria.<br/>Please search again.</div>;
    	}

	    if(this.props.domain.domain.code === 'UNSUPPORTED_TLD') {
	    	results =
		        	<div>The top level domain you choosen in not supported.<br/>Please search again.</div>;
	    }

	    if(this.props.domain.domain.code === 'INVALID_CHARACTERS') {
	    	results = 
		        	<div>The domain you've entered contains invalid characters.<br/>Please search again.</div>;
	    }

	    return (
	    	<div className='results'>{results}</div>
    	)

  	}
}

const mapStateToProps = state => {
	return {
		domain: state.domain
	};
};

export default connect(mapStateToProps)(Results);