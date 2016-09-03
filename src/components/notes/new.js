import React, {Component} from 'react';
import {connect} from 'react-redux';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import * as actions from '../../actions';
import NoteForm from './form';
import DialogActions from '../others/dialog_actions';

class NoteNew extends Component {
    constructor(props) {
        super(props);
        this.state = {open: false}
    }

    render() {
        return (
            <div>
                <FlatButton
                    label="Ajouter une nouvelle note"
                    primary={true}
                    onTouchTap={() => this.setState({open: true})}/>
                <Dialog
                    title="Ajouter une nouvelle note"
                    actions={<DialogActions
                        cancel={{onTouchTap: () => this.setState({open: false})}}
                        ok={{label: "Ajouter", form: "noteForm", type: "submit"}}/>}
                    modal={true}
                    open={this.state.open}
                    onRequestClose={() => this.setState({open: false})}>

                    <NoteForm
                        course={this.props.course}
                        preSubmit={() => this.setState({open: false})}/>

                </Dialog>
            </div>
        );
    }
}

export default connect(null, actions)(NoteNew);
