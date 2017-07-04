import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import {createLogger} from 'redux-logger'

const debugware = [];
if (process.env.NODE_ENV !== 'production') {
    debugware.push(createLogger({collapsed: true}));
}



const createStoreWithMiddleware = compose(
    applyMiddleware(thunk, ...debugware),
    window.devToolsExtension
    ? window.devToolsExtension()
    : f => f)(createStore);

export const store = createStoreWithMiddleware(rootReducer)
