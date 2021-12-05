import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEmpleados, EmpleadosProvider } from '../context/Products.Context'; 
import Empleado from './Empleado';

function EmpleadoListItem(props) {
    const { empleados, remove } = useEmpleados();
    const [error, setError] = useState('');
 
    return (
        <li  className="blog-preview" >
            {error && <p>{error}</p>}
            <h2>DNI: {props.empleado.dni}- {props.empleado.apellido}{props.empleado.name}</h2>
            <Link empleado={props.empleado}  to={`/empleados/${props.empleado._id}`} >Ver detalles</Link>
            <div className="delete"><button onClick={()=>remove(props.empleado)}>Eliminar</button></div>
        </li>
    )
}

function EmpleadoList() {
    const { empleados } = useEmpleados();

    return (
        <ul className="blog-list">
            {empleados?.map(empleado => (
                
                <EmpleadoListItem  key={empleado._id} empleado={empleado} />
            ))}
        </ul>
    )
}


function EmpleadosPage(props) {
    return (
        <div>
            <h1>Empleados</h1>
            <EmpleadosProvider >
                <EmpleadoList /> 
            </EmpleadosProvider>
        </div>
    )
}
export default EmpleadosPage;