import { createStore, combineReducers, applyMiddleware} from 'redux'
import {Skills} from './skills';
import {Certificates}  from './certificates';
import {initialcontactmsg} from './contactform'
import {createForms} from 'react-redux-form'
import thunk from 'redux-thunk';


export const configurestore = ()=>{
    const store = createStore(
        combineReducers({
            skills : Skills,
            certificates : Certificates,
            ...createForms({
                contactform: initialcontactmsg
            })
        }),
        applyMiddleware(thunk)
    );
    return store;
}