import employeeReducer from './employees.js';
import { combineReducers } from 'redux';



export default combineReducers({
    employees: employeeReducer,
    departments: (state = [], action) => {return [...state]}
})
