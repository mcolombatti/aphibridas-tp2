import config from '../config/config';
export async function getBeneficios() {
    return fetch(`${config.api.url}beneficios/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': `${localStorage.getItem('token')}`
        }
    })
        .then(res => res.json())
        .catch(function (res, err) {
            if (err.error) {
                res.status(404).json({ error: 400, msg: ` La información solicitada no existe ${err}` })
            }
            else {
                res.status(500).json({ error: 500, msg: `Ocurrió un error inesperado ${err}` })
            }
        })
}
export default {
    getBeneficios
}