import React, { useEffect, useState } from 'react'

export default function Actividad2() {

    const [datos, setDatos] = useState("");

    useEffect(() => {
        const url = "https://api.icndb.com/jokes/"
        const peticion = fetch(url)
        peticion
        .then(datos => datos.json())
        .then(lectura => {
            lectura.value.map(chiste =>{
                setDatos((e)=>
                [...e,<div key={chiste.id}>
                    <div className='cajaChiste'>{chiste.joke}</div>
                </div>]
                )})
        console.log(lectura.value)
         })
        .catch(console.log)
    }, []);

  return (
    <div>
        <div>{datos}</div>
    </div>        
        
    
  )
}
