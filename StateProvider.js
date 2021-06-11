import React, {createContext,useContext,useReducer } from 'react';

// Prepare the DataLayout
export const StateContext=createContext();

// wrap our app and porvide datalayout
export const StateProvider=({ reducer,initialState,children}) =>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);

// Pull info from data layer
export  const useStatevalue=()=>useContext(StateContext);
