import {useParams} from 'react-router-dom'
import { useEffect, useState } from 'react';
import { useEmpleado, EmpleadoProvider } from '../context/Empleado.Context';
 
const Empleado = () => {
    const { empleado, useIdFetch } = useEmpleado();
    
    const userid = JSON.parse(localStorage.getItem('userid'))
    console.log(userid)
    const { state: empleadoD} = useIdFetch(userid);
    return (
            <div>
            
              <EmpleadoInfo empleadoD={empleadoD} />
          </div>
    )
  }
  const EmpleadoInfo = ({ empleadoD }) => {
    const { empleado } = useEmpleado(); 
    return (<div>
       {empleadoD.capacitacion?.map(item => (<div>
       <h3>Capacitaciones del empleado</h3>
         
            <ul>
                    <li > Titulo: {item.name}</li>
                    <li > Fecha de inicio de la Capacitación: {item.fechainicio}</li>
                    <li > Duración  de la Capacitación: {item.horas} horas</li>
                    </ul>
       
     </div>
      ))}
    </div>
    )
}
function GetEmpleado(props) {
    return (
    <div>
          <h2>Ver Capacitaciones del Empleado </h2>
        <EmpleadoProvider>
            <Empleado />
        </EmpleadoProvider>
    </div>
    )
    }
    export default GetEmpleado;