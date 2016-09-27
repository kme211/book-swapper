import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import routes from './routes';
import './styles/styles.css';
import 'font-awesome/css/font-awesome.css';

render(
  <Router history={browserHistory} routes={routes}/>,
  document.getElementById('app')
);
