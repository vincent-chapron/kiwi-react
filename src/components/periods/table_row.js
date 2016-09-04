import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import {TableRow, TableRowColumn} from 'material-ui/Table';

import * as actions from '../../actions';


class PeriodTableRow extends Component {
    render() {
        const {period} = this.props;
        if (!period) return null;

        const start_at = new Date(period.start_at);
        const end_at = new Date(period.end_at);
        return (
            <TableRow>
                <TableRowColumn>{period.name}</TableRowColumn>
                <TableRowColumn>{start_at.ddmmyyyy()}</TableRowColumn>
                <TableRowColumn>{end_at.ddmmyyyy()}</TableRowColumn>
                <TableRowColumn>
                    {period.start_arrived_time.replace(/(\d{2}:\d{2}):00$/, '$1')} - {period.end_arrived_time.replace(/(\d{2}:\d{2}):00$/, '$1')}
                </TableRowColumn>
                <TableRowColumn>
                    {period.start_left_time.replace(/(\d{2}:\d{2}):00$/, '$1')} - {period.end_left_time.replace(/(\d{2}:\d{2}):00$/, '$1')}
                </TableRowColumn>
            </TableRow>
        );
    }
}

export default connect(null, actions)(PeriodTableRow);
