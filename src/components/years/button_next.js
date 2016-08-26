import React, {Component} from 'react';

import RaisedButton from 'material-ui/RaisedButton';

class ButtonNext extends Component {
    render() {
        return (
            <RaisedButton
                disableTouchRipple={true}
                disableFocusRipple={true}
                primary={true}
                style={{margin: 10}}
                {...this.props}/>
        );
    }
}

export default ButtonNext;
