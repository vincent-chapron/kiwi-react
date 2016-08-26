import React, {Component} from 'react';
import {reduxForm} from 'redux-form';

import TextField from 'material-ui/TextField';

import * as actions from '../../actions';

class StudentForm extends Component {
    handleSubmit(values) {
        const promotion = this.props.promotion;
        if (this.props.preSubmit) this.props.preSubmit(values);

        if (!promotion) return;                                                 // TODO ERROR
        this.props.postStudentAPI({...values, promotion: promotion.id});        // TODO LOADER ACTION
    }

    render() {
        const {fields, handleSubmit} = this.props;
        return (
            <form id="studentForm" onSubmit={handleSubmit(this.handleSubmit.bind(this))}>
                <TextField
                    {...fields.forenames}
                    required={true}
                    floatingLabelText="Prénoms"
                    fullWidth={true}/>
                <br/>
                <TextField
                    {...fields.lastname}
                    required={true}
                    floatingLabelText="Nom de famille"
                    fullWidth={true}/>
                <br/>
                <TextField
                    {...fields.email}
                    required={true}
                    floatingLabelText="Email"
                    fullWidth={true}/>
                <br/>
                <TextField
                    {...fields.phoneMobile}
                    required={true}
                    floatingLabelText="Téléphone mobile"
                    fullWidth={true}/>
            </form>
        );
    }
}

function validate(values) {
    let errors = {};

    if (!values.forenames) errors.forenames = "Entrez les différents prénoms de l'étudiant.";
    if (!values.lastname) errors.lastname = "Entrez le nom de famille de l'étudiant.";
    if (!values.email) errors.email = "Entrez l'email de l'étudiant.";
    if (!values.phoneMobile) errors.phoneMobile = "Entrez le numéro de téléphone mobile de l'étudiant.";

    return errors;
}

export default reduxForm({
    form: "studentForm",
    fields: ['forenames', 'lastname', 'email', 'phoneMobile'],
    validate
}, null, actions)(StudentForm);
