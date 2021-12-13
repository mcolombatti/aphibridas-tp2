 
import {useState, useEffect } from 'react'

function Home(props){ 
    const user = JSON.parse(localStorage.getItem('user')) 
 
 
    return (
        <div>
            <h1>¡Hola {user.name}!</h1>

            <p>El portal HR Connect vas a poder encontrar toda la información que necesitás de tu trabajo.</p>
        <p>Vas a poder acceder a tus capacitaciones, beneficios y mucho más.</p>
        </div>
    )
}
export default Home;