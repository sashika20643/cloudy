// PrivateRoute.js
import React from 'react';
import { Route, Navigate, useNavigate } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';

const PrivateRoute = ({ element, ...rest }) => {
  const user = firebase.auth().currentUser;
  const navigate = useNavigate();

  if (user) {
    return <Route {...rest} element={element} />;
  } else {
    navigate('/login', { replace: true });
    return null; // or any loading indicator if needed
  }
};

export default PrivateRoute;
