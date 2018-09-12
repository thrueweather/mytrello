import * as types from '../constants/actionTypes';
import { ALL_BACKGROUNDS } from '../constants/types'

const initialState = {
    modalForm: false,
    dropdownSidebar: false,
    switchBg: ALL_BACKGROUNDS,
    background: '#1e90ff'
}

const interfaceReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.OPEN_MODAL_FORM:
            return Object.assign({}, state, {modalForm: true});
        case types.CLOSE_MODAL_FORM:
            return Object.assign({}, state, {modalForm: false});
        case types.DROP_DOWN_SIDEBAR:
            return Object.assign({}, state, {dropdownSidebar: !state.dropdownSidebar});
        case types.BACKGROUND:
            return Object.assign({}, state, {background: action.payload})
        default:
            return state;
    }
}

export default interfaceReducer;