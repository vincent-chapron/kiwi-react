import React, {Component} from 'react';
import { connect } from 'react-redux';

import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import { StepLabel, StepContent } from 'material-ui/Stepper';

class StepPromotion extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                {"Indiquez le nom de la promotion."}
                {this.props.buttons}
            </div>
        );
    }
}

export default connect(null, null)(StepPromotion);
