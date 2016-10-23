import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AccountPage from './components/account/AccountPage';
import BookPage from './components/books/BookPage'; //eslint-disable-line import/no-named-as-default
import UserPage from './components/user/UserPage'; //eslint-disable-line import/no-named-as-default
import MessagesPage from './components/messages/MessagesPage'; //eslint-disable-line import/no-named-as-default
import MessagePage from './components/messages/MessagePage'; //eslint-disable-line import/no-named-as-default

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="book/:id" component={BookPage} />
    <Route path="user/:id" component={UserPage} />
    <Route path="account" component={AccountPage} />
    <Route path="messages" component={MessagesPage} />
    <Route path="message/:id" component={MessagePage} />
  </Route>
);
