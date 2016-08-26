import React, {Component} from 'react';
import {connect} from 'react-redux';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import * as actions from '../../actions';
import BeaconForm from './form';
import DialogActions from '../others/dialog_actions';

class BeaconNew extends Component {
    constructor(props) {
        super(props);
        this.state = {open: false}
    }

    render() {
        return (
            <div>
                <FlatButton
                    label="Ajouter un nouveau beacon"
                    primary={true}
                    onTouchTap={() => this.setState({open: true})}/>
                <Dialog
                    title="Ajouter un nouveau beacon"
                    actions={<DialogActions
                        cancel={{onTouchTap: () => this.setState({open: false})}}
                        ok={{label: "Ajouter", form: "beaconForm", type: "submit"}}/>}
                    modal={true}
                    open={this.state.open}
                    onRequestClose={() => this.setState({open: false})}>

                    <BeaconForm
                        promotion={this.props.promotion}
                        preSubmit={() => this.setState({open: false})}/>

                </Dialog>
            </div>
        );
    }
}

export default connect(null, actions)(BeaconNew);
