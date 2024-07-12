import React from 'react'
import "./TodoApp.css"
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { LoginComponent } from './LoginComponent'
import { ErrorComponent } from './ErrorComponent'
import { FooterComponent } from './FooterComponent'
import { WelcomeComponent } from './WelcomeComponent'
import { LogoutComponent } from './LogoutComponent'
import { HeaderComponent } from './HeaderComponent'
import { ListTodoComponent } from './ListTodoComponent'
import AuthProvider from './security/AuthContext'
import { useAuth } from './security/AuthContext'
import TodoComponent from './TodoComponent'

function AuthenticatedRoute({children}){
  const authContext = useAuth()
    const auth = authContext.isAuthenticated
  if(authContext.isAuthenticated){
    return children
  }
  return <Navigate to="/"/>
}

function TodoApp() {
  return (
    <div className='TodoApp'>
      <AuthProvider>

        <BrowserRouter>
          <HeaderComponent/>
          <Routes>
            <Route path='/' element={<LoginComponent />} />
            <Route path='/login' element={<LoginComponent />} />

            <Route path='/welcome' element={
                <AuthenticatedRoute>
                  <WelcomeComponent />
                </AuthenticatedRoute>
              
              } />
            

            <Route path='/todo/:id' element = {
              <AuthenticatedRoute>
                <TodoComponent/>
              </AuthenticatedRoute>
            } />

            <Route path='/welcome/:username' element={<WelcomeComponent />} />
            <Route path='/todos' element={<ListTodoComponent />} />
            <Route path='/logout' element = {<LogoutComponent />} />
            <Route path='*' element={<ErrorComponent />} />
          </Routes>
        <FooterComponent/>
        </BrowserRouter>
      </AuthProvider>
    </div>
  )
}

export default TodoApp
