import { combineReducers } from 'redux';
import { NavigationReducer } from './navigation';

const rootReducer = combineReducers({
  NavigationState: NavigationReducer
});

export default rootReducer;