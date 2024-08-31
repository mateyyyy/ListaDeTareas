import { MdDelete } from "react-icons/md";
import './App.css'

function App() {

  return (
    <>
      <div id='principalContainer'>
        <h1>LISTA DE TAREAS</h1>
        <form action="">
          <input type="text" />
          <button>ADD</button>
        </form>
        <div id='tareasContainer'></div>
          <div className='tareaDiv'>
            <input type="checkbox" />
            <h2>Cocinar</h2>
            <button><MdDelete /></button>
          </div>

          <div className='tareaDiv'>
            <input type="checkbox" />
            <h2>Estudiar</h2>
            <button><MdDelete /></button>
          </div>

          <div className='tareaDiv'>
            <input type="checkbox" checked/>
            <h2 id="jugar">Jugar</h2>
            <button><MdDelete /></button>
          </div>

      </div>
    </>
  )
}

export default App
