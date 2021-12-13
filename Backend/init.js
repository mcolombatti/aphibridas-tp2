import authenticationDao from './model/authentication.dao.js'
import empleadosDAO from './model/empleados.dao.js'

authenticationDao.register(  { 
    "name": "admin",
    "email": "admin@email.com",
    "rol": "admin",
    "password": "asdasdasd"
  }  )
    .then(() => {
        console.log("Usuario creado")
    })
 
empleadosDAO.insertEmpleados([{

    "name": "Juan",
    "email": "jperez@email.com",
    "dni": "12341234",
    "fechanac": "1980-12-07",
    "apellido": "Perez",
    "capacitacion": [{
      "name": "React",
      "horas": "40",
      "fechainicio": "2022-01-01"
    }],
    "finalizado": true
  }, {
  
    "name": "Maximiliano",
    "email": "mcolombatti@email.com",
    "dni": "37206698",
    "fechanac": "1992-11-25",
    "apellido": "Colombatti",
    "capacitacion": [{
      "name": "asd",
      "horas": "12",
      "fechainicio": "2021-12-08"
    }],
    "finalizado": true
  }, {
    "name": "Brian",
    "email": "blara@email.com",
    "dni": "33123302",
    "fechanac": "2022-01-01",
    "apellido": "Lara"
  
  }, {
    "name": "Lucia",
    "email": "lrodriguez@email.com",
    "dni": "23568296",
    "fechanac": "1975-10-25",
    "apellido": "Rodriguez",
    "capacitacion": [{
      "name": "React",
      "horas": "50",
      "fechainicio": "2022-01-20"
    }],
    "finalizado": true
  }, {
    "name": "Lucas",
    "email": "lgonzalez@email.com",
    "dni": "12341234",
    "fechanac": "1998-05-01",
    "apellido": "Gonzalez"
  }, {
    "name": "Florencia",
    "email": "fgutierrez@email.com",
    "dni": "12345687",
    "fechanac": "1982-12-02",
    "apellido": "Gutierrez"
  }]
    )
    .then(() => {
        console.log("Empleado creado")
    })

 
console.log("Inicamos el proyecto")