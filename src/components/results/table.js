import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow} from 'material-ui/Table';
import {List} from 'material-ui/List';

import * as actions from '../../actions';
import ResultTableRow from './table_row';

class ResultTable extends Component {
    render() {
        if (!this.props.course || !this.props.results) return null;

        return (
            <div>
                <h5>{this.props.course.name}</h5>
                <Table>
                    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                        <TableRow>
                            <TableHeaderColumn>Nom</TableHeaderColumn>
                            <TableHeaderColumn>Note</TableHeaderColumn>
                            <TableHeaderColumn>Minimum</TableHeaderColumn>
                            <TableHeaderColumn>Moyenne</TableHeaderColumn>
                            <TableHeaderColumn>Maximum</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody displaySelectAll={false} adjustForCheckbox={false}>
                        {this.props.results.map(result => <ResultTableRow key={result.id} result={result}/>)}
                    </TableBody>
                </Table>
            </div>
        );
    }
}

export default connect(null, actions)(ResultTable);
