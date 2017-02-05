import { combineReducers } from 'redux';
import dataReducer from './reducer_data';
import filterBox from './filterReducer';
import Validations from './checkIDReducer';

const rootReducer = combineReducers({
  data: dataReducer,
  filterBox: filterBox,
  vad: Validations
});

export default rootReducer;
