
import { Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useContext} from 'react';
import { contex } from './contex';
import '../App.css';

const Lista = () => {
    const {lsita, eliminar} = useContext(contex);
      return ( 
          <div className="List">
                  <h4>Lista de deseos</h4>
                    {
                      lsita.length===0   
                      ? 
                      <p>No tienes libros agregados</p>
                      :
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
                            lsita.map((l,i)=>{
                            
                            return(<tr key={i}>
                              <td>{l.codigo}</td>
                              <td>{l.titulo}</td>
                              <td>{l.idioma}</td>
                              <td>{<Button variant="dark"  onClick={()=>eliminar(l)}>Eliminar</Button>}</td>
                              </tr>)
    
    
                            })
                          }
                          
    
                        </tbody>
                        </Table>}
                     
                    
            
          </div>
       );
  }
   
  export default Lista;