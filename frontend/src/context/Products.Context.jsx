import { createContext, useContext, useState, useEffect } from "react";
import API from '../api/product.api' 
 
import {   useNavigate  } from 'react-router-dom';

const EmpleadosContext = createContext(); 


export function EmpleadosProvider(props) {
    const [empleados, setEmpleados] = useState()
     
 
  let navigate = useNavigate();
    useEffect(() => {
    
        fetch(`http://localhost:9001/api/empleados/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': `${localStorage.getItem('token')}`
            }
        })
        .then(res => {
          return res.json();
        })
        .then(data => {
            setEmpleados(data);
        })
        
     }
        
       , []);
    
    const remove = async (empleado) => {
        setEmpleados(empleados.filter(p => p._id !== empleado._id))
        return API.deleteEmpleado(empleado._id)
        .catch(() => {   
            throw new Error('Error al eliminar el empleado');
        });
    } 
    const create = async (empleado) => {
         
          
            return API.createEmpleado(empleado)
            .then(() => {
                
                navigate('/')
              })
    } 
    const get = async (id) => {
         
          
            return API.getEmpleadoDetails(id)
            .then(() => {
                
                navigate('/')
              })
    } 

    return (
                <EmpleadosContext.Provider value={{ empleados, setEmpleados, remove, create,get}}>
            {props.children}
        </EmpleadosContext.Provider>
    );
}

export function useEmpleados() {
    const context = useContext(EmpleadosContext);
    if (context === undefined) {
        throw new Error("useProducts must be used within a ProductsProvider");
    }
    return context;
}

