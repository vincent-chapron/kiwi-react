import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import {TableRow, TableRowColumn} from 'material-ui/Table';

import * as actions from '../../actions';

class ExceptionTableRow extends Component {
    render() {
        const {exception} = this.props;
        if (!exception) return null;

        const start_at = new Date(exception.start_at);
        const end_at = new Date(exception.end_at);
        return (
            <TableRow>
                <TableRowColumn>{exception.name}</TableRowColumn>
                <TableRowColumn>{start_at.ddmmyyyy()}</TableRowColumn>
                <TableRowColumn>{end_at.ddmmyyyy()}</TableRowColumn>
                <TableRowColumn>
                    {exception.start_arrived_time.replace(/(\d{2}:\d{2}):00$/, '$1')} - {exception.end_arrived_time.replace(/(\d{2}:\d{2}):00$/, '$1')}
                </TableRowColumn>
                <TableRowColumn>
                    {exception.start_left_time.replace(/(\d{2}:\d{2}):00$/, '$1')} - {exception.end_left_time.replace(/(\d{2}:\d{2}):00$/, '$1')}
                </TableRowColumn>
            </TableRow>
        );
    }
}

export default connect(null, actions)(ExceptionTableRow);
