import {useParams} from 'react-router-dom'

function Empleado(props) {
    const {id} = useParams();

  return (
      <div>
          <h1>Producto #{id}</h1>
          
      </div>
  )
}

export default Empleado;