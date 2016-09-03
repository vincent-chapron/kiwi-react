import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import {TableRow, TableRowColumn} from 'material-ui/Table';

import * as actions from '../../actions';


class NoteTableRow extends Component {
    render() {
        const {note} = this.props;
        if (!note) return null;

        return (
            <TableRow>
                <TableRowColumn>{note.name}</TableRowColumn>
                <TableRowColumn>{(note.statistics && note.statistics.length != 0) ? note.statistics.min : '-'}</TableRowColumn>
                <TableRowColumn>{(note.statistics && note.statistics.length != 0) ? note.statistics.average : '-'}</TableRowColumn>
                <TableRowColumn>{(note.statistics && note.statistics.length != 0) ? note.statistics.max : '-'}</TableRowColumn>
            </TableRow>
        );
    }
}

export default connect(null, actions)(NoteTableRow);
