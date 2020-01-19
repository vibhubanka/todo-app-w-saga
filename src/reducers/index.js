import { combineReducers } from 'redux'
import types from '../actionTypes'

const initialState = {
  todos: [],
  loading: false
}

const reducerOne = (state = initialState, action) => {
  // action -> type, payload ('', undefined, {}, [])
  const { type, payload } = action
  switch (type) {
    case types.ADD_TODO: {
      console.log('$$$$ reducer type =', type)
      console.log('$$$$ reducer payload =', payload)
      return state
    }

    case types.DELETE_TODO: return state// do something

    case types.ADD_TODO_REQUEST: return { ...state, loading: true }

    case types.ADD_TODO_SUCCESS: {
      const updatedTodos = [ payload, ...state.todos ]
      console.log('$$$$ previous todos', state.todos)
      console.log('$$$$ current todos', updatedTodos)

      return {
        ...state,
        todos: updatedTodos,
        loading: false
      }
    }
    default:
      return state
  }
}

export default reducerOne
