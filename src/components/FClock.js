import React, { useState, useEffect } from 'react'

const FClock = (props) => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    let timerID = setInterval(() => {
      tick()
    }, 1000)

    return () => {
      clearInterval(timerID)
    }
  }, [])

  function tick() {
    setTime(new Date())
  }

  return (
    <div className='App'>
      <h2>*Functional Component*</h2>
      <h3>Hello {props.name}</h3>
      <h4>It's {time.toLocaleString()}</h4>
    </div>
  )
}

export default FClock
