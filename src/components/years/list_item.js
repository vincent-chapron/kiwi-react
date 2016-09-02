import React, {Component} from 'react';
import {connect} from 'react-redux';

import {ListItem} from 'material-ui/List';

import * as actions from '../../actions';

class YearListItem extends Component {
    render() {
        const {year} = this.props;
        if (!year) return null;

        return (
            <ListItem
                primaryText={year.name}/>
        );
    }
}

export default connect(null, actions)(YearListItem);
