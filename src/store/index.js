import {
  createStore,
  applyMiddleware
} from 'redux';

import ReduxThunk from 'redux-thunk';
import initReducer from '../reducers';

let middleware = [ReduxThunk];

let reducers = initReducer();

let rootReducer = (state, action) => {
  console.log(`action ${action.type}`);
  return reducers(state, action);
}

const createStoreWithMiddleware = applyMiddleware()(createStore);

export default () => {
  let store = createStoreWithMiddleware(
    rootReducer,
    applyMiddleware(...middleware)
  )
  return store;
}
