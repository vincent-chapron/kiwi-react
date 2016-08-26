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

ReactDOM.render(
    <MuiThemeProvider>
        <Provider store={createStoreWithMiddleware(reducers)}>
            <Router history={browserHistory} routes={routes}/>
        </Provider>
    </MuiThemeProvider>
    , document.querySelector('#react-container'));
