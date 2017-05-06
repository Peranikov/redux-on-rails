"use strict";

import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const logger = createLogger();
  return {
    ...createStore(rootReducer, applyMiddleware(sagaMiddleware, logger)),
    runSaga: sagaMiddleware.run
  }
}