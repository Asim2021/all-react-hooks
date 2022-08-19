import { useState, useCallback } from 'react'
import Todos from '../components/Todos'
import '../App.css'

const Callback = () => {
  const [count, setCount] = useState(0)
  const [todos, setTodos] = useState([])

  const increment = () => {
    setCount((c) => c + 1)
  }

// const addTodo = () => setTodos((t) => [...t, 'New Todo'])

  const addTodo = useCallback(()=>{
    setTodos((t)=>[...t,"New Todo " + t.length])
  },[])

  return (
    <div className='App'>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </div>
  )
}

export default Callback

// The React useCallback Hook returns a memoized callback function.

// This allows us to isolate resource intensive(time taking) functions so that they will not automatically run on every render.

// The useCallback Hook only runs when one of its dependencies update. This can improve performance.

//
