import React,{createContext,useState} from "react";

export const contex =createContext();

const Funiones=(props)=>
{
    const[lsita,setlista]=useState([]);
    const[libros,setlibros]=useState( [
      {codigo:1,titulo:"Programación", idioma:'ESP', desactivado:false},
      {codigo:2,titulo:"Aprende Python", idioma:'ESP',desactivado:false},
      {codigo:3,titulo:"Precálculo", idioma:'ESP',desactivado:false},
      {codigo:4,titulo:"Ingenieria De Software", idioma:'ESP',desactivado:false}
      ]);
      const agregar=(a)=>
      {
        const temporal= libros;
        const index= temporal.findIndex((element)=>element.codigo===a.codigo);
        temporal[index].desactivado=true;

        const list =[...lsita,a]
        setlibros(temporal);
        setlista(list)
      }
      const eliminar=(a)=>
      {
        const temporal= libros;
        const index= temporal.findIndex((element)=>element.codigo===a.codigo);
        temporal[index].desactivado=false;

        const list =lsita.filter((e=>e.codigo!==a.codigo))
        setlibros(temporal);
        setlista(list)
      }
      return(
        <contex.Provider
            value={{
                libros,
                lsita,
                eliminar,
                agregar
            }}>
                {props.children}

        </contex.Provider>
    );
}
export default Funiones;