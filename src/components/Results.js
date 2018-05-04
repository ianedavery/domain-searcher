import React, {Component} from 'react';
import {connect} from 'react-redux';

class Results extends Component {

  	render() {

  		if(this.props.domain.available === false) {
  			return (
  				<div>
  					<div>{this.props.domain.domain} is not available</div>
  					<button type='button' onClick={() => this.props.newSearch(false)}>Search Again</button>
				</div>
  			);
  		}

	    if(this.props.domain.available)
	    	return (
		      <div>
		        <div>{this.props.domain.domain} is available</div>
				<button type='button' onClick={() => this.props.newSearch(false)}>Search Again</button>
		      </div>
		    );

	    return (
	    	<div>Loading...</div>
    	);

  	}
}

const mapStateToProps = state => {
	return {
		domain: state.domain.domain
	};
};

export default connect(mapStateToProps)(Results);