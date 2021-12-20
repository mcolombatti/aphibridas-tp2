import { createContext, useContext, useReducer, useState, useEffect } from "react";
import API from '../api/beneficios.api' 
 import  BeneficioReducer  from '../reducer/Beneficios.Reducer'
import {   useNavigate  } from 'react-router-dom'; 
  
const BeneficiosContext = createContext(); 
 
export function BeneficiosProvider(props) {
    const [beneficios, setBeneficios] = useState()
    const [state, dispatch] = useReducer(BeneficioReducer, []);
  
 
    let navigate = useNavigate();
    const remove = async (beneficio) => {
      setBeneficios(beneficios.filter(p => p._id !== beneficio._id))
      return API.deleteBeneficio(beneficio._id)
      .catch(() => {   
          throw new Error('Error al eliminar el beneficio');
      });
  } 
  const create = async (beneficio) => {
         
          
    return API.createBeneficio(beneficio)
    .then(() => {
        
        navigate('/lista-beneficios')
      })
}  
    const fetchAll = async () => {
     
 
    
        return API.getBeneficios()
     
        .then(data => {
          setBeneficios(data);
        })

    }  
 
    return (
                <BeneficiosContext.Provider value={{ beneficios, create,setBeneficios, fetchAll, dispatch,state, remove }}>
            {props.children}
        </BeneficiosContext.Provider>
    );
}

export function useBeneficios() {
    const context = useContext(BeneficiosContext);
    if (context === undefined) {
        throw new Error("useBeneficios must be used within a BeneficiosProvider");
    }
    return context;
}

