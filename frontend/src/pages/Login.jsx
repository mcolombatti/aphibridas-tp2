import { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { FormGroup, Container, Box } from '@mui/material'
import { useAuth } from '../context/Auth.Context'

import * as API from '../api/api.auth'

function Login({ onLogin }) {
    const { state, dispatch } = useAuth()
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    function onSubmit(event) {
        event.preventDefault()

        API.login(email, password)
        .then(function(data) {
            localStorage.setItem('token', data.token)
            localStorage.setItem('user', JSON.stringify(data.user)) 
            dispatch({ type: 'LOGIN', payload: data.user })
        })
        .catch(function(error){
            alert(JSON.stringify(error))
        })
    }
    return (
        <Container className="login" maxWidth="sm">
            <Box>
                <FormGroup>
                    <TextField label="E-Mail" value={email} onChange={(event) => { setEmail(event.target.value) }} />
                </FormGroup>
                <FormGroup>
                    <TextField label="Password" type="password" value={password} onChange={(event) => { setPassword(event.target.value) }} />
                </FormGroup>

                <Button variant="outlined" onClick={(event) => onSubmit(event)}>Acceder</Button>
            </Box>
        </Container>
    )
}

export default Login