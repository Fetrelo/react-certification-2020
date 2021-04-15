import React, { createContext, useReducer } from 'react';

const initialState = { theme: 'light' };
const GlobalContext = createContext(initialState);

function GlobalContextProvider({ children }) {
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'TOGGLE_THEME':
        return { theme: state.theme === 'light' ? 'dark' : 'light' };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}

export { GlobalContext };

export default GlobalContextProvider;
