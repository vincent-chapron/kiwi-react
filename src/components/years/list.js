import React, {Component} from 'react';
import {connect} from 'react-redux';

import {List} from 'material-ui/List';

import * as actions from '../../actions';
import YearListItem from './list_item';

class YearList extends Component {
    render() {
        if (!this.props.years) return null;

        return (
            <div>
                <List>
                    {this.props.years.map(year => <YearListItem key={year.id} year={year}/>)}
                </List>
            </div>
        );
    }
}

export default connect(null, actions)(YearList);
