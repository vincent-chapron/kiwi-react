import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import {ListItem} from 'material-ui/List';

import * as actions from '../../actions';


class CourseListItem extends Component {
    render() {
        const {course} = this.props;
        if (!course) return null;

        return (
            <ListItem
                containerElement={<Link to={`/courses/${course.id}`}/>}
                primaryText={course.name}/>
        );
    }
}

export default connect(null, actions)(CourseListItem);
