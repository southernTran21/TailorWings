import { createStore } from 'redux';
import myReducer from '../reducers/index';
import { createReducerManager } from '../reducers/ReducerManager';

const reducerManager = createReducerManager(myReducer)
// Create a store with the root reducer function being the one exposed by the manager.
const store = createStore(reducerManager.reduce)
// Optional: Put the reducer manager on the store so it is easily accessible
store.reducerManager = reducerManager;
export default store;