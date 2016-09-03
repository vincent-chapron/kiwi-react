import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import {ListItem} from 'material-ui/List';

import * as actions from '../../actions';

class YearListItem extends Component {
    render() {
        const {year} = this.props;
        if (!year) return null;

        return (
            <ListItem
                containerElement={<Link to={`/years/${year.id}`}/>}
                primaryText={year.name}/>
        );
    }
}

export default connect(null, actions)(YearListItem);
