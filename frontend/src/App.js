import logo from './logo.svg';
import './App.css';
import {useState, useEffect } from 'react'
import { Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom';
import Login from './pages/Login' 
import Logout from './pages/Logout' 

import Create from './pages/Create' 

import Empleados from './pages/Empleados';
import Empleado from './pages/Empleado';
import Home from './pages/Home'
import { useAuth } from './context/Auth.Context'

function AuthRoute({ children }) {
  const { state } = useAuth()
  return state.isAuthenticated ? children : <Navigate to="/login" />
}

function NavAuth({ children }) {
  const { state } = useAuth()
  return state.isAuthenticated ? children : null
}




function App(props) {
  const auth = useAuth()

  let navigate = useNavigate();
  
  useEffect(() => {
    if (auth.state.isAuthenticated) {
      navigate('/')
    }
    else {
      navigate('/login')
    }
  }, [auth.state])

  useEffect(() => {
    if (localStorage.getItem('token') && localStorage.getItem('user')){
      const user = JSON.parse(localStorage.getItem('user'))
      auth.dispatch({ type: 'LOGIN', payload: user })
    }
  }, [])
  useEffect(() => {
    if (localStorage.getItem('token') && localStorage.getItem('user')){
      const token = JSON.parse(localStorage.removeItem('token'))
      const user = JSON.parse(localStorage.removeItem('user'))
      auth.dispatch({ type: 'LOGIN', payload: [token, user] })
    }
  }, [])

  return (
    <div className="App">
    
        <div className="navbar">
          <NavAuth>
            <nav class="links">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/login">login</Link>
                </li>
                <li>
                <Link to="/empleados">Empleados</Link>
              </li>
                <li>
                  <Link to="/create">Crear</Link>
                </li>
                <li>
                  <Link to="/logout">logout</Link>
                </li>
              </ul>
            </nav>
          </NavAuth>
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={
            <AuthRoute><Home/></AuthRoute>
          }/>
             <Route path="/login" element={<Login />} />
          <Route path="/empleados" element={
            <AuthRoute><Empleados /></AuthRoute>
          } /><Route path="/create" element={
            <AuthRoute><Create /></AuthRoute>
          } />
          <Route path="/empleado/:id" element={<Empleado />} />
            <Route path="/logout" element={<Logout/>} />
            <Route path="/404" element={<h1>Sitio no encontrado</h1>}/>
            <Route path="*" element={<Navigate to="/404" />} />
          </Routes>
        </div>
    </div>
  );
}

export default App;
