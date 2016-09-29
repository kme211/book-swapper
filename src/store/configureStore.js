import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
// reduxImmutableStateInvariant is not for use in production
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
  // initialState useful for server side rendering
  return createStore(rootReducer, initialState, compose(
    applyMiddleware(thunk, reduxImmutableStateInvariant()),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));
}
