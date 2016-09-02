import {combineReducers} from 'redux';
import {reducer as form} from 'redux-form';

import authentication from './authentication';
import beacons from './beacons';
import courses from './courses';
import notes from './notes';
import promotions from './promotions';
import students from './students';
import years from './years';

const rootReducer = combineReducers({
    form,
    authentication,
    beacons,
    courses,
    notes,
    promotions,
    students,
    years
});

export default rootReducer;
