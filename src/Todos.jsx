import Todo from './Todo'
import './css/Todos.css'

function Todos({todos,setTodos}) {

  return (
    <div id='todos'>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          todos={todos}
          setTodos={setTodos}
        />
      ))}

    </div>
  )
}

export default Todos