import authenticationDao from './model/authentication.dao.js'
import empleadosDAO from './model/empleados.dao.js'

authenticationDao.register({
        name: "Admin",
        email: "admin@email.com",
        password: "12345678"
    } )
    .then(() => {
        console.log("Usuario creado")
    })

empleadosDAO.insertEmpleado({

            name: "Juan",
            apellido: "Gomez",
            dni: 23456872,
            email: "jperez@email.com",
            calle: "Juan diaz de Solis",
            altura: 123,
            fechanac: "01/02/1982"

        } 
    )
    .then(() => {
        console.log("Empleado creado")
    })


console.log("Inicamos el proyecto")