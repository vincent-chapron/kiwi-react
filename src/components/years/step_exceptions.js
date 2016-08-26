import React, {Component} from 'react';
import { connect } from 'react-redux';

import ButtonPrevious from '../others/button_previous';
import ButtonNext from '../others/button_next';

class StepExceptions extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="row" style={{textAlign: "justify"}}>
                <p>
                    Vous pourrez par la suite ajouter des exceptions à ces périodes que vous venez de déclarer.
                    {"En effet, si des évènement survienne, comme un jour férié ou une période d'examen, vous pourrez changer les horaires d'arrivée et de départ."}
                </p>
                <div className="col-xs-12" style={{textAlign: "right", marginTop: 25}}>
                    <ButtonPrevious label="retour" onTouchTap={this.props.previous}/>
                    <ButtonNext label="suivant" onTouchTap={this.props.next}/>
                </div>
            </div>
        );
    }
}

export default connect(null, null)(StepExceptions);
