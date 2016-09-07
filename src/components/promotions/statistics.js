import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actions from '../../actions';

class PromotionStatistics extends Component {
    componentWillMount() {
        const WS_ENDPOINT = process.env.WS_ENDPOINT || "ws://localhost:8001";
        const ws = new Ws(`${WS_ENDPOINT}/websocket`);
        ws.On("statistics", statistics => this.props.setStatisticsWebsocket(statistics))
    }

    render() {
        const statistics = this.props.statistics;
        if (!statistics) return null;

        return (
            <div>
                <div className="statistics">
                    <div className="present" style={{height: `${(statistics.present * 100 / statistics.total) || 1}%`}}></div>
                    <div className="late" style={{height: `${(statistics.late * 100 / statistics.total) || 1}%`}}></div>
                    <div className="absent" style={{height: `${(statistics.absent * 100 / statistics.total) || 1}%`}}></div>
                    <div className="waiting" style={{height: `${(statistics.waiting * 100 / statistics.total) || 1}%`}}></div>
                </div>
                <div className="statistics_count">
                    <div className="present">{(statistics.present) || 0} présent{statistics.present > 1 ? 's' : ''}</div>
                    <div className="late">{(statistics.late) || 0} retardataire{statistics.late > 1 ? 's' : ''}</div>
                    <div className="absent">{(statistics.absent) || 0} absent{statistics.absent > 1 ? 's' : ''}</div>
                    <div className="waiting">{(statistics.waiting) || 0} en attente</div>
                </div>
            </div>
        );
    }
}

export default connect(null, actions)(PromotionStatistics);
