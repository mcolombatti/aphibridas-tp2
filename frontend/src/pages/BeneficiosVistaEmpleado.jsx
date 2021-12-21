import { useState,Fragment, useContext, useEffect  } from 'react'; 
import { useBeneficios, BeneficiosProvider } from '../context/Beneficios.Context'; 
import { useEmpleados, EmpleadosProvider } from '../context/Empleados.Context'; 
import { Link} from 'react-router-dom'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton'; 
import { ToastContainer, toast } from 'react-toastify';

export const BeneficiosListItem = (props) =>  {
    const { beneficios} = useBeneficios();  
    const {  agregarFav} = useEmpleados(); 
    const userid = JSON.parse(localStorage.getItem('userid'))
    
    function onSubmit(event) { 

      agregarFav( userid, props.beneficio)   
      };
     return (
         <li>
           <Card sx={{ maxWidth: 345 }}>
     {/* <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
     />*/}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {props.beneficio.titulo}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {props.beneficio.descripcion}
        </Typography>
      </CardContent>
      <CardActions>
      
      <IconButton  onClick={(event) => onSubmit(event)} color="success" size="large" aria-label="add">
      
      <FavoriteBorderIcon />
    
    </IconButton>
    <ToastContainer  
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>  
      </CardActions>
    </Card> 
         </li>
     )
}

function BeneficiosList() {
  const { beneficios,fetchAll} = useBeneficios(); 
  useEffect(() => {
    
    fetchAll() 
    
    
 }
    
   , []);
  return (
      <ul>  {beneficios?.map(beneficio => (
        <BeneficiosListItem key={beneficio._id} beneficio={beneficio} />
     ))}
          
      </ul>
  )
}


function BeneficiosPage(props) {
    return (
        <div>
            <h1>Beneficios</h1>
            <BeneficiosProvider >
            <EmpleadosProvider >
                <BeneficiosList /> 
            </EmpleadosProvider>
            </BeneficiosProvider>
        </div>
    )
}
export default BeneficiosPage;