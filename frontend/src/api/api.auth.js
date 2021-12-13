import config from '../config/config';

export async function login(email, password){
    return fetch('http://localhost:9001/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    .then(function(res){
        if (res.status === 200) {
            return res.json()
        }
        else {
            throw new Error('Las credenciales ingresadas no son válidas')
        }
    })
} export async function user (email ){
    return fetch( `${config.api.url}empleados/query?email=${email}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
         
    })
    .then(function(res){
        if (res.status === 200) {
            return res.json()
        }
        else {
            throw new Error('Las credenciales ingresadas no son válidas')
        }
    })
}  export async function register(email, password, name){
    return fetch('http://localhost:9001/user/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password, name })
    })
    .then(function(res){
        if (res.status === 200) {
            return res.json()
        }
        else {
            throw new Error('Hubo un error al registrar')
        }
    })
}  