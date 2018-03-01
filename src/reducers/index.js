import {
  combineReducers
} from 'redux';
import { routerReducer } from 'react-router-redux';

export default () => {
  return combineReducers({
    route: routerReducer
  })
}