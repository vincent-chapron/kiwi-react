import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import * as actions from '../actions';
import Promotions from '../containers/promotions';
import Students from '../containers/students';

class App extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><button onClick={() => this.props.logout()}>LOGOUT</button></li>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/promotions">PROMOTIONS</Link></li>
                    <li><Link to="/beacons">BEACONS</Link></li>
                    <li><Link to="/materiels">MATÉRIELS</Link></li>
                </ul>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default connect(null, actions)(App);
