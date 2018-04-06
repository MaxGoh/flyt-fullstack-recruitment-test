import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from 'components/App'
import registerServiceWorker from './registerServiceWorker'
import 'assets/scss/main.scss'

// Redux

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from 'reducers'
import logger from 'redux-logger'

const store = createStore(
  rootReducer,
  applyMiddleware(
    logger
  )
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker()
