import { memo } from 'react'

const Todos = ({
  todos,
  addTodo,
  removeTodo = () => {
    console.log('Add delete todo functionality')
  },
}) => {
  let _todos = todos

  console.log('child render')
  return (
    <>
      <h2>My Todos</h2>
      {_todos.map((todo, index) => {
        return (
          <p
            key={index}
            onClick={() => removeTodo(todo)}
            style={{ cursor: 'pointer' }}
          >
            {todo}
          </p>
        )
      })}
      <button onClick={addTodo}>Add Todo</button>
    </>
  )
}

export default memo(Todos)
