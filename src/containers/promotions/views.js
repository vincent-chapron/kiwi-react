import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import {List, ListItem} from 'material-ui/List';

import * as actions from '../../actions';

class Promotions extends Component {
    componentWillMount() {
        this.props.getPromotionsAPI();
    }

    render() {
        return (
            <div>
                <h2>Promotions</h2>
                <List>
                    {this.props.promotions.all.map(promotion => {
                        let secondaryText = "Aucun étudiant";
                        if (promotion.student_count == 1) secondaryText = <span>1 étudiant</span>;
                        else if (promotion.student_count > 1) secondaryText = <span>{promotion.student_count} étudiants</span>;

                        return (
                            <ListItem
                                key={promotion.id}
                                containerElement={<Link to={"/promotions/" + promotion.id}/>}
                                primaryText={promotion.name}
                                secondaryText={secondaryText}/>
                        );
                    })}
                </List>
            </div>
        );
    }
}

function mapStateToProps({promotions}) {
    return {promotions};
}

export default connect(mapStateToProps, actions)(Promotions);
