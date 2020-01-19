import React from 'react'

const Todo = props => {
  return (
    <div>
      <span style={{ textDecoration: props.isCompleted && 'line-through' }}>
        {props.caption}
      </span>
    </div>
  )
}

export default Todo
