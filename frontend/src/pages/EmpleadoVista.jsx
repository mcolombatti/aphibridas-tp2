import {useParams} from 'react-router-dom'
import { useEffect, useState } from 'react';
import { useEmpleados, EmpleadosProvider } from '../context/Products.Context';
 
const Empleado = () => {
    const { empleados, useIdFetch } = useEmpleados();
    ;
    const { state: empleado} = useIdFetch('61b6258a68333ffbdbcaa830');
    return (
            <div>
            
              <EmpleadoInfo empleado={empleado} />
          </div>
    )
  }
  const EmpleadoInfo = ({ empleado }) => {
    const { empleados } = useEmpleados(); 
    return (<div>
      
        <h3>Id: {empleado._id}</h3>
      <p>nombre: {empleado.name}</p>
      <p>dni: {empleado.dni}</p>
      <p>fecha de nacimiento: {empleado.fechanac}</p> 
    </div>
    )
}
function GetEmpleado(props) {
    return (
    <div>
        <h2>Ver detalles del Empleado </h2>
        <EmpleadosProvider>
            <Empleado />
        </EmpleadosProvider>
    </div>
    )
    }
    export default GetEmpleado;