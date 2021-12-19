import { createContext, useContext, useState, useEffect } from "react";
import API from '../api/beneficios.api' 
 
import {   useNavigate  } from 'react-router-dom';

const BeneficiosContext = createContext(); 


export function BeneficiosProvider(props) {
    const [beneficios, setBeneficios] = useState()
     
  
   
    
    const fetchAll = async () => {
     
 
    
        return API.getBeneficios()
     
        .then(data => {
          setBeneficios(data);
        })

    }  
 
    return (
                <BeneficiosContext.Provider value={{ beneficios, setBeneficios, fetchAll}}>
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

