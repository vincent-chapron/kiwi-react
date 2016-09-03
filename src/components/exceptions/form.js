import React, {Component} from 'react';
import {reduxForm} from 'redux-form';

import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import Toggle from 'material-ui/Toggle';

import * as actions from '../../actions';

class ExceptionForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            start_at: null,
            end_at: null,
            start_arrived_time: null,
            end_arrived_time: null,
            start_left_time: null,
            end_left_time: null,
            required: false,
        }
    }

    handleSubmit(values) {
        const year = this.props.year;
        if (this.props.preSubmit) this.props.preSubmit(values);

        const startAt = new Date(this.state.start_at);
        const endAt = new Date(this.state.end_at);
        const startArrivedTime = new Date(this.state.start_arrived_time);
        const endArrivedTime = new Date(this.state.end_arrived_time);
        const startLeftTime = new Date(this.state.start_left_time);
        const endLeftTime = new Date(this.state.end_left_time);

        let parameters = {
            ...values,
            startAt: startAt.yyyymmdd(),
            endAt: endAt.yyyymmdd(),
            presenceRequired: this.state.required,
            year: year.id,
        }

        if (this.state.required) parameters = {
            ...parameters,
            startArrivedTime: startArrivedTime.hhmm(),
            endArrivedTime: endArrivedTime.hhmm(),
            startLeftTime: startLeftTime.hhmm(),
            endLeftTime: endLeftTime.hhmm(),
        };

        if (!year) return;                                                      // TODO ERROR
        this.props.postExceptionAPI(parameters);                                // TODO LOADER ACTION
    }

    render() {
        const {fields, handleSubmit} = this.props;
        return (
            <form id="exceptionForm" onSubmit={handleSubmit(this.handleSubmit.bind(this))}>
                <TextField
                    {...fields.name}
                    required={true}
                    hintText="Jour Férié, Vacances ..."
                    floatingLabelText="Nom de l'exception"
                    fullWidth={true}/>
                <DatePicker
                    onChange={(_, date) => this.setState({start_at: date})}
                    hintText="Date de début"
                    mode="landscape"
                    fullWidth={true}/>
                <DatePicker
                    onChange={(_, date) => this.setState({end_at: date})}
                    hintText="Date de fin"
                    mode="landscape"
                    fullWidth={true}/>
                <Toggle
                    label="Présence obligatoire ?"
                    labelPosition="right"
                    onToggle={(_, toggled) => this.setState({required: toggled})}
                    defaultToggled={false}/>
                <TimePicker
                    disabled={!this.state.required}
                    onChange={(_, time) => this.setState({start_arrived_time: time})}
                    format="24hr"
                    hintText="Début de l'heure d'arrivée"
                    fullWidth={true}/>
                <TimePicker
                    disabled={!this.state.required}
                    onChange={(_, time) => this.setState({end_arrived_time: time})}
                    format="24hr"
                    hintText="Fin de l'heure d'arrivée"
                    fullWidth={true}/>
                <TimePicker
                    disabled={!this.state.required}
                    onChange={(_, time) => this.setState({start_left_time: time})}
                    format="24hr"
                    hintText="Début de l'heure de départ"
                    fullWidth={true}/>
                <TimePicker
                    disabled={!this.state.required}
                    onChange={(_, time) => this.setState({end_left_time: time})}
                    format="24hr"
                    hintText="Fin de l'heure de départ"
                    fullWidth={true}/>
            </form>
        );
    }
}

function validate(values) {
    let errors = {};

    if (!values.name) errors.name = "Entrez le nom de l'exception.";

    return errors;
}

export default reduxForm({
    form: "exceptionForm",
    fields: ['name'],
    validate
}, null, actions)(ExceptionForm);
