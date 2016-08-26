import React, {Component} from 'react';
import {connect} from 'react-redux';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import * as actions from '../../actions';
import CourseForm from './form';
import DialogActions from '../others/dialog_actions';

class CourseNew extends Component {
    constructor(props) {
        super(props);
        this.state = {open: false}
    }

    render() {
        return (
            <div>
                <FlatButton
                    label="Ajouter une nouvelle matière"
                    primary={true}
                    onTouchTap={() => this.setState({open: true})}/>
                <Dialog
                    title="Ajouter une nouvelle matière"
                    actions={<DialogActions
                        cancel={{onTouchTap: () => this.setState({open: false})}}
                        ok={{label: "Ajouter", form: "courseForm", type: "submit"}}/>}
                    modal={true}
                    open={this.state.open}
                    onRequestClose={() => this.setState({open: false})}>

                    <CourseForm
                        promotion={this.props.promotion}
                        preSubmit={() => this.setState({open: false})}/>

                </Dialog>
            </div>
        );
    }
}

export default connect(null, actions)(CourseNew);
