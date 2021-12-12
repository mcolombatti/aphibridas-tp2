import { createContext, useContext, useState, useEffect } from "react";
import API from '../api/product.api' 
 
import {   useNavigate  } from 'react-router-dom';

const EmpleadoContext = createContext(); 


export function EmpleadoProvider(props) {
    const [empleado, setEmpleado] = useState()
     
 

      const useIdFetch = Empleadoid => {
        const [state, setState] = useState({});
        
        useEffect(() => {
          const fetchEmpleado = async () => {
            try {
             
              const empleado = await API.getEmpleadoDetails(Empleadoid);
            
              setState({
                ...empleado,
                  });
      
               } catch (error) {
             console.log(error)
            }
          };
      
      
          fetchEmpleado();
        }, [Empleadoid]);
      
       
      
        return { state  };
      };
       
    return (
                <EmpleadoContext.Provider value={{ empleado, setEmpleado,  useIdFetch}}>
            {props.children}
        </EmpleadoContext.Provider>
    );
}

export function useEmpleado() {
    const context = useContext(EmpleadoContext);
    if (context === undefined) {
        throw new Error("useProducts must be used within a ProductsProvider");
    }
    return context;
}

