import React from 'react';
import { Redirect } from 'react-router-dom';

//pages
import Starter from '../pages/Pages/Starter/Starter';

const authProtectedRoutes = [
  //Pages
  { path: '/pages-starter', component: Starter },

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
