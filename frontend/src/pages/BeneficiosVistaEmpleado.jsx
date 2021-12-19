import { useState,Fragment, useContext, useEffect  } from 'react'; 
import { useBeneficios, BeneficiosProvider } from '../context/Beneficios.Context'; 
import { Link} from 'react-router-dom'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const BeneficiosListItem = (props) =>  {
    const { beneficios, fetchAll} = useBeneficios(); 
   
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
      <Link to={`/beneficios/${props.beneficio._id}`}>   <Button size="small">Leer más</Button>  </Link>
      
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
                <BeneficiosList /> 
            </BeneficiosProvider>
        </div>
    )
}
export default BeneficiosPage;