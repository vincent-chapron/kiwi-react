import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actions from '../../actions';
import {StudentList, StudentNew} from '../../components/students';
import {CourseList, CourseNew} from '../../components/courses';
import {BeaconList, BeaconNew} from '../../components/beacons';

class PromotionView extends Component {
    componentWillMount() {
        this.props.getPromotionAPI(this.props.params.id);
    }

    render() {
        if (!this.props.promotions.selected) return null;

        return (
            <div>
                YEARS - STATISTICS

                <h2>Étudiants</h2>
                <StudentList students={this.props.promotions.selected.students}/>
                <StudentNew promotion={this.props.promotions.selected}/>

                <h2>Matières</h2>
                <CourseList courses={this.props.promotions.selected.courses}/>
                <CourseNew promotion={this.props.promotions.selected}/>
            </div>
        );
    }
}

function mapStateToProps({promotions}) {
    return {promotions};
}

export default connect(mapStateToProps, actions)(PromotionView);
