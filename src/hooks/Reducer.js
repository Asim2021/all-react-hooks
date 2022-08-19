import { useReducer } from 'react'
import '../App.css'

const initialState = { count: 0, showText: true }

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 }
    case 'TOGGLE_TEXT':
      return { ...state, showText: !state.showText }
    default:
      return state
  }
}

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className='App'>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: 'INCREMENT' })
          dispatch({ type: 'TOGGLE_TEXT' })
        }}
      >
        Increment
      </button>
      <h2>{state.showText ? 'ASIM SHAH' : ''}</h2>
    </div>
  )
}

export default Reducer

// useReducer is nothing but just an Alternative of useState, also it gives more control to manage state.

// where you need to triger more than one actions, then we use useReducer. using single state to track all the actions

// It allows for custom state logic.

// Keeping track of multiple pieces of state that rely on complex logic, useReducer may be useful.

// The reducer function contains your custom state logic and the initialState can be a simple value but generally will contain an object.

// The useReducer Hook returns the current state and a dispatch method.

/*
 const initialTodos = [
  {
    id: 1,
    title: 'Todo 1',
    complete: false,
  },
  {
    id: 2,
    title: 'Todo 2',
    complete: false,
  },
]

const reducer = (state, action) => {
  switch (action.type) {
    case 'COMPLETE':
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete }
        } else {
          return todo
        }
      })
    default:
      return state
  }
}

const Reducer = () => {
  const [todos, dispatch] = useReducer(reducer, initialTodos)

  const handleComplete = (todo) => {
    dispatch({ type: 'COMPLETE', id: todo.id })
  }

  return (
    <div className='App'>
      {todos.map((todo) => (
        <div key={todo.id}>
          <label>
            <input
              type='checkbox'
              checked={todo.complete}
              onChange={() => handleComplete(todo)}
            />
            {todo.title}
          </label>
        </div>
      ))}
    </div>
  )
}
 */
