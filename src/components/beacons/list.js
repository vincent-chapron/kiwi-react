import React, {Component} from 'react';
import {connect} from 'react-redux';

import {List} from 'material-ui/List';

import * as actions from '../../actions';
import CourseListItem from './list_item';

class BeaconList extends Component {
    render() {
        if (!this.props.beacons) return null;

        return (
            <div>
                <List>
                    {this.props.beacons.map(beacon => <CourseListItem key={beacon.id} beacon={beacon}/>)}
                </List>
            </div>
        );
    }
}

export default connect(null, actions)(BeaconList);
