import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import * as actions from '../actions';

class Beacons extends Component {
    componentWillMount() {
        this.props.getBeaconsAPI();
    }

    render() {
        return (
            <div>
                <h1>Beacons</h1>
                <ul>
                    {this.props.beacons.all.map(beacon => {
                        return (
                            <li key={beacon.id}>
                                {beacon.name} - {beacon.secure_uuid}
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

function mapStateToProps({beacons}) {
    return {beacons};
}

export default connect(mapStateToProps, actions)(Beacons);
