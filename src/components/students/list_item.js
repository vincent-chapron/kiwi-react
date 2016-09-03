import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import {ListItem} from 'material-ui/List';

import * as actions from '../../actions';


class StudentListItem extends Component {
    render() {
        const {student} = this.props;
        if (!student) return null;

        return (
            <ListItem
                containerElement={<Link to={`/students/${student.id}`}/>}
                primaryText={student.fullname}/>
        );
    }
}

export default connect(null, actions)(StudentListItem);
