import { combineReducers } from 'redux';
import { dataReducer, selectedDataReducer } from './dataReducer';


const reducers = combineReducers({
    allDatas: dataReducer,
    data: selectedDataReducer,
})

export default reducers;