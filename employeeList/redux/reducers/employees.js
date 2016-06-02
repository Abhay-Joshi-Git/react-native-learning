import  actionTypes from '../actions/actionTypeConstants.js';

export default (state = [], action) => {
    switch (action.type) {
        case actionTypes.addEmployee :
            return [
                ...state,
                action.item
            ];
        default:
            return state;
    }
}
