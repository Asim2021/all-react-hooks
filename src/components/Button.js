import { useImperativeHandle, useState, forwardRef } from 'react'

const Button = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false)

  useImperativeHandle(ref, () => ({
    alterValue() {
      setToggle(!toggle)
    },
  }))

  return (
    <>
      <button onClick={() => setToggle(!toggle)}>Button From Child</button>
      <br />
      {toggle && <h2>Toggle</h2>}
    </>
  )
})

export default Button

// useImperativeHandle customizes the instance value that is exposed to parent components when using ref.

// The useImperativeHandle hook works in the similar phase of useRef hook but only it allows us to modify the instance that is going to be passed with the ref object which provides a reference to any DOM element.

// SYNTAX : useImperativeHandle(ref, createHandle, [deps])

// useImperativeHandle should be used with forwardRef.

// Ref forwarding is a technique for automatically passing a ref through a component to one of its children.