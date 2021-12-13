import config from '../config/config';

export async function deleteEmpleado(id) {
    return fetch(`${config.api.url}empleados/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': `${localStorage.getItem('token')}`
        }
    })
    .then(res => res.json())
}
export async function getEmpleados() {
    return fetch(`${config.api.url}empleados/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': `${localStorage.getItem('token')}`
        }
    })
    .then(res => res.json())
}
export async function createEmpleado(empleado) {
    return fetch(`${config.api.url}empleados/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': `${localStorage.getItem('token')}`
        },
        body: JSON.stringify(empleado)
    })
    .then(function(res){
        res.json({ msg: "Usuario registrado satisfactoriamente"})
    })
    .catch(function (res, err){
        if (err.error){
            res.status(400).json({ error: 400, msg: err.msg})
            console.log(err.error)
        }
        else {
            res.status(500).json({error:500, msg: `Ocurrió un error inesperado ${err}`})
        }
    })
}  

export async function getEmpleadoDetails(id) {
    return fetch(`${config.api.url}empleados/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': `${localStorage.getItem('token')}`
        }
    })
    .then(res => res.json())
}
export async function assignCapacitacionEmpleado(id, capacitacion) {
    return fetch(`${config.api.url}empleados/${id}/capacitaciones`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': `${localStorage.getItem('token')}`
        },
        body: JSON.stringify(capacitacion)
    })
    .then(res => res.json())
}

export default {
    deleteEmpleado, getEmpleados, createEmpleado, getEmpleadoDetails, assignCapacitacionEmpleado
}