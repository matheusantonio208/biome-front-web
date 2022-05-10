import { all, fork } from 'redux-saga/effects';
//layout
import LayoutSaga from './layouts/saga';
//Auth
import AccountSaga from './auth/register/saga';
import AuthSaga from './auth/login/saga';
import ForgetSaga from './auth/forget-password/saga';
import ProfileSaga from './auth/profile/saga';

//calendar
import calendarSaga from './calendar/saga';

//Modules
import financeSaga from './finance/financeModal/saga';

// //chat
// import chatSaga from "./chat/saga";
// //ecommerce
// import ecommerceSaga from "./ecommerce/saga";

// //Project
// import projectSaga from "./projects/saga";
// // Task
// import taskSaga from "./tasks/saga";
// // Crypto
// import cryptoSaga from "./crypto/saga";
// //TicketsList
// import ticketsSaga from "./tickets/saga";

// //crm
// import crmSaga from "./crm/saga";
// //invoice
// import invoiceSaga from "./invoice/saga";
// //mailbox
// import mailboxSaga from "./mailbox/saga";

export default function* rootSaga() {
  yield all([
    //public
    fork(LayoutSaga),
    fork(AccountSaga),
    fork(AuthSaga),
    fork(ForgetSaga),
    fork(financeSaga),
    fork(ProfileSaga),
    fork(calendarSaga),
  ]);
}
