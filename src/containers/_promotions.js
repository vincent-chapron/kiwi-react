import React, {Component} from 'react';
import { connect } from 'react-redux';

import { Stepper, Step, StepLabel, StepContent } from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

import SmallCaps from '../components/others/small_caps';
import {StepPromotion} from '../components/promotions';
import {StepYear, StepPeriod} from '../components/years';

class Promotions extends Component {
    constructor(props) {
        super(props);

        this.state = {step_index: 0};
        this.steps = [
            {label: "création d'une promotion", component: StepPromotion},
            {label: "ajout d'une année", component: StepYear},
            {label: "ajout de périodes", component: StepPeriod},
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
                            <StepLabel><SmallCaps>{label}</SmallCaps></StepLabel>
                            <StepContent>
                                <div className="row center-xs">
                                    <div className="col-xs-12 col-sm-10 col-md-8 col-lg-6" style={{marginTop: 25, marginBottom: 25}}>
                                        <Content
                                            promotion={this.props.promotions.current}
                                            year={this.props.years.current}
                                            previous={this.handlePrevious.bind(this)}
                                            next={this.handleNext.bind(this)}/>
                                    </div>
                                </div>
                            </StepContent>
                        </Step>
                    ))}
                </Stepper>
            </div>
        );
    }
}

const mapStateToProps = function({promotions, years}) {
    return {promotions, years};
}

export default connect(mapStateToProps)(Promotions);
