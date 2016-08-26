import React, {Component} from 'react';
import { connect } from 'react-redux';

import { Stepper, Step, StepLabel, StepContent } from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

import SmallCaps from '../components/others/small_caps';
import {StepYear, StepPeriod, StepPromotion} from '../components/years';

class Years extends Component {
    constructor(props) {
        super(props);

        this.state = {step_index: 0};
        this.steps = [
            {label: "année scolaire", component: StepYear},
            {label: "période scolaire", component: StepPeriod},
            {label: "promotion", component: StepPromotion}
        ];
    }

    handleNext() {
        this.setState({step_index: this.state.step_index + 1});
    }

    handlePrevious() {
        this.setState({step_index: this.state.step_index - 1});
    }

    render() {
        return (
            <div>
                <Stepper activeStep={this.state.step_index} orientation="vertical">
                    {this.steps.map(({label, component: Content}, key) => (
                        <Step key={key}>
                            <StepLabel><h3><SmallCaps>{label}</SmallCaps></h3></StepLabel>
                            <StepContent>
                                <Content next={this.handleNext.bind(this)}/>
                            </StepContent>
                        </Step>
                    ))}
                </Stepper>
            </div>
        );
    }
}

const mapStateToProps = function(state) {
    return state;
}

export default connect(mapStateToProps)(Years);
