import React, {Component} from 'react';
import { connect } from 'react-redux';

import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import ContentAdd from 'material-ui/svg-icons/content/add';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import Dialog from 'material-ui/Dialog';
import { StepLabel, StepContent } from 'material-ui/Stepper';
import {List, ListItem} from 'material-ui/List';

import ButtonPrevious from '../others/button_previous';
import ButtonNext from '../others/button_next';
import { Period } from '../../models/periods';

class StepPeriod extends Component {
    constructor(props) {
        super(props);
        this.state = {
            periods: [],
            open: false,
            name: null,
            start_at: null,
            end_at: null,
            start_arrived_time: null,
            end_arrived_time: null,
            start_left_time: null,
            end_left_time: null
        }

        Date.prototype.yyyymmdd = function() {
            var mm = this.getMonth() + 1;
            var dd = this.getDate();

            return [(dd < 10 ? '0' : '') + dd, (mm < 10 ? '0' : '') + mm, this.getFullYear()].join('/');
        };

        Date.prototype.hhmm = function() {
            var hh = this.getHours();
            var mm = this.getMinutes();

            return [(hh < 10 ? '0' : '') + hh, (mm < 10 ? '0' : '') + mm].join(':');
        };
    }

    componentWillMount() {
        if (this.props.periods) {
            this.setState({
                periods: this.props.periods
            });
        }
    }

    handleConfirm() {
        this.handleClose();
        this.props.next();
    }

    handleNext() {
        this.setState({open: true});
    }

    handleClose() {
        this.setState({open: false});
    }

    handleAdd() {
        const current = new Period();
        current.setName(this.state.name);
        current.setStartAt(this.state.start_at);
        current.setEndAt(this.state.end_at);
        current.setStartArrivedTime(this.state.start_arrived_time);
        current.setEndArrivedTime(this.state.end_arrived_time);
        current.setStartLeftTime(this.state.start_left_time);
        current.setEndLeftTime(this.state.end_left_time);

        this.setState({
            periods: [...this.state.periods, current]
        });
    }

    render() {
        const actions = [
            <FlatButton
                label="non je ne suis pas sur"
                secondary={true}
                onTouchTap={this.handleClose.bind(this)}/>,
            <FlatButton
                label="oui j'en suis sur"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.handleConfirm.bind(this)}/>
        ];

        return (
            <div className="row" style={{textAlign: "justify"}}>
                <List className="col-xs-12">
                    {this.state.periods.map((period, i) => {
                        console.log(this.state);
                        const date = (period.getStartAt() && period.getEndAt()) ?
                            ` - ${period.getStartAt().yyyymmdd()} au ${period.getEndAt().yyyymmdd()}` : "";
                        return (
                            <ListItem
                                key={i}
                                primaryText={period.getName() + date}
                                secondaryText={
                                    <div>
                                        les élèves peuvent arrivée entre {period.getStartArrivedTime().hhmm()} et {period.getEndArrivedTime().hhmm()}
                                        <br/>
                                        les élèves peuvent partir entre {period.getStartLeftTime().hhmm()} et {period.getEndLeftTime().hhmm()}
                                    </div>
                                }
                                secondaryTextLines={2}/>
                        );
                    })}
                </List>

                <div className="col-xs-12" style={{marginBottom:  25}}>
                    <TextField
                        value={this.state.name}
                        onChange={evt => this.setState({name: evt.target.value})}
                        floatingLabelText="Indiquez ici un nom pour cette période"
                        fullWidth={true}/>
                    <div style={{color: "#B3B3B3", fontSize: "0.8rem"}}>
                        {"Les périodes servent à découper une année en intervalles clefs. Vous allez par exemple diviser une année en deux semestre, et ainsi avoir deux périodes distinctes, la premère par exemple appelée \"Semestre 1\""}
                    </div>
                </div>
                <div className="col-xs-6">
                    <DatePicker
                        onChange={(_, date) => this.setState({start_at: date})}
                        hintText="Date de début"
                        mode="landscape"
                        fullWidth={true}/>
                </div>
                <div className="col-xs-6">
                    <DatePicker
                        onChange={(_, date) => this.setState({end_at: date})}
                        hintText="Date de fin"
                        mode="landscape"
                        fullWidth={true}/>
                </div>
                <div className="col-xs-12" style={{marginBottom:  25}}>
                    <div style={{color: "#B3B3B3", fontSize: "0.8rem"}}>
                        {"Indiquez la date de début et de fin de cette périodes. Si une périodes est par exemple un semestre, vous pourriez mettre les date du 22 septembre 2017 au 31 janvier 2018."}
                    </div>
                </div>
                <div className="col-xs-6">
                    <TimePicker
                        onChange={(_, time) => this.setState({start_arrived_time: time})}
                        format="24hr"
                        hintText="Début de l'heure d'arrivée"
                        fullWidth={true}/>
                </div>
                <div className="col-xs-6">
                    <TimePicker
                        onChange={(_, time) => this.setState({end_arrived_time: time})}
                        format="24hr"
                        hintText="Fin de l'heure d'arrivée"
                        fullWidth={true}/>
                </div>
                <div className="col-xs-12" style={{marginBottom:  25}}>
                    <div style={{color: "#B3B3B3", fontSize: "0.8rem"}}>
                        {"A quelle heure doivent se présenter les élèves le matin ? Vous pouvez indiquez leur horaire d'arrivée entre 8h00 et 9h05."}
                    </div>
                </div>
                <div className="col-xs-6">
                    <TimePicker
                        onChange={(_, time) => this.setState({start_left_time: time})}
                        format="24hr"
                        hintText="Début de l'heure de départ"
                        fullWidth={true}/>
                </div>
                <div className="col-xs-6">
                    <TimePicker
                        onChange={(_, time) => this.setState({end_left_time: time})}
                        format="24hr"
                        hintText="Fin de l'heure de départ"
                        fullWidth={true}/>
                </div>
                <div className="col-xs-12">
                    <div style={{color: "#B3B3B3", fontSize: "0.8rem"}}>
                        {"A quelle heure peuvent partir les étudiants le soir ? Vous pouvez indiquez leur horaire de départ entre 17h00 et 23h42."}
                    </div>
                </div>
                <div className="col-xs-12" style={{textAlign: "right", marginTop: 25}}>
                    <FlatButton
                        onTouchTap={this.handleAdd.bind(this)}
                        label="Ajouter"
                        labelPosition="before"
                        secondary={true}
                        icon={<ContentAdd />}/>
                </div>
                <div className="col-xs-12" style={{textAlign: "right", marginTop: 25}}>
                    <ButtonPrevious label="retour" onTouchTap={this.props.previous}/>
                    <ButtonNext label="suivant" onTouchTap={this.handleNext.bind(this)}/>
                </div>
                <Dialog
                    title="Êtes vous sur de vouloir continuer ?"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose.bind(this)}>
                    Vous avez actuellement <strong>{this.state.periods.length}</strong> période(s).<br/>
                    Ces périodes pourrons être modifiées par la suite, vous pourrez également en ajouter.
                </Dialog>
            </div>
        );
    }
}

export default connect(null, null)(StepPeriod);
