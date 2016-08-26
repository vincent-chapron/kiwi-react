import React, {Component} from 'react';

import FlatButton from 'material-ui/FlatButton';

class DialogActions extends Component {
    render() {
        const cancel = (this.props.cancel) ? {...this.props.cancel}: {};
        const ok = (this.props.ok) ? {...this.props.ok}: {};
        return (
            <div>
                <FlatButton
                    label="Retour"
                    secondary={true}
                    {...cancel}/>
                <FlatButton
                    label="OK"
                    primary={true}
                    {...ok}/>
            </div>
        )
    }
}

export default DialogActions;
