import React, {Component} from 'react';
import {connect} from 'react-redux';

import {ListItem} from 'material-ui/List';

import * as actions from '../../actions';


class BeaconListItem extends Component {
    render() {
        const {beacon} = this.props;
        if (!beacon) return null;

        return (
            <ListItem
                primaryText={beacon.name}
                secondaryText={beacon.secure_uuid}/>
        );
    }
}

export default connect(null, actions)(BeaconListItem);
