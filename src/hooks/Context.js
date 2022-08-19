import { useState, createContext, useContext } from 'react'
import '../App.css'

const UserContext = createContext()

const Context = () => {
  // const [user, setUser] = useState('Asim')
  const [flag,setFlag] = useState(false)

  return (
    <UserContext.Provider value={flag}>
      <div className='App'>
        <h1>{`Hello ${ flag ? "Asim" : "John"}!`}</h1>
        <Component2 user={flag} />
        <button onClick={()=>setFlag(!flag)}> Toggle User</button>
      </div>
    </UserContext.Provider>
  )
}

function Component2({user}) {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  )
}

function Component3() {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 />
    </>
  )
}

function Component4() {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 />
    </>
  )
}

function Component5() {
  const flag = useContext(UserContext)

  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${flag ? 'Asim' : 'John'} again!`}</h2>
    </>
  )
}

export default Context
