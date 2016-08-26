import React, {Component} from 'react';
import {connect} from 'react-redux';

import {List} from 'material-ui/List';

import * as actions from '../../actions';
import StudentListItem from './list_item';

class StudentList extends Component {
    render() {
        if (!this.props.students) return null;

        return (
            <div>
                <List>
                    {this.props.students.map(student => <StudentListItem key={student.id} student={student}/>)}
                </List>
            </div>
        );
    }
}

export default connect(null, actions)(StudentList);
