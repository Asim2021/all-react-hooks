import { useRef } from 'react'
import '../App.css'
import Button from '../components/Button'

const ImperativeHandle = () => {
  const buttonRef = useRef()
  return (
    <div className='App'>
      <button onClick={() => buttonRef.current.alterValue()}>
        Button From Parent
      </button>
      <br />
      <Button ref={buttonRef} />
    </div>
  )
}

export default ImperativeHandle

// useImperativeHandle customizes the instance value that is exposed to parent components when using ref.

// The useImperativeHandle hook works in the similar phase of useRef hook but only it allows us to modify the instance that is going to be passed with the ref object which provides a reference to any DOM element.

// SYNTAX : useImperativeHandle(ref, createHandle, [deps])

// useImperativeHandle should be used with forwardRef.
