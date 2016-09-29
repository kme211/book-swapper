import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import { loadUser } from './actions/userActions';
import { loadGroup } from './actions/groupActions';
import './styles/styles.css';
import 'font-awesome/css/font-awesome.css';

const store = configureStore();
store.dispatch(loadUser('lamey'));
const unsubscribe = store.subscribe(() => {
  const groups = store.getState().user.groups;
  if(groups) {
    groups.forEach(group => {
      store.dispatch(loadGroup(group));
    });
    unsubscribe();
  }
});

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('app')
);
