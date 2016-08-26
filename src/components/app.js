import React, {Component} from 'react';
import {Link} from 'react-router';

import Promotions from '../containers/promotions';
import Students from '../containers/students';

export default class App extends Component {
    render() {
        return (
            <div>
                <ul>
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
