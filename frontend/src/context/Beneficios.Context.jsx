import { createContext, useContext, useReducer, useState, useEffect } from "react";
import API from '../api/beneficios.api' 
 import  BeneficioReducer  from '../reducer/Beneficios.Reducer'
import {   useNavigate  } from 'react-router-dom';

import {   BeneficioRemove } from "../action/Beneficios.Action";
const BeneficiosContext = createContext(); 


export function BeneficiosProvider(props) {
    const [beneficios, setBeneficios] = useState()
    const [state, dispatch] = useReducer(BeneficioReducer, []);
  
    const remove =  async (beneficio) => {
      console.log(beneficio)
      dispatch(BeneficioRemove(beneficio));
              
      return API.deleteBeneficio(beneficio)
     {/* .catch(() => {  
          dispatch(ProductAdd(product));
          throw new Error('Error al eliminar el producto');
      });*/}
  }

    
    const fetchAll = async () => {
     
 
    
        return API.getBeneficios()
     
        .then(data => {
          setBeneficios(data);
        })

    }  
 
    return (
                <BeneficiosContext.Provider value={{ beneficios, setBeneficios, fetchAll, dispatch,state, remove }}>
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

