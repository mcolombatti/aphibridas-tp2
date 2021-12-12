import { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { FormGroup, Container, Box } from '@mui/material'
import { useAuth } from '../context/Auth.Context'

import * as API from '../api/api.auth'

function Register({ onRegister }) {
    const { state, dispatch } = useAuth()
    const [ email, setEmail ] = useState('')
    const [ user, setUser ] = useState('')
    const [ password, setPassword ] = useState('')

    function onSubmit(event) {
        event.preventDefault()

        API.register(email, password, user)
        .then(function(data) {
            localStorage.setItem('token', data.token)
            dispatch({ type: 'REGISTER', payload: data.user })
        })
        .catch(function(error){
            alert(JSON.stringify(error))
        })
    }
    return (
        <Container className="register" maxWidth="sm">
            <Box>
                <FormGroup>
                    <TextField label="E-Mail" value={email} onChange={(event) => { setEmail(event.target.value) }} />
                </FormGroup>
                <FormGroup>
                    <TextField label="Password" type="password" value={password} onChange={(event) => { setPassword(event.target.value) }} />
                </FormGroup> <FormGroup>
                    <TextField label="Nombre Usuario" type="text" value={user} onChange={(event) => { setUser(event.target.value) }} />
                </FormGroup>

                <Button variant="outlined" onClick={(event) => onSubmit(event)}>Acceder</Button>
            </Box>
        </Container>
    )
}

export default Register