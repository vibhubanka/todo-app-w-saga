// saga middleware
// configure the store
// use the reducers
// redux -> createStore, applyMiddleware
// redux-saga -> sagaMiddleware
// react-redux -> connect
import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware } from 'redux'
import { logger } from 'redux-logger'
import reducers from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware, logger)
)

sagaMiddleware.run(rootSaga)

export default store
