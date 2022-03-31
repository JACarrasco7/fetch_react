import './App.css';
import {useEffect, useState} from "react";
import Actividad1 from './Actividad1';
import Actividad2 from './Actividad2';

function App() {

  // const [datos, setDatos] = useState([]);

  // useEffect(()=>{
  //   const url = 'https://randomuser.me/api/?results=3';
  //   const peticion = fetch(url);
  
  //   peticion
  //   .then(datos => datos.json())
  //   .then(lectura => {
  //       lectura.results.map((persona) =>{
  //         setDatos((e)=>
  //           [...e,<div key={persona.email}>
  //             <div>{persona.name.first} {persona.name.last}</div>
  //             <img src={persona.picture.large} alt="Persona IMG"/>
  //           </div>]
  //         )})
  //   })
  //   .catch(()=>console.log('Se ha producido un error'))
  // },[])

  return (
    <>
    {/* {datos} */}

    {/* <Actividad1/> */}

    <Actividad2/>

    </>

    
  );
}

export default App;
