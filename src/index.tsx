import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from 'components/App'
import registerServiceWorker from './registerServiceWorker'
import 'assets/scss/main.scss'

// Redux

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from 'reducers'
import rootSaga from 'sagas'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  applyMiddleware(
    sagaMiddleware,
    logger
  )
)

sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker()
