import { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { FormGroup, Container, Box } from '@mui/material'
import { useAuth } from '../context/Auth.Context'

import {   Link} from 'react-router-dom'
import * as API from '../api/api.auth'

function ForgotPassword() {
     const [ email, setEmail ] = useState('')
  
    function onSubmit(event) {
        event.preventDefault()
        
        
        API.forgotPassword(email)
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
                <h1>Resetear</h1>
                <FormGroup>
                    <TextField label="E-Mail" value={email} onChange={(event) => { setEmail(event.target.value) }} />
                </FormGroup>
              
                <Button variant="outlined" onClick={(event) => onSubmit(event)}>Resetear</Button>
            </Box>
           
        </Container>
    )
}

export default ForgotPassword