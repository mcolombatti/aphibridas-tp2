import { useState } from 'react';
import { useEmpleados, EmpleadosProvider } from '../context/Products.Context';
import { Button } from '@mui/material'; 
import TextField from '@mui/material/TextField';

function Create() {
    
const { empleados, create } = useEmpleados();
const [name, setName] = useState('');
const [apellido, setApellido] = useState('');
const [dni, setDni] = useState('');
const [email, setEmail] = useState('');
const [calle, setCalle] = useState('');
const [altura, setAltura] = useState('');
const [fechanac, setFechanac] = useState('');
const [titleError, setTitleError] = useState(false)
const [titleErrorDetail, setTitleErrorDetail] = useState('')
  
const empleado = { name, dni, email, calle, altura, fechanac, apellido };

const onSubmit = e => {
    e.preventDefault();
   
      create(empleado) 
    
  }
const onChange = e => {
    e.preventDefault();
    setName(e.target.value)
    setTitleError(false)
    if (name == '') {
        setTitleError(true)
        setTitleErrorDetail('el nombre es obligatorio')
      } 
    if (name.length < 3) {
        setTitleError(true)
        
        setTitleErrorDetail('el nombre debe tener al menos 3 caracteres')
      }   
    
  }
return (
    
<div className="create"> 

    <form noValidate autoComplete="off" onSubmit={onSubmit}>
     
    <TextField  
         onChange={(e)=> onChange(e)}
          label="Nombre del Empleado" 
          
          color="secondary" 
          type="text"
          required value={name}
          fullWidth
          required
          error={titleError}
        />
          {titleError && (
                    <p className="help is-danger">{titleErrorDetail}</p>
                  )} 
        {/*<label htmlFor="apellido">Apellido del Empleado:</label>
        <input type="text" value={apellido}  required value={apellido} onChange={(e)=> setApellido(e.target.value)}
        />
        <label htmlFor="dni">DNI:</label>
        <input required type="number" value={dni} onChange={(e)=> setDni(e.target.value)}
        ></input>
        <label htmlFor="email">Email:</label>
        <input type="email" value={email}  required value={email} onChange={(e)=> setEmail(e.target.value)}
        ></input>
        <label htmlFor="calle">Calle:</label>
        <input  type="text" value={calle}  required value={calle} onChange={(e)=> setCalle(e.target.value)}
        ></input>
        <label htmlFor="altura">Altura:</label>
        <input  type="text" value={altura}  required value={altura}  onChange={(e)=> setAltura(e.target.value)}
        ></input>
        <label htmlFor="fechanac">Fecha Nacimiento:</label>
        <input type="date" value={fechanac}  required value={fechanac}  onChange={(e)=> setFechanac(e.target.value)}
          ></input>*/}
 <Button
          type="submit" 
          color="secondary" 
          variant="contained" >
          Submit
        </Button>
      </form>
</div>
)
}


function CreatePage(props) {
return (
<div>
    <h2>Crear un Empleado</h2>
    <EmpleadosProvider>
        <Create />
    </EmpleadosProvider>
</div>
)
}
export default CreatePage;