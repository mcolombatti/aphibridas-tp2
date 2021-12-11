import logo from './logo.svg';
import './App.css';
import {useState, useEffect } from 'react'
import { Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom';
import Login from './pages/Login' 
import Logout from './pages/Logout'  
import Create from './pages/Create'  
import AssignCapacitacion from './pages/AssignCapacitacion'  
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Empleados from './pages/Empleados'; 
import DetailsEmpleado from './pages/Empleado';
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

  return (
    <div className="App">
    
        <div >
          <NavAuth>
          <Box sx={{ flexGrow: 1 }} className="links">
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            HR Connect
          </Typography>
          <Button color="inherit"> <Link to="/">Home</Link></Button>
          <Button color="inherit"> <Link to="/login">Login</Link></Button>
          <Button color="inherit"> <Link to="/empleados">Empleados</Link></Button>
          <Button color="inherit"><Link to="/create">Crear</Link></Button>
          <Button color="inherit"> <Link to="/logout">Logout</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
          
            
            
          </NavAuth>
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home/>}/>
             <Route path="/login" element={<Login />} />
          <Route path="/empleados" element={
            <AuthRoute><Empleados /></AuthRoute>
          } /> <Route path="/create" element={
            <AuthRoute><Create /></AuthRoute>
          } />
          <Route path="/empleados/:id" element={<AuthRoute><DetailsEmpleado /></AuthRoute>} />
          <Route path="/empleados/assign/:id" element={<AuthRoute><AssignCapacitacion /></AuthRoute>} />
            <Route path="/logout" element={<Logout/>} />
            <Route path="/404" element={<h1>Sitio no encontrado</h1>}/>
            <Route path="*" element={<Navigate to="/404" />} />
          </Routes>
        </div>
    </div>
  );
}

export default App;
