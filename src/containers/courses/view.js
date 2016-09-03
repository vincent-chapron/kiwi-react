import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actions from '../../actions';
import {NoteTable, NoteNew} from '../../components/notes';

class CourseView extends Component {
    componentWillMount() {
        if (this.props.courses.selected) {
            if (this.props.courses.selected.id !== this.props.params.id) {
                this.props.clearCourse();
            }
        }
        this.props.getCourseAPI(this.props.params.id);
    }

    render() {
        if (!this.props.courses.selected) return null;
        return (
            <div>
                <h2>{this.props.courses.selected.name}</h2>
                <NoteTable notes={this.props.courses.selected.notes}/>
                <NoteNew course={this.props.courses.selected}/>
            </div>
        );
    }
}

function mapStateToProps({courses}) {
    return {courses};
}

export default connect(mapStateToProps, actions)(CourseView);
