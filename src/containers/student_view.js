import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import * as actions from '../actions';

class Student extends Component {
    componentWillMount() {
        this.props.getStudentAPI(this.props.params.id);
    }

    render() {
        if (!this.props.students.selected) return <div>chargement ...</div>;

        return (
            <div>
                <h1>{this.props.students.selected.fullname}</h1>
                <h2>{this.props.students.selected.email}</h2>
            </div>
        );
    }
}

function mapStateToProps({students}) {
    return {students};
}

export default connect(mapStateToProps, actions)(Student);
