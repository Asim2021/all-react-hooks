import { useState, useRef, useEffect } from 'react'
import './App.css'
import Clock from './components/CClock'
import FClock from './components/FClock'
import useFetch from './hooks/Custom'

const URL = 'https://jsonplaceholder.typicode.com/todos'

function App() {
  const [value, setValue] = useState('')
  const [todo, setTodo] = useState([])
  const inputRef = useRef()

  let fetchedTodo = useFetch(URL)

  useEffect(() => {    
    inputRef.current.focus()
  }, [])

  function submitHandler(e) {
    e.preventDefault()
    let d = new Date()
    let title = value
    if (value) {
      setTodo([...todo, { title, id: d.getTime() }])
      setValue('')
    }
  }

  function deleteTodo(id) {
    let _todo = todo.filter((ele) => ele.id !== id)
    setTodo(_todo)
  }

  return (
    <div className='App'>
      <h1>ASIM SHAH</h1>
      <form onSubmit={submitHandler}>
        <input
          ref={inputRef}
          type='text'
          value={value}
          placeholder="What's the todo?"
          onChange={(e) => setValue(e.target.value)}
          required
        />
        <button className='btn-submit' type='submit'>
          Add
        </button>
      </form>
      <hr />
      <div className='todo-div'>
        {todo.map((ele, i) => {
          return (
            <div key={i} style={{ display: 'flex', margin: '10px' }}>
              <li>{ele.title}</li>
              <button className='btn-delete' onClick={() => deleteTodo(ele.id)}>
                Delete
              </button>
            </div>
          )
        })}
      </div>
      <hr />
      <Clock name='Garima' />
      <hr />
      <FClock name='Asim' />
      <hr />
      <button onClick={() => console.log(fetchedTodo)}>Log Todo Data</button>
    </div>
  )
}

export default App

/*

 * you cannot return false to prevent default behavior in React. You must call preventDefault explicitly. For example, with plain HTML, to prevent the default form behavior of submitting

 * <form onsubmit="console.log('You clicked submit.'); return false">
  <button type="submit">Submit</button>
  </form>

 * function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }
  
 */
