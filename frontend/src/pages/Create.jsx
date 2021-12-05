import { useState } from 'react';
import { useEmpleados, EmpleadosProvider } from '../context/Products.Context';


function Create() {
const { empleados, create } = useEmpleados();
const [name, setName] = useState('');
const [dni, setDni] = useState('');
const [email, setEmail] = useState('');
const [calle, setCalle] = useState('');
const [altura, setAltura] = useState('');
const [edad, setEdad] = useState('');
const empleado = { name, dni, email, calle, altura, edad };

return (
<div className="create">
    <h2>Crear un Empleado</h2>
    <form onSubmit={(e)=>create(empleado)}>
        <label>Nombre del Empleado:</label>
        <input type="text" required value={name} onChange={(e)=> setName(e.target.value)}
        />
        <label>DNI:</label>
        <input required type="number" value={dni} onChange={(e)=> setDni(e.target.value)}
        ></input>
        <label>Email:</label>
        <input required type="text" value={email} onChange={(e)=> setEmail(e.target.value)}
        ></input><label>Calle:</label>
        <input required type="text" value={calle} onChange={(e)=> setCalle(e.target.value)}
        ></input><label>Altura:</label>
        <input required type="number" value={altura} onChange={(e)=> setAltura(e.target.value)}
        ></input>
        <label>Edad:</label>
        <input type="number" required value={edad} onChange={(e)=> setEdad(e.target.value)}
        ></input>

        <button>Crear</button>
    </form>
</div>
)
}


function CreatePage(props) {
return (
<div>
    <h1>Empleados</h1>
    <EmpleadosProvider>
        <Create />
    </EmpleadosProvider>
</div>
)
}
export default CreatePage;