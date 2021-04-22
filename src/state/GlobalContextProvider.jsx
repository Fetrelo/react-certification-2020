import React, { createContext, useReducer, useCallback, useEffect } from 'react';
import { storage } from '../utils/storage';

const initialState = {
  theme: 'light',
  showLoginModal: false,
  sessionData: {},
  favVideos: [],
};
const GlobalContext = createContext(initialState);

function GlobalContextProvider({ children }) {
  const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case 'UPDATE_FAV_VIDEOS':
        return { ...state, favVideos: payload };
      case 'LOGIN':
        return { ...state, sessionData: payload };
      case 'LOGOUT':
        return { ...state, sessionData: {} };
      case 'TOGGLE_LOGIN':
        return { ...state, showLoginModal: !state.showLoginModal };
      case 'TOGGLE_THEME':
        return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const logout = useCallback(() => {
    dispatch({ type: 'LOGOUT' });
    storage.remove('USER_INFO');
    window.location = '/';
  }, []);

  const favVideo = (video) => {
    const storedFavVideos = storage.get('USER_FAV_VIDEOS') || [];
    const index = storedFavVideos.findIndex((v) => v.id.videoId === video.id.videoId);
    const updatedFavVideos = index === -1 ? [...storedFavVideos, video] : storedFavVideos;
    storage.set('USER_FAV_VIDEOS', updatedFavVideos);
    dispatch({ type: 'UPDATE_FAV_VIDEOS', payload: updatedFavVideos });
  };

  const unfavVideo = (video) => {
    const storedFavVideos = storage.get('USER_FAV_VIDEOS') || [];
    const updatedFavVideos = storedFavVideos.filter(
      (vid) => video.id.videoId !== vid.id.videoId
    );
    storage.set('USER_FAV_VIDEOS', updatedFavVideos);
    dispatch({ type: 'UPDATE_FAV_VIDEOS', payload: updatedFavVideos });
  };

  useEffect(() => {
    const lastAuthState = storage.get('USER_INFO');
    dispatch({ type: 'LOGIN', payload: lastAuthState });
    const storedFavVideos = storage.get('USER_FAV_VIDEOS') || [];
    dispatch({ type: 'UPDATE_FAV_VIDEOS', payload: storedFavVideos });
  }, []);

  return (
    <GlobalContext.Provider value={{ state, dispatch, logout, favVideo, unfavVideo }}>
      {children}
    </GlobalContext.Provider>
  );
}

export { GlobalContext };

export default GlobalContextProvider;
