import React, {useReducer,useContext,createContext} from 'react'

export const initialState={
    posts:[],
    user: null,
    isFecthing:false,
    errorr:false,
};

export const StateContext = createContext();

// useEffect(() => {
//    sessionStorage.setItem('user',JSON.stringify(state.user))
// }, [state.user]);

export const StateProvider = ({reducer,initialState,children})=>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
    {children}
    </StateContext.Provider>

);

export const useStateValue = () => useContext(StateContext);