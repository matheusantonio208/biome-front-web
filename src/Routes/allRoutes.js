import React from 'react';
import { Redirect } from 'react-router-dom';

//pages
import FinanceDashboard from '../pages/Finance/FinanceDashboard';
import Modal from '../pages/Finance/UiModals';

//Authentication pages
import BasicSignIn from '../pages/Authentication/Login';
// import CoverSignIn from '../pages/Authentication/Login/CoverSignIn';
import BasicSignUp from '../pages/Authentication/Register';
// import CoverSignUp from '../pages/Authentication/Register/CoverSignUp';
import BasicPasswReset from '../pages/Authentication/ForgetPassword';

const authProtectedRoutes = [
  //Pages
  { path: '/finance', component: FinanceDashboard },
  { path: '/login', component: BasicSignIn },
  { path: '/register', component: BasicSignUp },
  { path: '/passwordReset', component: BasicPasswReset },
  { path: '/labs', component: Modal },

  // this route should be at the end of all other routes
  // eslint-disable-next-line react/display-name
  {
    path: '/',
    exact: true,
    component: () => <Redirect to='/dashboard' />,
  },
];

const publicRoutes = [];

export { authProtectedRoutes, publicRoutes };
