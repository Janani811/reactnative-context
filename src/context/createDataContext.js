import React, { useReducer } from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default (reducer, actions, initialState) => {
  const Context = React.createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const boundActions = {};

    // actions === {addBlogPost :(dispatch)=>{return () => {} }}
    for (let key in actions) {
      // key === addBlogPost
      boundActions[key] = actions[key](dispatch);
    }
    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
};
