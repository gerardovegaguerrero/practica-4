import './App.css';
import  Contex  from './componentes/contex';
import Libros from './componentes/libros';
import Header from './componentes/header';
import Lista from './componentes/lista';

function App() {
 
  return (
    <div className="App">
    <Contex>
      <Header/>
      <div className="Containers">
          <Libros/>
          <Lista/>            
      </div> 
    </Contex>
  </div>
  );
}

export default App;
