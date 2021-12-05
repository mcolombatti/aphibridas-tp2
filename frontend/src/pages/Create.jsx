import { useState } from 'react';
import { useEmpleados, EmpleadosProvider } from '../context/Products.Context';
 

function Create() {
const { empleados, create } = useEmpleados();
const [name, setName] = useState('');
const [apellido, setApellido] = useState('');
const [dni, setDni] = useState('');
const [email, setEmail] = useState('');
const [calle, setCalle] = useState('');
const [altura, setAltura] = useState('');
const [fechanac, setFechanac] = useState('');
const empleado = { name, dni, email, calle, altura, fechanac, apellido };

return (
<div className="create"> 
    <form onSubmit={(e)=>create(empleado)}>
        <label>Nombre del Empleado:</label>
        <input type="text" required value={name} onChange={(e)=> setName(e.target.value)}
        /> <label>Apellido del Empleado:</label>
        <input type="text" required value={apellido} onChange={(e)=> setApellido(e.target.value)}
        />
        <label>DNI:</label>
        <input required type="number" value={dni} onChange={(e)=> setDni(e.target.value)}
        ></input>
        <label>Email:</label>
        <input required type="text" value={email} onChange={(e)=> setEmail(e.target.value)}
        ></input><label>Calle:</label>
        <input  type="text" value={calle} onChange={(e)=> setCalle(e.target.value)}
        ></input><label>Altura:</label>
        <input   type="number" value={altura} onChange={(e)=> setAltura(e.target.value)}
        ></input>
        <label>Fecha Nacimiento:</label>
        <input type="date" required value={fechanac} onChange={(e)=> setFechanac(e.target.value)}
        ></input>

        <button>Crear</button>
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