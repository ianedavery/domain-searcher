import {DOMAIN_SEARCH_REQUEST, DOMAIN_SEARCH_SUCCESS, DOMAIN_SEARCH_ERROR} from '../actions/domainSearch';

const initialState = {
	error: null,
	loading: false,
	domain: ''
}

export default function domainSearchReducer(state = initialState, action) {
	if(action.type === DOMAIN_SEARCH_REQUEST) {
		return Object.assign({}, state, {
			loading: true,
			error: null
		});
	}
	if(action.type === 	DOMAIN_SEARCH_SUCCESS) {
		return Object.assign({}, state, {
			loading: false,
			domain: action.domain,
			error: null
		});
	}
	if(action.type === DOMAIN_SEARCH_ERROR) {
		return Object.assign({}, state, {
			error: action.error,
			loading: false,
		});
	}
	return state;
}