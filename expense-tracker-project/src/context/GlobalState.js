import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

const inititalState = {
    transactions: [
        {id:1, text:'Flower', amount:-20},
        {id:2, text:'Table', amount:300},
        {id:3, text:'Book', amount:-10},
        {id:4, text:'Camera',amount:150}
    ]
}
export const GlobalContext = createContext(inititalState);

export const GlobalProvider = ({ children }) => {
    const [state,dispatch] = useReducer(AppReducer, inititalState);

    //Actions 
    function deleteTransaction(id){
        dispatch({
            type:'DELETE_TRANSACTION',
            payload:id
        });
    }

    function addTransaction(transaction){
        dispatch({
            type:'ADD_TRANSACTION',
            payload:transaction
        });
    }



    return(
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}