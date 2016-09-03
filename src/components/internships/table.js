import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow} from 'material-ui/Table';
import {List} from 'material-ui/List';

import * as actions from '../../actions';
import InternshipTableRow from './table_row';

class InternshipTable extends Component {
    render() {
        if (!this.props.internships) return null;

        return (
            <div>
                <Table>
                    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                        <TableRow>
                            <TableHeaderColumn>{"Nom de l'entreprise"}</TableHeaderColumn>
                            <TableHeaderColumn>Date de début</TableHeaderColumn>
                            <TableHeaderColumn>Date de fin</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody displaySelectAll={false} adjustForCheckbox={false}>
                        {this.props.internships.map(internship => <InternshipTableRow key={internship.id} internship={internship}/>)}
                    </TableBody>
                </Table>
            </div>
        );
    }
}

export default connect(null, actions)(InternshipTable);
