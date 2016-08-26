import React, {Component} from 'react';
import {reduxForm} from 'redux-form';

import TextField from 'material-ui/TextField';

import * as actions from '../../actions';

class CourseForm extends Component {
    handleSubmit(values) {
        const promotion = this.props.promotion;
        if (this.props.preSubmit) this.props.preSubmit(values);

        if (!promotion) return;                                                 // TODO ERROR
        this.props.postCourseAPI({...values, promotion: promotion.id});         // TODO LOADER ACTION
    }

    render() {
        const {fields, handleSubmit} = this.props;
        return (
            <form id="courseForm" onSubmit={handleSubmit(this.handleSubmit.bind(this))}>
                <TextField
                    {...fields.name}
                    required={true}
                    floatingLabelText="Nom de la matière"
                    fullWidth={true}/>
            </form>
        );
    }
}

function validate(values) {
    let errors = {};

    if (!values.name) errors.name = "Entrez le nom de la matière.";

    return errors;
}

export default reduxForm({
    form: "courseForm",
    fields: ['name'],
    validate
}, null, actions)(CourseForm);
