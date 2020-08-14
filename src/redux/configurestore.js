import { createStore, combineReducers} from 'redux'
import {Skills} from './skills';
import {Certificates}  from './certificates';

export const configurestore = ()=>{
    const store = createStore(
        combineReducers({
            skills : Skills,
            certificates : Certificates
        })
    );
    return store;
}