import { combineReducers } from 'redux-immutable';
import {
  LoginReducer,
  SettingReducer,
  addressReducer
} from '@screens/my/store';
import { homeReducer, oriderReducer } from '@screens/first/store';

export default combineReducers({
  LoginReducer,
  homeReducer,
  SettingReducer,
  oriderReducer,
  addressReducer
});
//对combineReducers进行数据结构优化
