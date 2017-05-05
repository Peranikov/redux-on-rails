import React from 'react'
import { render } from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import App from './containers/App'
import reducer from './reducers'
import { createLogger } from 'redux-logger'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import rootSaga from './sagas'

// const logger = createLogger();
// const store = createStore(
//   reducer,
//   applyMiddleware(logger)
// );

const store = configureStore();
store.runSaga(rootSaga);

render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById('app')
);