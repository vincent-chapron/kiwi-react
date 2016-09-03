import React, {Component} from 'react';
import {connect} from 'react-redux';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import * as actions from '../../actions';
import ExceptionForm from './form';
import DialogActions from '../others/dialog_actions';

class ExceptionNew extends Component {
    constructor(props) {
        super(props);
        this.state = {open: false}
    }

    render() {
        return (
            <div>
                <FlatButton
                    label="Ajouter une nouvelle exception"
                    primary={true}
                    onTouchTap={() => this.setState({open: true})}/>
                <Dialog
                    title="Ajouter une nouvelle exception"
                    actions={<DialogActions
                        cancel={{onTouchTap: () => this.setState({open: false})}}
                        ok={{label: "Ajouter", form: "exceptionForm", type: "submit"}}/>}
                    modal={true}
                    autoScrollBodyContent={true}
                    open={this.state.open}
                    onRequestClose={() => this.setState({open: false})}>

                    <ExceptionForm
                        year={this.props.year}
                        preSubmit={() => this.setState({open: false})}/>
                </Dialog>
            </div>
        );
    }
}

export default connect(null, actions)(ExceptionNew);
