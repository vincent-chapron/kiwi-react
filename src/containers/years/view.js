import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import * as actions from '../../actions';
import {InternshipTable} from '../../components/internships';
import {ResultTable} from '../../components/results';

class YearView extends Component {
    componentWillMount() {
        if (this.props.years.selected) {
            if (this.props.years.selected.id !== this.props.params.id) {
                this.props.clearYear();
            }
        }
        this.props.getYearAPI(this.props.params.id);
    }

    render() {
        const year = this.props.years.selected;
        if (!year) return null;

        return (
            <div>
                <h2>{year.name}</h2>
            </div>
        );
    }
}

function mapStateToProps({years}) {
    return {years};
}

export default connect(mapStateToProps, actions)(YearView);
