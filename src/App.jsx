import { useEffect, useState } from "react";
import Formulario from "./components/Formulario.jsx";
import Todos from "./components/Todos.jsx";

const InitialStateTodos = JSON.parse(localStorage.getItem('todos')) || [];

const App = () => { 

  const [todos, setTodos] = useState(InitialStateTodos);

  useEffect(() => {
    console.log('La puta de cabrales');
    localStorage.setItem('todos', JSON.stringify(todos))
  },[todos]);

  const addTodo = todo => {
    setTodos([...todos, todo]);
  }

  const DeleteTodo = id =>{
    const newArray = todos.filter(todo => todo.id !== id);
    setTodos(newArray);
  }

  const UpdateTodo = id =>{
    const newArray = todos.map(todo => {
      if(todo.id === id){
        todo.state = !todo.state
      }
      return todo;
    })
    setTodos(newArray)
  }

  const OrderTodo = arrayTodos =>{
    return arrayTodos.sort((a,b) =>{
      if (a.priority === b.priority) return 0
      if (a.priority) return -1
      if (!a.priority) return 1
    })
  }
  
  return(
  <div className="container">
    <h1 className="my-5">ToDo By Dev Hernandez</h1>
    <Formulario addTodo={addTodo}></Formulario>
    <Todos todos={OrderTodo(todos)} DeleteTodo={DeleteTodo} UpdateTodo={UpdateTodo}/>
  </div>
)};

export default App;