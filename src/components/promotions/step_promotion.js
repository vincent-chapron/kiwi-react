import React, {Component} from 'react';
import { connect } from 'react-redux';

import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import { StepLabel, StepContent } from 'material-ui/Stepper';

import * as actions from '../../actions';
import ButtonPrevious from '../others/button_previous';
import ButtonNext from '../others/button_next';
import {Promotion} from '../../models/promotions';

class StepPromotion extends Component {
    constructor(props) {
        super(props);
        this.state = {name: null}
    }

    componentWillMount() {
        if (this.props.promotion) this.setState({name: this.props.promotion.getName()});
    }

    handleNext() {
        const promotion = new Promotion();
        promotion.setName(this.state.name);
        this.props.setPromotion(promotion);
        this.props.next();
    }

    render() {
        return (
            <div style={{textAlign: "justify"}}>
                <TextField
                    floatingLabelText="Indiquez ici un nom pour cette promotion."
                    value={this.state.name}
                    onChange={evt => this.setState({name: evt.target.value})}
                    fullWidth={true}/>
                <div style={{color: "#B3B3B3", fontSize: "0.8rem"}}>
                    Un nom permettra de retrouver cette promotion plus facilement par la suite.
                </div>
                <div style={{textAlign: "right", marginTop: 25}}>
                    <ButtonPrevious label="retour" disabled={true}/>
                    <ButtonNext label="suivant" onTouchTap={this.handleNext.bind(this)}/>
                </div>
            </div>
        );
    }
}

export default connect(null, actions)(StepPromotion);
