import React, {Component} from 'react';
import {connect} from 'react-redux';

import {List} from 'material-ui/List';

import * as actions from '../../actions';
import CourseListItem from './list_item';

class CourseList extends Component {
    render() {
        if (!this.props.courses) return null;

        return (
            <div>
                <List>
                    {this.props.courses.map(course => <CourseListItem key={course.id} course={course}/>)}
                </List>
            </div>
        );
    }
}

export default connect(null, actions)(CourseList);
