import {useParams} from 'react-router-dom'
import { useEffect, useState } from 'react';
import { useEmpleado, EmpleadoProvider } from '../context/Empleado.Context';
 
const Empleado = () => {
    const { empleado, useIdFetch } = useEmpleado();
    ;
    const { state: empleadoD} = useIdFetch('61b6258a68333ffbdbcaa830');
    return (
            <div>
            
              <EmpleadoInfo empleadoD={empleadoD} />
          </div>
    )
  }
  const EmpleadoInfo = ({ empleadoD }) => {
    const { empleado } = useEmpleado(); 
    return (<div>
      
        <h3>Id: {empleadoD._id}</h3>
      <p>nombre: {empleadoD.name}</p>
      <p>dni: {empleadoD.dni}</p>
      <p>fecha de nacimiento: {empleadoD.fechanac}</p> 
    </div>
    )
}
function GetEmpleado(props) {
    return (
    <div>
        <h2>Ver detalles del Empleado </h2>
        <EmpleadoProvider>
            <Empleado />
        </EmpleadoProvider>
    </div>
    )
    }
    export default GetEmpleado;