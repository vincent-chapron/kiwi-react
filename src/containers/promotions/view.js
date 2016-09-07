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
        const promotion = this.props.promotions.selected;
        if (!promotion) return null;

        return (
            <div>
                <h2>{promotion.name}</h2>

                <h4>Statistiques</h4>
                <PromotionStatistics promotion={promotion} statistics={this.props.promotions.statistics}/>

                <h4>Étudiants</h4>
                <StudentList students={promotion.students}/>
                <StudentNew promotion={promotion}/>

                <h4>Matières</h4>
                <CourseList courses={promotion.courses}/>
                <CourseNew promotion={promotion}/>

                <h4>Années</h4>
                <YearList years={promotion.years}/>
            </div>
        );
    }
}

function mapStateToProps({promotions}) {
    return {promotions};
}

export default connect(mapStateToProps, actions)(PromotionView);
