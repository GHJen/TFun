import React from 'react';
import ReactDOM from 'react-dom';
import history from './history';
import Routes from './routes';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store'
import Footer from './components/Footer';
import Header from './components/Header';

ReactDOM.render(
  <Provider store={store}>
    <Header />
    <Router history={history}>
      {/* <Navbar /> */}
      <Routes />
    </Router>
    <Footer />
  </Provider>,
  document.getElementById('app')
);
