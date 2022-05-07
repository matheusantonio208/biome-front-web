import { combineReducers } from 'redux';

// Front
import Layout from './layouts/reducer';

import Calendar from './calendar/reducer';

const rootReducer = combineReducers({
  // public
  Layout,
  Calendar,
});

export default rootReducer;
