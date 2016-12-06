import React from 'react';
import {render} from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import App from './src/components/App';
import Container from './src/components/Container';
import 'jquery';

require('./src/resources/styles/styles.less');
require('bootstrap/dist/css/bootstrap.css');
require('bootstrap/dist/js/bootstrap.min');


render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Container}/>
        </Route>
    </Router>
), document.getElementById('app'));
