import { useDebugValue, useState, useEffect} from 'react'

function useCount() {
  const [count, setCount] = useState(0)

  useEffect(()=>{
    let timerId = setInterval(() => {
      setCount(count + 1)
    }, 3000)
     return ()=>clearInterval(timerId)
  },[count])

  useDebugValue(count)
  return count
}

const DebugValue = () => {

  const count = useCount()

  return (
    <div className='App'>
      <button>{count}</button>
    </div>
  )
}

export default DebugValue

// useDebugValue Hook helps developers to debug CUSTOM HOOK.

// Introduced for the ReactJs versions above 18.

// This debug information is displayed within the REACT DEV TOOLs under components and then hooks.
