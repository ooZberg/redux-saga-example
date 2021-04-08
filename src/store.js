import {createStore, applyMiddleware} from "redux"
import createSagaMiddleware from "redux-saga"
import {composeWithDevTools} from "redux-devtools-extension"

import {initialState, rootReducer} from "./reducers"
import {rootSaga} from "./sagas"
import "./style.css";

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(sagaMiddleware)))

// then run the saga
sagaMiddleware.run(rootSaga)

export default store;