
import { Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useContext} from 'react';
import { contex } from './contex';
import '../App.css';

function Libros() {

  const {libros, agregar} = useContext(contex);
  return (
      <div className="Cartelera">
          <h4>Libros disponibles</h4>
            {
              <Table>
              <thead>
                <tr>
                  <th>Codigo</th>
                  <th>Titulo</th>
                  <th>Idioma</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>

                {
                  libros.map((p,a)=>{
                  
                  return(<tr key={a}>
                    <td>{p.codigo}</td>
                    <td>{p.titulo}</td>
                    <td>{p.idioma}</td>
                    <td>{<Button variant="dark" disabled={p.desactivado} onClick={()=>agregar(p)}>Agregar</Button>}</td>
                    </tr>)


                  })
                }
                

              </tbody>
              </Table>
             
            }

      </div>
  )

}

export default Libros;