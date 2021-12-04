import logo from './logo.svg';
import './App.css';
import {useState, useEffect } from 'react'
import { Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom';
import Login from './pages/Login' 
import Logout from './pages/Logout' 
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
      <h1>Bienvenido a HR Connect</h1>
        <NavAuth>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">login</Link>
              </li> 
              <li>
                <Link to="/logout">logout</Link>
              </li> 
            </ul>
          </nav>
        </NavAuth>
        <Routes>
          <Route path="/" element={
          <AuthRoute><Home/></AuthRoute>
        }/>
          <Route path="/login" element={<Login/>} />
          <Route path="/logout" element={<Logout/>} />
          <Route path="/404" element={<h1>Sitio no encontrado</h1>}/>
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
    </div>
  );
}

export default App;
