import {useParams} from 'react-router-dom'
import { useState } from 'react';
import { useEmpleados, EmpleadosProvider } from '../context/Products.Context';
function Get(props) { 
    
const { empleados, useFetch } = useEmpleados();
  const { id } = useParams(); 
const { data: item} = useFetch(id);



  return (
      <div>
          <h1>Detalles del empleado</h1>
          <ul>
              <li> id: #{item}</li>
             
          </ul>
      </div>
  )
}

function GetEmpleado(props) {
    return (
    <div>
        <h2>Ver detalles del Empleado </h2>
        <EmpleadosProvider>
            <Get />
        </EmpleadosProvider>
    </div>
    )
    }
    export default GetEmpleado;