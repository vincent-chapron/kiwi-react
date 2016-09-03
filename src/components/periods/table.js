import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow} from 'material-ui/Table';
import {List} from 'material-ui/List';

import * as actions from '../../actions';
import PeriodTableRow from './table_row';

class PeriodTable extends Component {
    render() {
        if (!this.props.periods) return null;

        return (
            <div>
                <Table>
                    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                        <TableRow>
                            <TableHeaderColumn>NOM</TableHeaderColumn>
                            <TableHeaderColumn>DÉBUT</TableHeaderColumn>
                            <TableHeaderColumn>FIN</TableHeaderColumn>
                            <TableHeaderColumn>{"CRÉNAUX D'ARRIVÉE"}</TableHeaderColumn>
                            <TableHeaderColumn>CRÉNAUX DE DÉPART</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody displaySelectAll={false} adjustForCheckbox={false} displayRowCheckbox={false}>
                        {this.props.periods.map(period => <PeriodTableRow key={period.id} period={period}/>)}
                    </TableBody>
                </Table>
            </div>
        );
    }
}

export default connect(null, actions)(PeriodTable);
