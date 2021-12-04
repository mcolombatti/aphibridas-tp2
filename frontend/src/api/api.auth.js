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
}  