import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actions from '../../actions';

class PromotionStatistics extends Component {
    render() {
        if (!this.props.statistics) return null;

        let statistics = [];

        for(const status in this.props.statistics) {
            if (this.props.statistics.hasOwnProperty(status)) {
                const number = this.props.statistics[status];
                statistics.push(<div key={status}>{status}: {number}</div>);
            }
        }

        return (
            <div>{statistics}</div>
        );
    }
}

export default connect(null, actions)(PromotionStatistics);
