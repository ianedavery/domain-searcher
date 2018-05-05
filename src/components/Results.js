import React, {Component} from 'react';
import {connect} from 'react-redux';

class Results extends Component {

  	render() {

  		if(this.props.domain.domain.available === false) {
  			return (
  				<div>
  					<div>{this.props.domain.domain.domain} is not available</div>
  					<button type='button' onClick={() => this.props.newSearch()}>Search Again</button>
				</div>
  			);
  		}

	    if(this.props.domain.available)
	    	return (
		      <div>
		        <div>{this.props.domain.domain.domain} is available</div>
				<button type='button' onClick={() => this.props.newSearch()}>Search Again</button>
		      </div>
		    );

	    if(this.props.domain.domain.code === 'INVALID_BODY') {
	    	return (
		      	<div>
		        	<div>The domain you've entered does not meet the correct syntax criteria. Please search again.</div>
					<button type='button' onClick={() => this.props.newSearch()}>Search Again</button>
		      	</div>	
    		)
	    }

	    if(this.props.domain.domain.code === 'UNSUPPORTED_TLD') {
	    	return (
		      	<div>
		        	<div>The top level domain you choosen in not supported. Please search again.</div>
					<button type='button' onClick={() => this.props.newSearch()}>Search Again</button>
		      	</div>	
    		)
	    }

	    if(this.props.domain.domain.code === 'INVALID_CHARACTERS') {
	    	return (
		      	<div>
		        	<div>The domain you've entered contains invalid characters. Please search again.</div>
					<button type='button' onClick={() => this.props.newSearch()}>Search Again</button>
		      	</div>	
    		)
	    }

	    return (
	    	<div>Loading...</div>
    	);

  	}
}

const mapStateToProps = state => {
	return {
		domain: state.domain
	};
};

export default connect(mapStateToProps)(Results);