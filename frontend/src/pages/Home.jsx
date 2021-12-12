
import { useAuth } from '../context/Auth.Context'

import {useState, useEffect } from 'react'

function Home(props){
    console.log( props.userName )

}
function HomeD(props) {
    return (
        <div>
            <h1>HR Connect</h1>
            <p>En el portal de HR Connect vas a poder ver todos los empleados de tu empresa</p>
        </div>
    )
}
export default HomeD;