import React, {Component} from 'react';
import {reduxForm} from 'redux-form';

import TextField from 'material-ui/TextField';

import * as actions from '../../actions';

class CourseForm extends Component {
    handleSubmit(values) {
        const course = this.props.course;
        if (this.props.preSubmit) this.props.preSubmit(values);

        if (!course) return;                                                    // TODO ERROR
        this.props.postNoteAPI({...values, course: course.id});                 // TODO LOADER ACTION
    }

    render() {
        const {fields, handleSubmit} = this.props;
        return (
            <form id="noteForm" onSubmit={handleSubmit(this.handleSubmit.bind(this))}>
                <TextField
                    {...fields.name}
                    required={true}
                    floatingLabelText="Nom de la note"
                    fullWidth={true}/>
            </form>
        );
    }
}

function validate(values) {
    let errors = {};

    if (!values.name) errors.name = "Entrez le nom de la note.";

    return errors;
}

export default reduxForm({
    form: "courseForm",
    fields: ['name'],
    validate
}, null, actions)(CourseForm);
