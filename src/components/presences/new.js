import React, {Component} from 'react';
import {connect} from 'react-redux';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import * as actions from '../../actions';
import PresenceForm from './form';
import DialogActions from '../others/dialog_actions';

class PresenceNew extends Component {
    constructor(props) {
        super(props);
        this.state = {open: false}
    }

    render() {
        return (
            <div>
                <FlatButton
                    label="Changer le status"
                    primary={true}
                    onTouchTap={() => this.setState({open: true})}/>
                <Dialog
                    title="Changer le status"
                    actions={<DialogActions
                        cancel={{onTouchTap: () => this.setState({open: false})}}
                        ok={{label: "Modifier", form: "presenceForm", type: "submit"}}/>}
                    modal={true}
                    open={this.state.open}
                    onRequestClose={() => this.setState({open: false})}>

                    <PresenceForm
                        student={this.props.student}
                        preSubmit={() => this.setState({open: false})}/>

                </Dialog>
            </div>
        );
    }
}

export default connect(null, actions)(PresenceNew);
