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
	fetch(`https://api.ote-godaddy.com/v1/domains/available?domain=${domain}&checkType=FULL&forTransfer=false`, {
		method: 'GET',
		headers: {
			'Accept': 'application/json',
			'Authorization': 'sso-key 3mM44UYhVC4J3w_TkTtwSEqWbdt1koSVZPB7S:TkTvzYV3JoQ4U8YzdeBuf2'
		},
		mode: 'no-cors'
	})
		.then(res => 
			res.json())
		.then(domain => 
			dispatch(domainSearchSuccess(domain)))
		.catch(err => 
			dispatch(domainSearchError(err)));
};