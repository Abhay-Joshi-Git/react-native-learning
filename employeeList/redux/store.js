import * as Redux from 'redux';
import reducer from './reducers';
import departments from '../mockData/departmentList.js';
import employees from '../mockData/employeeList.js';

const initialState = {
    departments: departments,
    employees: employees
}

export default Redux.createStore(
    reducer,
    initialState
);
