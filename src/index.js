import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {Router, browserHistory} from 'react-router';
import promise from 'redux-promise';

import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import routes from './routes';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

injectTapEventPlugin();

Date.prototype.ddmmyyyy = function(separator = "/") {
    var mm = this.getMonth() + 1;
    var dd = this.getDate();

    return [
        dd < 10 ? `0${dd}` : dd,
        mm < 10 ? `0${mm}` : mm,
        this.getFullYear()
    ].join(separator);
};

Date.prototype.yyyymmdd = function(separator = "-") {
    var mm = this.getMonth() + 1;
    var dd = this.getDate();

    return [
        this.getFullYear(),
        mm < 10 ? `0${mm}` : mm,
        dd < 10 ? `0${dd}` : dd,
    ].join(separator);
};

Date.prototype.yyyymmdd = function(separator = "-") {
    var mm = this.getMonth() + 1;
    var dd = this.getDate();

    return [
        this.getFullYear(),
        mm < 10 ? `0${mm}` : mm,
        dd < 10 ? `0${dd}` : dd,
    ].join(separator);
};

Date.prototype.hhmm = function(separator = ":") {
    var hh = this.getHours();
    var mm = this.getMinutes();

    return [(hh < 10 ? '0' : '') + hh, (mm < 10 ? '0' : '') + mm].join(separator);
};

ReactDOM.render(
    <MuiThemeProvider>
        <Provider store={createStoreWithMiddleware(reducers)}>
            <Router history={browserHistory} routes={routes}/>
        </Provider>
    </MuiThemeProvider>
    , document.querySelector('#react-container'));
