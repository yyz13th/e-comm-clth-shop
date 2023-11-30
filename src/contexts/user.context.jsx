import { createContext, useState, useEffect, useReducer } from "react";
import {onAuthStateChangedListener, signOutUser, createUserDocumentFromAuth} from '../utils/firebase/firebase.utils'

export const UserContext = createContext ({
    currentUser: null,
    setCurrentUser: () => null
});

export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: 'SET_CURRENT_USER'
}
const userReducer = (state, action) => {
    console.log(action);
    const { type, payload } = action; //extract from action
    
    switch(type){
        case USER_ACTION_TYPES.SET_CURRENT_USER: //importaint to create actions type or it wont jump 
            return{
                ...state, //spreads previous state either null of with users
                currentUser: payload //updates entry (ie payload) as current
            }

        default:
            throw new Error(`Unhandled type ${type} in userReducer`)
    }
}

const INITIAL_STATE = {
    currentUser: null
}

export const UserProvider = ({ children }) => {
    // const [currentUser, setCurrentUser] = useState(null);
    const [{currentUser}, dispatch] = useReducer(userReducer, INITIAL_STATE) //we ectract currentUser from state, i.e from object 

    console.log(currentUser);

    const setCurrentUser = (user) => {
        dispatch({type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user})
    }
    const value = {currentUser, setCurrentUser};

    // signOutUser();

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if(user){ createUserDocumentFromAuth(user);}
            setCurrentUser(user);
            // user ? createUserDocumentFromAuth(user) : setCurrentUser(user);
    });
        return unsubscribe;
    }, []);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
};