import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import {TableRow, TableRowColumn} from 'material-ui/Table';

import * as actions from '../../actions';


class ResultTableRow extends Component {
    render() {
        const {result} = this.props;
        if (!result) return null;

        return (
            <TableRow>
                <TableRowColumn>{result.note.name}</TableRowColumn>
                <TableRowColumn>{result.result}</TableRowColumn>
                <TableRowColumn>{result.note.statistics.min}</TableRowColumn>
                <TableRowColumn>{result.note.statistics.average}</TableRowColumn>
                <TableRowColumn>{result.note.statistics.max}</TableRowColumn>
            </TableRow>
        );
    }
}

export default connect(null, actions)(ResultTableRow);
