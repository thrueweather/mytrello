import { combineReducers } from 'redux'
import interfaceReducer from './interfaceReducer'

import columns from './columns'

export default combineReducers({
    interfaceReducer,
    columns
})