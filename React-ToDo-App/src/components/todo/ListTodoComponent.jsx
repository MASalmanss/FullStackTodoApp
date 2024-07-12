import React, { useEffect } from 'react';
import { deleteTodoforIdApi, retrieveAllTodosForUsername } from './api/TodoApiService';
import { useNavigate } from 'react-router-dom';

export function ListTodoComponent() {
  const today = new Date();
  const targetDate = new Date(today.getFullYear() + 12, today.getMonth(), today.getDate());
  const navigate = useNavigate()
  const [todos , setTodos] = useEffect([])
  const [message , setMessage] = useEffect(null)

  
  useEffect(()=>{
    refreshTodos()
  },[])

  function refreshTodos(){
    retrieveAllTodosForUsername("in28minutes").then((response)=> {setTodos(response.data)})
  }

  function deleteTodo(id){
    console.log(id + "deleted");
    deleteTodoforIdApi("in28minutes" , id).then(
      ()=> {setMessage("Deleted"); refreshTodos()}
    ).catch(err => console.log(err))
  }

  function updateTodo(id){
    console.log("clicked " + id);
    navigate(`/todo/${id}`)

  }

  return (
    <div className='ListTodoComponent text-center'>
      <h1>Things You Want to Do!</h1>
      {message &&       <div className='alert alert-warning'>{message}</div>    }
      <div>
        <table className='table table-md table-striped'>
          <thead>
            <tr>
              <th>Id</th>
              <th>Description</th>
              <th>Done</th>
              <th>Target Date</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {todos.map(todo => (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.description}</td>
                <td>{todo.done ? "Yes" : "No"}</td>
                <td>{todo.targetDate.toString()}</td>
                <td><button className='btn btn-warning' onClick={deleteTodo(todo.id)}>Delete</button></td>
                <td><button className='btn btn-warning' onClick={updateTodo(todo.id)}>Update</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
