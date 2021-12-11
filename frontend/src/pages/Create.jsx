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
const [titleApellidoErrorDetail, setApellidoErrorDetail] = useState('')
const [titleNameErrorDetail, setNameErrorDetail] = useState('')
const [titleDniErrorDetail, setDniErrorDetail] = useState('')
const [titleEmailErrorDetail, setEmailErrorDetail] = useState('')
  
const empleado = { name, dni, email, calle, altura, fechanac, apellido };

const onSubmit = e => {
    e.preventDefault();
   if(!titleError){
      create(empleado) 
    }
  }
const onChangeNombre = e => {
    e.preventDefault();
   
    setName(e.target.value)
    setTitleError(false)
    if (name == '') {
        setTitleError(true)
        setNameErrorDetail('el nombre es obligatorio')
      } 
    if (name.length < 3) {
        setTitleError(true)
        
        setNameErrorDetail('el nombre debe tener al menos 3 caracteres')
      }   
    
  }
const onChangeApellido = e => {
    e.preventDefault();
   
    setApellido(e.target.value)
    setTitleError(false)
    if (apellido == '') {
        setTitleError(true)
        setApellidoErrorDetail(`el apellido es obligatorio`)
      } 
    if (apellido.length < 3) {
        setTitleError(true)
        
        setApellidoErrorDetail(`el apellido debe tener al menos 3 caracteres`)
      }   
    
  }
const onChangeDni = e => {
    e.preventDefault();
   
    setDni(e.target.value)
    setTitleError(false)
    if (dni == '') {
        setTitleError(true)
        setDniErrorDetail(`el dni es obligatorio`)
      } 
    if (dni.length < 6) {
        setTitleError(true)
        
        setDniErrorDetail(`el dni debe tener al menos 6 caracteres`)
      }   

      const reg = new RegExp('^[0-9]*$');

      if (reg.test(dni)==false) {
      setTitleError(true)
        
        setDniErrorDetail(`el dni deben ser numeros`)
}  
    
  }
const onChangeEmail = e => {
    e.preventDefault();
   
    setEmail(e.target.value)
    setTitleError(false)
    if (email == '') {
        setTitleError(true)
        setEmailErrorDetail(`el email es obligatorio`)
      }  
  
    
  }
return (
    
<div className="create"> 

    <form noValidate autoComplete="off" onSubmit={onSubmit}>
     
    <TextField  
         onChange={(e)=> onChangeNombre(e)}
          label="Nombre del Empleado" 
          
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
         onChange={(e)=> onChangeApellido(e)}
          label="Apellido del Empleado" 
          
          color="secondary" 
          type="text"
          required value={apellido}
          fullWidth
          required
          error={titleError}
        />
          {titleError && (
                    <p className="help is-danger">{titleApellidoErrorDetail}</p>
                  )}  
          <TextField  
         onChange={(e)=> onChangeDni(e)}
          label="Dni del Empleado" 
          
          color="secondary"  
          required value={dni}
          fullWidth
          required
          error={titleError}
        />
          {titleError && (
                    <p className="help is-danger">{titleDniErrorDetail}</p>
                  )} 
       <TextField  
         onChange={(e)=> onChangeEmail(e)}
          label="Email del Empleado" 
          
          color="secondary"  
          required value={email}
          fullWidth
          required
          error={titleError}
        />
          {titleError && (
                    <p className="help is-danger">{titleEmailErrorDetail}</p>
                  )} 
      
 
         
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