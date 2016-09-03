import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Avatar from 'material-ui/Avatar';
import {teal300} from 'material-ui/styles/colors';


import * as actions from '../actions';
import Promotions from '../containers/promotions';
import Students from '../containers/students';

class App extends Component {
    render() {
        return (
            <div>
                <AppBar title="Kiwi"
                        style={{position: 'fixed'}}
                        iconElementLeft={
                            <Avatar src="/img/logo-kiwi.svg" size={45}/>
                        }
                        iconElementRight={
                            <IconMenu
                                iconButtonElement={
                                    <IconButton><MoreVertIcon /></IconButton>
                                }
                                targetOrigin={{horizontal: 'right', vertical: 'top'}}
                                anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                            >
                                <MenuItem primaryText="Sign out" onTouchTap={() => this.props.logout()} />
                            </IconMenu>
                        } />
                <Drawer open={true} containerStyle={{top:'64px'}}>
                    <MenuItem containerElement={<Link to="/promotions"/>}>Promotions</MenuItem>
                    <MenuItem containerElement={<Link to="/beacons"/>}>Beacons</MenuItem>
                    <MenuItem containerElement={<Link to="/materiels"/>}>Matériels</MenuItem>
                </Drawer>
                <div style={{paddingLeft: '260px', paddingTop: '64px'}}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default connect(null, actions)(App);
