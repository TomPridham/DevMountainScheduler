import React from 'react';
import {render} from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import App from './components/App';
import Container from './components/Container'

require('./resources/styles/styles.less');
require( 'bootstrap/dist/css/bootstrap.css');
require('bootstrap/dist/js/bootstrap.min');


render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Container}/>
        </Route>
    </Router>
), document.getElementById('app'));
