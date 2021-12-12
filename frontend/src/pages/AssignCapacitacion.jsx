import { useState } from 'react';
import { useEmpleados, EmpleadosProvider } from '../context/Products.Context';
import { Button } from '@mui/material'; 
import TextField from '@mui/material/TextField';
import {useParams} from 'react-router-dom'
function Assign() {
    
const { empleados, assign } = useEmpleados(); 
const { id } = useParams(); 
const [name, setName] = useState('');
const [horas, setHoras] = useState('');
const [fechainicio, setFechaInicio] = useState('');
const [titleNameErrorDetail, setNameErrorDetail] = useState('')
const [titleHorasErrorDetail, setHorasErrorDetail] = useState('')
const [titleFechaInicioErrorDetail, setFechaInicioErrorDetail] = useState('')
const [titleError, setTitleError] = useState(false)
const capacitacion = {name, horas, fechainicio };


const onSubmit = e => {
  e.preventDefault();
  if(!titleError){
     assign(id, capacitacion) 
   }
 }
const onChangeNombre = e => {
  e.preventDefault();
 
  setName(e.target.value)
  setTitleError(false)
  if (name == '') {
      setTitleError(true)
      setNameErrorDetail('el titulo de la capacitacion es obligatorio')
    } 
  if (name.length < 3) {
      setTitleError(true)
      
      setNameErrorDetail('el titulo debe tener al menos 3 caracteres')
    }   
  
}
const onChangeHoras = e => {
  e.preventDefault();
 
  setHoras(e.target.value)
  setTitleError(false)
  if (horas == '') {
      setTitleError(true)
      setHorasErrorDetail('la duracion de la capacitacion es obligatorio')
    }  
  
}
const onChangeFechaInicio = e => {
  e.preventDefault();
 
  setFechaInicio(e.target.value)
  setTitleError(false)
  if (fechainicio == '') {
      setTitleError(true)
      setFechaInicioErrorDetail('la duracion de la capacitacion es obligatorio')
    }  
  
}
return (
    
<div className="create"> 

    <form noValidate autoComplete="off" onSubmit={onSubmit}>
     
    <TextField  
          onChange={(e)=> onChangeNombre(e)}
          label="Titulo de la capacitacion del Empleado" 
          
          color="secondary" 
          type="text"
          required value={name}
          fullWidth
          required
          error={titleError}
        />
          {titleError && (
                    <p className="help is-danger">{titleNameErrorDetail}</p>
                  )}  
      
  <TextField  
          onChange={(e)=> onChangeHoras(e)}
          label="Duracion de la capacitacion del Empleado" 
          
          color="secondary" 
          type="number"
          required value={horas}
          fullWidth
          required
          error={titleError}
        />
          {titleError && (
                    <p className="help is-danger">{titleHorasErrorDetail}</p>
                  )}  
      
  <TextField  
          onChange={(e)=> onChangeFechaInicio(e)}
          label="Fecha de Inicio de la capacitacion del Empleado" 
          
          color="secondary" 
          type="date"
          required value={fechainicio}
          fullWidth
          required
          error={titleError}
        />
          {titleError && (
                    <p className="help is-danger">{titleFechaInicioErrorDetail}</p>
                  )}  
      
 
         
 <Button
          type="submit" 
          color="secondary" 
          variant="contained" >
          Enviar
        </Button>
      </form>
</div>
)
}


function AssignCapacitacion(props) {
return (
<div>
    <h2>Asignar Capacitacion</h2>
    <EmpleadosProvider>
        <Assign />
    </EmpleadosProvider>
</div>
)
}
export default AssignCapacitacion;