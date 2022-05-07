import React from 'react';
import { Redirect } from 'react-router-dom';

//pages
import FinanceDashboard from '../pages/Finance/FinanceDashboard';
import Modal from '../pages/Finance/UiModals';

const authProtectedRoutes = [
  //Pages
  { path: '/finance', component: FinanceDashboard },
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
