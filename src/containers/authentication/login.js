import React, {Component} from 'react';
import {reduxForm} from 'redux-form';

import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';

import * as actions from '../../actions';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {error: false};
    }

    render() {
        const {
            fields: {username, password},
            handleSubmit
        } = this.props;

        return (
            <div className="authentication">
                <form onSubmit={handleSubmit(this.handleSubmit.bind(this))}>
                    <Paper style={{padding: '25px'}} zDepth={2}>
                        <div className="authentication-logo">
                            <img src='/img/kiwi.svg' alt='KIWI'/>
                        </div>
                        <TextField
                            {...username}
                            hintText="username"
                            fullWidth={true}
                            autoFocus={true}/>
                        <TextField
                            {...password}
                            type="password"
                            hintText="password"
                            fullWidth={true}/>
                        <RaisedButton
                            type="submit"
                            label="Connexion"
                            style={{margin: '20px 0 10px', width: '100%'}}/>
                    </Paper>
                </form>
                <Snackbar
                    open={this.state.error}
                    message="Email ou mot de passe incorrect."
                    autoHideDuration={2000}
                    onRequestClose={this.handleRequestClose}/>
            </div>
        );
    }

    handleRequestClose = () => {
        this.setState({error: false});
    };

    handleSubmit() {
        const username = this.props.fields.username.value;
        const password = this.props.fields.password.value;

        this.props.login(username, password);
    }
}

function mapStateToProps({authentication = {}}) {
    return {authentication};
}

export default reduxForm({
    form : 'LoginForm',
    fields: ['username', 'password']
}, mapStateToProps, actions)(Login);
