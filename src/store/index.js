import {
  createStore,
  applyMiddleware
} from 'redux';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import ReduxThunk from 'redux-thunk';
import initReducer from '../reducers';

const history = createHistory();
const reducers = initReducer();
const middleware = [ReduxThunk, routerMiddleware(history)];

const rootReducer = (state, action) => {
  console.log(`action ${action.type}`);
  return reducers(state, action);
}

export default () => {
  let store = createStore(
    rootReducer,
    applyMiddleware(...middleware)
  )
  return {
    store,
    history
  };
}
