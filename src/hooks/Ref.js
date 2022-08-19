import { useState, useEffect, useRef } from 'react'
import '../App.css'

const Ref = () => {
  const [inputValue, setInputValue] = useState('')
  const inputElement = useRef()
  const count = useRef(0) //returns an Object called current({current:value}).


  useEffect(() => {
    count.current = count.current + 1
  },[inputValue])

  const focusInput = () => {
    inputElement.current.focus()
  }

  function IncreaseCount(){
    count.current = count.current + 1
  }

  return (
    <div className='App'>
      <input
        type='text'
        ref={inputElement}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
      <button onClick={focusInput}>Focus Input</button>
      <br />
      <button onClick={IncreaseCount}>Increase Count</button>
    </div>
  )
}

export default Ref

// useRef Hook allows you to persist values between renders.

//It can be used to store a mutable value that does not cause a re-render when updated.

//It can be used to access a DOM element directly.

//If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render. To avoid this, we can use the useRef Hook.
