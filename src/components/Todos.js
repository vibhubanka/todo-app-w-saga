import React, { useState } from 'react'
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

/*
class components -> implemented through a class -> this.setState
functional components -> implemented through function
*/

// class Todos extends Component -> lifecycle methods
// onChange on an input -> this.setState({ inputValue: e.target.value })
// updateValue(e.target.value)
const Todos = props => {
  const [inputState, updateInputState] = useState('initialValue')
  console.log('$$$$ value', inputState)
  const fn = function () {
    props.addTodo(inputState)
  }

  return (
    <div>
      <div>
        <input type="text" onChange={e => updateInputState(e.target.value)} value={inputState}></input>
        <button onClick={() => props.addTodo(inputState)}>Add</button>
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
/* Why the app is going into infinit loop when
button's onClick was set to props.addTodo(inputState) instead of () => props.addTodo(inputState)

-> first render
-> addTodo called
-> dispatched an action
-> saga listened to it & reducer also updated the store with `loading: true`
  -> store asked the component to update
  -> addTodo called -> but it was not listened in saga because of `takeLatest`
-> saga dispatched another action
-> reducer updated the store with `todo: [...]`
  -> store asked the component to update
  -> addTodo called -> this time the saga listened
*/

const mapStateToProps = state => ({
  // should return an object, which is added to the component's props by `connect` HOC
  todos: state.todos,
  isLoading: state.loading
})

const mapDispatchToProps = dispatch => ({
  // should return an object, which is added to the component's props by `connect` HOC
  addTodo: (val) => dispatch({
    type: types.ADD_TODO_REQUEST,
    payload: val
  }) // returns undefined
})

export default connect(mapStateToProps, mapDispatchToProps)(Todos)
