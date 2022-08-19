import { useState, useMemo } from 'react'
import '../App.css'
import Todos from '../components/Todos'

const Memo = () => {
  const [count, setCount] = useState(0)
  const [todos, setTodos] = useState([])

  //   const calculation = expensiveCalculation(count)
  const calculation = useMemo(() => {
    expensiveCalculation(count)
  }, [count])

  const increment = () => {
    console.log(calculation);
    setCount((c) => c + 1)
  }
  const addTodo = () => {
    setTodos((t) => [...t, 'New Todo ' +t.length])
  }

  function removeTodo(todo) {
    let filteredTodo = todos.filter((ele) => ele !== todo)
    setTodos(filteredTodo)
  }


  return (
    <div className='App'>
      <div>
        <Todos todos={todos} addTodo={addTodo} removeTodo={removeTodo} />
        <hr />

        <h3>Count: {count}</h3>
        <br />
        <button onClick={increment}>Increment Count</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
    </div>
  )
}

 const expensiveCalculation = (num) => {
   console.log('Calculating...')
   for (let i = 0; i < 1100000000; i++) {
     num += 1
   }
   return num
 }


export default Memo

// The React useMemo Hook returns a memoized value.

// The useMemo Hook only runs when one of its dependencies update. This can improve performance.

// The useMemo Hook can be used to keep expensive, resource intensive functions from needlessly running.
