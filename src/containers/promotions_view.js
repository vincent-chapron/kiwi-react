import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import * as actions from '../actions';

class Promotions extends Component {
    componentWillMount() {
        this.props.getPromotionsAPI();
    }

    render() {
        return (
            <div>
                <h1>Promotions</h1>
                <ul>
                    {this.props.promotions.all.map(promotion => {
                        return (
                            <li key={promotion.id}>
                                <Link to={"/promotions/" + promotion.id}>{promotion.name}</Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

function mapStateToProps({promotions}) {
    return {promotions};
}

export default connect(mapStateToProps, actions)(Promotions);
