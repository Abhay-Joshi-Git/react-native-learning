import actionTypes from './actionTypeConstants.js';

export const addEmployee = (item) => {
    return {
        type: actionTypes.addEmployee,
        item: item
    }
}
