import { useLayoutEffect, useEffect, useState } from 'react'
import '../App.css'

const LayoutEffect = () => {
  const [flag, setFlag] = useState(true)

  useEffect(() => {
    console.log('UseEffect')
  }, [flag])

  useLayoutEffect(() => {
    console.log('UseLayoutEffect')
  }, [flag])

  function clickHandler() {
    setFlag((s) => !s)
  }

  return (
    <div className='App'>
      LayoutEffect
      <br />
      {flag ? 'Asim Shah' : 'John Wick'}
      <button onClick={clickHandler}>Click Me</button>
    </div>
  )
}

export default LayoutEffect

// The useLayoutEffect works similarly to useEffect but rather working asynchronously like useEffect hook, it fires synchronously after all DOM loading is done loading

// This is useful for synchronously re-rendering the DOM and also to read the layout from the DOM.

// But to prevent blocking the page loading, we should always use useEffect hook.

// useLayoutEffect called before useEffect
