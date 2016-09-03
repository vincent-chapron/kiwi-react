import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

import * as actions from '../../actions';
import {PeriodTable} from '../../components/periods';
import {ExceptionTable, ExceptionNew} from '../../components/exceptions';

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

        const start_at = new Date(year.start_at);
        const end_at = new Date(year.end_at);
        return (
            <div>
                <h2>{year.name}</h2>

                <Table>
                    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                        <TableRow>
                            <TableHeaderColumn>DÉBUT</TableHeaderColumn>
                            <TableHeaderColumn>FIN</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody displaySelectAll={false} adjustForCheckbox={false} displayRowCheckbox={false}>
                        <TableRowColumn>{start_at.ddmmyyyy()}</TableRowColumn>
                        <TableRowColumn>{end_at.ddmmyyyy()}</TableRowColumn>
                    </TableBody>
                </Table>

                <h4>Périodes</h4>
                <PeriodTable periods={year.periods}/>

                <h4>Exceptions</h4>
                <ExceptionTable exceptions={year.exceptions}/>
                <ExceptionNew year={year}/>
            </div>
        );
    }
}

function mapStateToProps({years}) {
    return {years};
}

export default connect(mapStateToProps, actions)(YearView);
