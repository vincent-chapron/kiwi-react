import React, {Component} from 'react';
import { connect } from 'react-redux';

import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import { StepLabel, StepContent } from 'material-ui/Stepper';

import * as actions from '../../actions';
import ButtonPrevious from '../others/button_previous';
import ButtonNext from '../others/button_next';
import {Year} from '../../models/years';

class StepYear extends Component {
    constructor(props) {
        super(props);
        this.state = {name: "", start_at: null, end_at: null}
    }

    componentWillMount() {
        if (this.props.year) {
            this.setState({
                name: this.props.year.getName(),
                start_at: this.props.year.getStartAt(),
                end_at: this.props.year.getEndAt()
            });
        }
    }

    handleNext() {
        const year = new Year();
        year.setName(this.state.name);
        year.setStartAt(this.state.start_at);
        year.setEndAt(this.state.end_at);
        this.props.setYear(year);
        this.props.next();
    }

    render() {
        const start = (this.state.start_at) ? {defaultDate: this.state.start_at} : {};
        const end = (this.state.end_at) ? {defaultDate: this.state.end_at} : {};
        return (
            <div className="row" style={{textAlign: "justify"}}>
                <div className="col-xs-12" style={{marginBottom:  25}}>
                    <TextField
                        floatingLabelText="Indiquez ici un nom pour cette année"
                        value={this.state.name}
                        onChange={evt => this.setState({name: evt.target.value})}
                        fullWidth={true}/>
                    <div style={{color: "#B3B3B3", fontSize: "0.8rem"}}>
                        {"Vous pouvez par exemple mettre \"Première année - 2017/2018\". Vous pourrez par la suite ajouter d'autres années, si la promotion suit par exemple un cursus de 5 ans."}
                    </div>
                </div>
                <div className="col-xs-6">
                    <DatePicker
                        hintText="Date de début d'année"
                        mode="landscape"
                        {...start}
                        onChange={(_, date) => this.setState({start_at: date})}
                        fullWidth={true}/>
                </div>
                <div className="col-xs-6">
                    <DatePicker
                        hintText="Date de fin d'année"
                        mode="landscape"
                        {...end}
                        onChange={(_, date) => this.setState({end_at: date})}
                        fullWidth={true}/>
                </div>
                <div className="col-xs-12">
                    <div style={{color: "#B3B3B3", fontSize: "0.8rem"}}>
                        {"Indiquez la date de début d'année, ainsi que celle de fin d'année. Une année peut par exemple commencer le 22 septembre 2017 pour finir le 24 juin 2018."}
                    </div>
                </div>
                <div className="col-xs-12" style={{textAlign: "right", marginTop: 25}}>
                    <ButtonPrevious label="retour" onTouchTap={this.props.previous}/>
                    <ButtonNext label="suivant" onTouchTap={this.handleNext.bind(this)}/>
                </div>
            </div>
        );
    }
}

export default connect(null, actions)(StepYear);
