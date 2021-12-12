import { useState } from 'react';
import { useEmpleados, EmpleadosProvider } from '../context/Products.Context';
import { Button } from '@mui/material'; 
import TextField from '@mui/material/TextField';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required().min(3), 
  apellido: yup.string().required().min(3), 
  email: yup.string().email().required(),
  fechanac: yup.date('la fecha de nacimiento tiene que ser una fecha'),

  dni: yup.number('dni debe estar compuesto por numeros unicamente').required(),
});
function Create() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });
const { empleados, create } = useEmpleados();
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [dni, setDni] = useState(''); 
const [apellido, setApellido] = useState('');
const [fechanac, setFechaNac] = useState('');
 const empleado = {name, email, dni,fechanac,apellido}
 
const onSubmitHandler = data => {
  create(empleado) 
  console.log(data)
};
 
return (
    
<div className="create"> 

    <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmitHandler)}>
     
    <input {...register("name")} placeholder="name" type="text" required  onChange={(e)=> setName(e.target.value)}/>
    
          <p>{errors.name?.message}</p>
       <input {...register("apellido")} placeholder="apellido" type="text" required  onChange={(e)=> setApellido(e.target.value)}/>
    
          <p>{errors.apellido?.message}</p>
       <input {...register("email")} placeholder="email" type="email" required  onChange={(e)=> setEmail(e.target.value)}/>
    
          <p>{errors.email?.message}</p>
          
       <input {...register("dni")} placeholder="dni" type="number" value={dni}  required onChange={(e)=> setDni(e.target.value)} />
    
          <p>{errors.dni?.message}</p>

        <input {...register("fechanac")} type="date" value={fechanac}  required onChange={(e)=> setFechaNac(e.target.value)}/>
    
          <p>{errors.fechanac?.message}</p>
       
         
 <Button
          type="submit" 
          color="secondary" 
          variant="contained"  
          
          >
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