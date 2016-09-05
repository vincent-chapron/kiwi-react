import React, {Component} from 'react';
import {connect} from 'react-redux';

import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import * as actions from '../../actions';

class PresenceForm extends Component {
    constructor(props) {
        super(props);
        this.state = {status: ""};
    }

    handleSubmit(evt) {
        if (this.props.preSubmit) this.props.preSubmit(evt);
        evt.preventDefault();
        const student = this.props.student;
        if (!student) return;
        this.props.patchStudentStatusAPI(student.id, this.state.status);
    }

    render() {
        return (
            <form id="presenceForm" onSubmit={this.handleSubmit.bind(this)}>
                <SelectField value={this.state.status} onChange={(event, index, value) => this.setState({status: value})}>
                    <MenuItem value={"present"} primaryText="Présent" />
                    <MenuItem value={"absent"} primaryText="Absent" />
                    <MenuItem value={"late"} primaryText="En retard" />
                    <MenuItem value={"waiting"} primaryText="Défault" />
                </SelectField>
            </form>
        );
    }
}

export default connect(null, actions)(PresenceForm);
