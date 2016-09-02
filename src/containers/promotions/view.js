import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actions from '../../actions';
import PromotionStatistics from '../../components/promotions/statistics';
import {StudentList, StudentNew} from '../../components/students';
import {CourseList, CourseNew} from '../../components/courses';
import {YearList} from '../../components/years';

class PromotionView extends Component {
    componentWillMount() {
        this.props.getPromotionAPI(this.props.params.id);
        this.props.getPromotionStatisticsAPI(this.props.params.id);
    }

    render() {
        if (!this.props.promotions.selected) return null;

        return (
            <div>
                <h2>Statistiques</h2>
                <PromotionStatistics statistics={this.props.promotions.statistics}/>

                <h2>Étudiants</h2>
                <StudentList students={this.props.promotions.selected.students}/>
                <StudentNew promotion={this.props.promotions.selected}/>

                <h2>Matières</h2>
                <CourseList courses={this.props.promotions.selected.courses}/>
                <CourseNew promotion={this.props.promotions.selected}/>

                <h2>Années</h2>
                <YearList years={this.props.promotions.selected.years}/>
            </div>
        );
    }
}

function mapStateToProps({promotions}) {
    return {promotions};
}

export default connect(mapStateToProps, actions)(PromotionView);
