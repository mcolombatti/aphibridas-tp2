import {useParams} from 'react-router-dom'
import { useEffect, useState } from 'react';
import { useEmpleado, EmpleadoProvider } from '../context/Empleado.Context';
 
const Empleado = () => {
    const { empleado, useIdFetch } = useEmpleado();
    
    const userid = JSON.parse(localStorage.getItem('userid'))
    const user = JSON.parse(localStorage.getItem('user'))  
    const { state: empleadoD} = useIdFetch(userid);
    return (
            <div>
            <h1>Capacitaciones de {user.name} </h1>
              <EmpleadoInfo empleadoD={empleadoD} />
          </div>
    )
  }
  const EmpleadoInfo = ({ empleadoD }) => {
    const { empleado } = useEmpleado(); 
    return (<div>
       {empleadoD.capacitacion?.map(item => (<div>
       
         
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
         
        <EmpleadoProvider>
            <Empleado />
        </EmpleadoProvider>
    </div>
    )
    }
    export default GetEmpleado;