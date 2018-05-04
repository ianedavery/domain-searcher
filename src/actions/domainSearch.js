import {API_BASE_URL} from '../config';

export const DOMAIN_SEARCH_REQUEST = 'DOMAIN_SEARCH_REQUEST';
export const domainSearchRequest = () => ({
	type: DOMAIN_SEARCH_REQUEST
});

export const DOMAIN_SEARCH_SUCCESS = 'DOMAIN_SEARCH_SUCCESS';
export const domainSearchSuccess = domain => ({
	type: DOMAIN_SEARCH_SUCCESS,
	domain
});

export const DOMAIN_SEARCH_ERROR = 'DOMAIN_SEARCH_ERROR';
export const domainSearchError = error => ({
	type: DOMAIN_SEARCH_ERROR,
	error
});

export const domainSearch = domain => dispatch => {
	dispatch(domainSearchRequest);
	return fetch(`${API_BASE_URL}${domain}`)
		.then(res => 
			res.json())
		.then(domain => 
			dispatch(domainSearchSuccess(domain)))
		.catch(err => 
			dispatch(domainSearchError(err)));
}