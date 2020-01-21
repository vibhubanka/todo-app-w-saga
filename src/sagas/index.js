// actions -> each action -> handler -> generator function
import { all, takeLatest, takeEvery, call, put, select } from 'redux-saga/effects'
import types from '../actionTypes'

const delay = ms => new Promise((resolve, reject) => setTimeout(resolve, ms))

function* addTodo(action) {
  // do something
  console.log('$$$$ addTodo function', action)
  yield
}

function* deleteTodo(action) {
  yield
}

function* addTodoRequest(action) {
  const { payload } = action // we are getting simple string of content

  yield call(delay, 1000)

  yield put({
    type: types.ADD_TODO_SUCCESS,
    payload: {
      caption: payload,
      isCompleted: false
    }
  })
}


export default function* rootSaga() {
  yield all([
    takeLatest(types.ADD_TODO, addTodo),
    takeLatest(types.DELETE_TODO, deleteTodo),
    takeLatest(types.ADD_TODO_REQUEST, addTodoRequest)
  ])
}
