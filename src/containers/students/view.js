import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import * as actions from '../../actions';
import {InternshipTable} from '../../components/internships';
import {ResultTable} from '../../components/results';

class StudentView extends Component {
    componentWillMount() {
        if (this.props.students.selected) {
            if (this.props.students.selected.id !== this.props.params.id) {
                this.props.clearStudent();
            }
        }
        this.props.getStudentAPI(this.props.params.id);
    }

    render() {
        const student = this.props.students.selected;
        if (!student) return null;

        const courses = [];
        for(const key in student.courses) {
            if (student.courses.hasOwnProperty(key)) {
                courses.push(student.courses[key]);
            }
        }

        return (
            <div>
                <h2>
                    {student.fullname}
                    <small> - <Link to={`/promotions/${student.promotion.id}`}>{student.promotion.name}</Link></small>
                </h2>

                TODO: DETAILS

                <h3>Stages & Alternances</h3>
                <InternshipTable internships={student.internships}/>

                <h3>Résultats</h3>
                {courses.map(data => <ResultTable key={data.course.id} course={data.course} results={data.results}/>)}
            </div>
        );
    }
}

function mapStateToProps({students}) {
    return {students};
}

export default connect(mapStateToProps, actions)(StudentView);
