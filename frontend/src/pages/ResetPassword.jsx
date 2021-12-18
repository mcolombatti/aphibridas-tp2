import { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { FormGroup, Container, Box } from '@mui/material'
import { useAuth } from '../context/Auth.Context'
import {useParams, Link} from 'react-router-dom'

import * as API from '../api/api.auth'

function ResetPassword() {
    const [ password, setPassword ] = useState('')
  
    const [ password2, setPassword2 ] = useState('')
  
    const { id, token } = useParams('id, token');
    function onSubmit(event) {
        event.preventDefault()
        
        
        API.resetPassword(id, token, password, password2)
         .then(function(data) {
          console.log(data)
        })
        .catch(function(error){
            alert(JSON.stringify(error))
        }) 
    }
    return (
        <Container className="login" maxWidth="sm">
            <Box>
                <h1>Nuevo pass</h1>
                <FormGroup>
                    <TextField label="Password" type="password" value={password} onChange={(event) => { setPassword(event.target.value) }} />
                </FormGroup>
                <FormGroup>
                    <TextField label="Repetir password" type="password" value={password2} onChange={(event) => { setPassword2(event.target.value) }} />
                </FormGroup>
              
                <Button variant="outlined" onClick={(event) => onSubmit(event)}>Resetear</Button>
            </Box>
           
        </Container>
    )
}

export default ResetPassword