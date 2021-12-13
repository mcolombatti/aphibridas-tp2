import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEmpleados, EmpleadosProvider } from '../context/Empleados.Context'; 
import Empleado from './EmpleadoVistaAdmin';
 
import Eliminar from './Eliminar';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
 
{/* 
function EmpleadoListItem(props) {
    const { empleados} = useEmpleados();
    const [error, setError] = useState('');
 
    return (<div>
        
            <li  className="blog-preview" >
                {error && <p>{error}</p>}
                <h2>DNI: {props.empleado.dni} - {props.empleado.apellido} {props.empleado.name}</h2>
                <div style={{"display": "flex",   "flexDirection": "column", "flexWrap": "wrap", "justifyContent": "center",   "alignItems": "center"}} >
                    <Link className= "btn-detail" empleado={props.empleado} style={{"marginTop": "2em" }} to={`/empleados/${props.empleado._id}`} >Ver detalles</Link>
                     <Link  className= "btn-detail" empleado={props.empleado}  style={{"marginTop": "2em" }}  to={`/empleados/assign/${props.empleado._id}`} >Asignar capacitacion</Link>
                </div>
               <Eliminar empleado={props.empleado}/>  </li>
    </div>
    )
} */}

function EmpleadoList() {
    const { empleados } = useEmpleados();

    return (
        <div> 
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>DNI</TableCell>
            <TableCell align="right">Nombre</TableCell>
            <TableCell align="right">Detalles</TableCell>
            <TableCell align="right">Capacitaciones</TableCell>
            <TableCell align="right">Eliminar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        
          {empleados?.map(empleado => (
            <TableRow
              key={empleado.na_idme}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              {empleado.dni}
              </TableCell>
              <TableCell component="th" scope="row">
              {empleado.apellido} {empleado.name}
              </TableCell>
              <TableCell component="th" scope="row">
              <Link className= "btn-detail" empleado={empleado} style={{"marginTop": "2em" }} to={`/empleados/${empleado._id}`} >Ver detalles</Link>
              </TableCell>
              <TableCell component="th" scope="row">
              <Link  className= "btn-detail" empleado={empleado}  style={{"marginTop": "2em" }}  to={`/empleados/assign/${empleado._id}`} >Asignar capacitacion</Link>
              </TableCell>
              <TableCell component="th" scope="row">
              <Eliminar empleado={empleado}/>  </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            <ul className="blog-list">
              
            </ul>
        </div>
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