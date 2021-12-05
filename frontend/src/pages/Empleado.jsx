import {useParams} from 'react-router-dom'

function Empleado(props) {
    const {id} = useParams();
  return (
      <div>
          <h1>Detalles del empleado</h1>
          <ul>
              <li> id: #{id}</li>
             
          </ul>
      </div>
  )
}

export default Empleado;