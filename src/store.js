import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import domainSearchReducer from './reducers/domainSearch';

const store = createStore(
	combineReducers({
		domain: domainSearchReducer
	}),
	applyMiddleware(thunk)
);

export default store;