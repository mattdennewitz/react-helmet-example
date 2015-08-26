import React from 'react';
import Router from 'react-router';

import App from './components/App';
import Home from './components/Home';
import About from './components/About';

let routes = (
    <Router.Route handler={App}>
        <Router.DefaultRoute name="home" handler={Home} />
        <Router.Route name="about" path="about" handler={About} />
    </Router.Route>
);

export default routes;
