import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import Beacons from './containers/beacons_view';
import Promotion from './containers/promotion_view';
import Promotions from './containers/promotions_view';
import Student from './containers/student_view';

import RequireAuthentication from './containers/authentication/required';
import {PromotionView} from './containers/promotions';

export default (
    <Route path="/" component={RequireAuthentication(App)}>
        <Route path="beacons" component={Beacons}/>
        <Route path="promotions" component={Promotions}/>
        <Route path="_promotions/:id" component={Promotion}/>
        <Route path="promotions/:id" component={PromotionView}/>
        <Route path="students/:id" component={Student}/>
    </Route>
);
