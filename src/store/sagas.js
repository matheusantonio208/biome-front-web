import { all, fork } from 'redux-saga/effects';
//layout
import LayoutSaga from './layouts/saga';
import CalendarSaga from './calendar/saga';

export default function* rootSaga() {
  yield all([
    //public
    fork(LayoutSaga),
    fork(CalendarSaga),
  ]);
}
