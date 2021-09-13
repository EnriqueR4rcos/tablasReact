import './App.css';

function App() {
  return (
    <div>
        <h1> Primer App de React </h1>
        <h3> Elija la tabla de multiplicar que desea mostrar</h3>
        <select class="form-select" aria-label="Default select example">
        <option selected>Tablas de multiplicar</option>
        <option value="t1">Tabla del 1</option>
        <option value="t2">Tabla del 2</option>
        <option value="t3">Tabla del 3</option>
        <option value="t4">Tabla del 4</option>
        <option value="t5">Tabla del 5</option>
        <option value="t6">Tabla del 6</option>
        <option value="t7">Tabla del 7</option>
        <option value="t8">Tabla del 8</option>
        <option value="t9">Tabla del 9</option>
        <option value="t10">Tabla del 10</option>
        </select>
    </div>
  );
}

export default App;
