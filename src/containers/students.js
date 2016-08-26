import React, {Component} from 'react';
import { connect } from 'react-redux';

class Students extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

const mapStateToProps = function(state) {
    return state;
}

export default connect(mapStateToProps)(Students);
