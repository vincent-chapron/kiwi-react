import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import {TableRow, TableRowColumn} from 'material-ui/Table';

import * as actions from '../../actions';


class InternshipTableRow extends Component {
    render() {
        const {internship} = this.props;
        if (!internship) return null;

        const start_at = new Date(internship.start_at);
        const end_at = new Date(internship.end_at);
        return (
            <TableRow>
                <TableRowColumn>{internship.company.name}</TableRowColumn>
                <TableRowColumn>{start_at.ddmmyyyy()}</TableRowColumn>
                <TableRowColumn>{end_at.ddmmyyyy()}</TableRowColumn>
            </TableRow>
        );
    }
}

export default connect(null, actions)(InternshipTableRow);
