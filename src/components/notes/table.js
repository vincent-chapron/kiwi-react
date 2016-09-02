import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow} from 'material-ui/Table';
import {List} from 'material-ui/List';

import * as actions from '../../actions';
import NoteTableRow from './table_row';

class NoteTable extends Component {
    render() {
        if (!this.props.notes) return null;

        return (
            <div>
                <Table>
                    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                        <TableRow>
                            <TableHeaderColumn>NOTE</TableHeaderColumn>
                            <TableHeaderColumn>MIN</TableHeaderColumn>
                            <TableHeaderColumn>MOYENNE</TableHeaderColumn>
                            <TableHeaderColumn>MAX</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody displaySelectAll={false} adjustForCheckbox={false}>
                        {this.props.notes.map(note => <NoteTableRow key={note.id} note={note}/>)}
                    </TableBody>
                </Table>
            </div>
        );
    }
}

export default connect(null, actions)(NoteTable);
