import { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { FormGroup, Container, Box } from '@mui/material'
import { useAuth } from '../context/Auth.Context'
import {useParams, Link} from 'react-router-dom'

import * as API from '../api/api.auth'

function ResetPassword() {
     const [ password, setPassword ] = useState('')
  
     const { id } = useParams(':id');
     const { token } = useParams(':token');
    function onSubmit(event) {
        event.preventDefault()
        
        
        API.resetPassword(id, token, password)
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
                    <TextField label="password" value={password} onChange={(event) => { setPassword(event.target.value) }} />
                </FormGroup>
              
                <Button variant="outlined" onClick={(event) => onSubmit(event)}>Resetear</Button>
            </Box>
           
        </Container>
    )
}

export default ResetPassword