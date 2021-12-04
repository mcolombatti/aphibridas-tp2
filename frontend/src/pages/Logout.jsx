 
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { FormGroup, Container, Box } from '@mui/material'
  
import { useAuth } from '../context/Auth.Context'

function Logout({ onLogout }) { 

    const { state, dispatch } = useAuth()
    function onSubmit(event) {
        event.preventDefault() 
        localStorage.removeItem('token');
        localStorage.removeItem('user');
            dispatch({ type: 'LOGOUT', payload: ['token', 'user'] }) 
        }  
    return (
        <Container maxWidth="sm">
            <Button variant="outlined" onClick={(event) => onSubmit(event)}>Logout</Button>
        </Container>
    )
}

export default Logout