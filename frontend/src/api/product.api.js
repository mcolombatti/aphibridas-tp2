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
    .then(res => res.json())
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

export default {
    deleteEmpleado, getEmpleados, createEmpleado, getEmpleadoDetails
}