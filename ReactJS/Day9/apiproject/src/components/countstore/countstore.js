import { applyMiddleware, createStore } from "redux";
import { countReducer } from "./countReducer";
import createSagaMiddleware from 'redux-saga';
import watchIncrementAsync1 from "./SagaMiddle";
const sagaMiddleware =  createSagaMiddleware();

export const countStore =createStore(countReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchIncrementAsync1);
export default countStore;