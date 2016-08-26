import React, {Component} from 'react';

import FlatButton from 'material-ui/FlatButton';

class ButtonPrevious extends Component {
    render() {
        return (
            <FlatButton
                disableTouchRipple={true}
                disableFocusRipple={true}
                {...this.props}/>
        );
    }
}

export default ButtonPrevious;
