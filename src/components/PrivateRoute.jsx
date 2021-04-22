import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { storage } from '../utils/storage';

function FavedVideosView({ component: Component, ...rest }) {
  const userData = storage.get('USER_INFO');

  return (
    <Route
      {...rest}
      render={(props) =>
        userData && userData.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
}

export default FavedVideosView;
