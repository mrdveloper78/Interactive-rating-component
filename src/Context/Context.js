import { createContext, useReducer } from "react";
import MainReducer from "../Reducer/Reducer";




const MainContext = createContext();
const initialState = {
    show: true,
    rate:0
}


const MainProvider = ({ children }) => {

    const [state, dispatch] = useReducer(MainReducer, initialState);

    const { show, rate } = state;

    const hide =()=>{
        dispatch({type:"hide"});
    }

    const registerRate = (r) => {
        dispatch({type:"registerRate", payload:r});
    }


    return <MainContext.Provider value={{hide, registerRate, show, rate}}>
        {children}
    </MainContext.Provider>
}



export { MainContext, MainProvider };