import React, { useState } from 'react'
import "./TodoApp.css"
import { BrowserRouter , Routes , Route , useNavigate ,useParams } from 'react-router-dom'
function TodoApp() {
  return (
    <div className='TodoApp' >
        <BrowserRouter>
            <Routes>
                <Route path='/' element = {<LoginComponent/>} /> 
                <Route path='/login' element = {<LoginComponent/>} />
                <Route path='welcome' element = {<WelcomeComponent/>} /> 
                <Route path='/welcome/:username' element = {<WelcomeComponent/>} />
                <Route path='/todos' element = {<TodoApp/>}/>



                <Route path='*' element = {<ErrorComponent/>} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

function LoginComponent(){

    const [username , setUsername] = useState("")
    const [password , setPassword] = useState("")
    const [showSucces , setShowSucces] = useState(false)
    const [showError , setShowError] = useState(false)
    const navigate = useNavigate();

    function handleSubmit(){
        if(username === "akif" && password === "1234"){
            setShowSucces(true)
            setShowError(false)
            navigate("/welcome")
        }else{
            setShowSucces(false)
            setShowError(true)
        }
    }
    return (
        <div className='Login'>
            {showSucces && <div className='successMessage'>Authendicated Succesfully </div>}
            {showError && <div className='errorMessage'>Authentication Failed </div>}
            <div className='LoginForm'>
                <div>
                    <label>User Name</label>
                    <input type="text" name='username' value={username} onChange={(e)=>{setUsername(e.target.value)}} />
                </div>
                <div>
                    <label>Password</label>
                    <input type='password' name='password' value={password} onChange={e =>{ setPassword(e.target.value) }} />
                </div>
                <div>
                    <button type='button' name='login' onClick={handleSubmit}>Login</button>
                </div>
            </div>
        </div>
    )
}


function ErrorComponent(){
    return (
        <div className='ErrorComponent'> 
        <h1>We are working for this</h1>
            <div>
                Sory mate :-(
            </div>
        </div>
    )
}




function WelcomeComponent(){

    const {username} = useParams();

    console.log(username);
    return (
        <div className='Welcome'>
            Welcome Component
        </div>
    )
}

function ListTodoComponent(){

    const todos = {id : 1 , description : "Learn AWS"}

    return(
        <div className='"ListToDoComponent'>
            <h1>Things You want to do !</h1>
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>id</td>
                            <td>description</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{todos.id}</td>
                            <td>{todos.description}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}



export default TodoApp