import React, {Component} from 'react';
import {reduxForm} from 'redux-form';

import Checkbox from 'material-ui/Checkbox';

import * as actions from '../../actions';

class BeaconForm extends Component {
    handleSubmit(values) {
        const promotion = this.props.promotion;
        if (this.props.preSubmit) this.props.preSubmit(values);

        if (!promotion) return;                                                 // TODO ERROR

    }

    render() {
        const {fields, handleSubmit} = this.props;
        return (
            <form id="beaconForm" onSubmit={handleSubmit(this.handleSubmit.bind(this))}>

            </form>
        );
    }
}

function validate(values) {
    let errors = {};

    return errors;
}

export default reduxForm({
    form: "beaconForm",
    fields: ['name', 'secureUuid'],
    validate
}, null, actions)(BeaconForm);
