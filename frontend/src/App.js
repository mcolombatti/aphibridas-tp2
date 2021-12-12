import logo from './logo.svg';
import './App.css';
import {useState, useEffect } from 'react'
import { Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom';
import Login from './pages/Login' 
import Register from './pages/Register' 
import Logout from './pages/Logout'  
import Crear from './pages/Crear'  
import EmpleadoVista from './pages/EmpleadoVista'  
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

function AuthRole({ children }) {
  const { state } = useAuth()
  return (state.user.rol == 'admin') ?   children    : <Navigate to="/login" />
}

function NavAuth({ children }) {
  const { state } = useAuth()
  return state.isAuthenticated ? children : null
}
function NoNavAuth({ children }) {
  const { state } = useAuth()
  return state.isAuthenticated ?   null : children
}

function NavRole({ children }) {
  const { state } = useAuth()
  return (state.user.rol == 'admin') ?   children : null
}




function App(props) {
  const auth = useAuth()

  let navigate = useNavigate();
  
  useEffect(() => {
    if (!auth.state.isAuthenticated) {
      navigate('/login')
    }
    else {
      navigate('/')
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
          <NoNavAuth>
          <Button color="inherit"> <Link to="/">Home</Link></Button>
          <Button color="inherit"> <  Link to="/registrarse">Registrarse</Link></Button>
          <Button color="inherit"> <Link to="/login">Login</Link></Button>
          </NoNavAuth>
          <NavAuth>
         <NavRole> <Button color="inherit"> <Link to="/empleados">Empleados</Link></Button></NavRole>   
         <NavRole> <Button color="inherit"><Link to="/crear">Crear</Link></Button></NavRole> 
          <Button color="inherit"> <Link to="/logout">Logout</Link></Button>
          
          <Button color="inherit"> <Link to="/empleado/detalles">Detalles</Link></Button>
          </NavAuth>
        </Toolbar>
      </AppBar>
    </Box>
          
            
            
         
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home/>}/>
             <Route path="/login" element={<Login />} />
             <Route path="/registrarse" element={<Register />} />
             <Route path="/empleado/detalles" element={<EmpleadoVista />} />
          <Route path="/empleados" element={
            <AuthRoute> <AuthRole><Empleados /></AuthRole></AuthRoute>
          } /> <Route path="/crear" element={
            <AuthRoute><Crear /></AuthRoute>
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
