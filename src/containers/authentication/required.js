import React, {Component} from 'react';
import {connect} from 'react-redux';
import jwt_decode from 'jwt-decode';

import * as actions from '../../actions';
import Login from './login';

export default function RequireAuthentication(ComposedComponent) {
    class Authentication extends Component {
        componentWillMount() {
            this.props.getTokenFromLocalStorage();
        }

        render() {
            if (!this.isValidToken(this.props.authentication)) {
                return <Login />;
            }

            return (
                <ComposedComponent {...this.props}/>
            );
        }

        isValidToken({token = null}) {
            if (token) {
                try {
                    const {exp} = jwt_decode(token);
                    if (new Date() < new Date(exp * 1000)) {
                        return true;
                    }
                } catch (e) {
                    return false;
                }
            }
            return false;
        }
    }

    function mapStateToProps({authentication = {}}) {
        return {authentication};
    }

    return connect(mapStateToProps, actions)(Authentication);
}
