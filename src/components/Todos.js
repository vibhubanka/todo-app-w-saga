import React from 'react'
import { connect } from 'react-redux'
import types from '../actionTypes'
import Todo from './Todo'

const todos = [
  { caption: '12345678', isCompleted: false },
  { caption: 'wedkbs', isCompleted: true },
  { caption: 'wkehbd', isCompleted: false },
  { caption: '1234567890-09876543', isCompleted: false },
  { caption: 'dewdfwjchba', isCompleted: false }
]

const Todos = props => {
  console.log('$$$$ Todos props', props)
  return (
    <div>
      <div>
        <input type="text"></input>
        <button onClick={props.addTodo}>Add</button>
      </div>

      <div>
        {props.todos.map((todo, index) => (
          <Todo key={`${index}-${todo.caption}`} caption={todo.caption} isCompleted={todo.isCompleted} />
        ))}
      </div>

      {props.isLoading && (
        <div style={{ position: 'fixed', top: '5px', right: '5px', backgroundColor: 'crimson' }}>
          {'loading.....'}
        </div>
      )}
    </div>
  )
}

const mapStateToProps = state => ({
  // should return an object, which is added to the component's props by `connect` HOC
  todos: state.todos,
  isLoading: state.loading
})

const mapDispatchToProps = dispatch => ({
  // should return an object, which is added to the component's props by `connect` HOC
  addTodo: () => dispatch({
    type: types.ADD_TODO_REQUEST,
    payload: '11111'
  })
})

export default connect(mapStateToProps, mapDispatchToProps)(Todos)
