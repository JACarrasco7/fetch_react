import React, { useEffect, useState } from 'react'

export default function Actividad1() {

    const [chiste, setChiste] = useState("");
    const otroChiste=()=>{
        const url = "https://api.icndb.com/jokes/random"
        const peticion = fetch(url)
        peticion
        .then(datos => datos.json())
        .then(lectura => setChiste(lectura.value.joke))
        .catch(console.log)
    }

    useEffect(() => {
        otroChiste();
    }, []);

  return (
    <div>
        <div>{chiste}</div>
        <button onClick={otroChiste}>Siguiente chiste</button>
    </div>        
        
    
  )
}
