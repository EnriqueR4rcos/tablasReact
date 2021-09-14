import Tabla1 from './components/Tabla1';
import React ,{useState} from 'react';
function App() {
  const [val,modifica] = useState(null);

 const handleChange=(event) => {
  console.log(`Seleccionaste ${event.target.value}`);
  modifica(parseInt(event.target.value));
}
 
  return (
    <div className="container">
      <div className="row">
      <h1 className="mb-3"> Primer App de React </h1>
        <h3 className="mb-3"> Elija la tabla de multiplicar que desea mostrar</h3>
        <div className="col-12 col-sm-8 mb-3">
        <select className="form-select" defaultValue={'DEFAULT'} onChange={handleChange}>
        <option value="DEFAULT">Tablas de multiplicar</option>
        <option value="1">Tabla del 1</option>
        <option value="2">Tabla del 2</option>
        <option value="3">Tabla del 3</option>
        <option value="4">Tabla del 4</option>
        <option value="5">Tabla del 5</option>
        <option value="6">Tabla del 6</option>
        <option value="7">Tabla del 7</option>
        <option value="8">Tabla del 8</option>
        <option value="9">Tabla del 9</option>
        <option value="10">Tabla del 10</option>
        </select>
        </div>
      </div>
     
      <Tabla1 valor={val}/>
        
    </div>
  );
}

export default App;
