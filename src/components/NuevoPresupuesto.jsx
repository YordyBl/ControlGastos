import {useState} from 'react'
import { Mensaje } from './Mensaje';
export const NuevoPresupuesto = ({presupuesto, setPresupuesto, isValidPresupuesto, setIsValidPresupuesto}) => {
  const [mensaje, setMensaje] = useState("");
  const [tipo, setTipo] = useState("")
  const handlePresupuesto=(e)=>{
    e.preventDefault();
    if(!presupuesto || presupuesto < 0 ){
      setMensaje("No es un presupuesto valido")
      setTipo("error")
      return
    }
    setMensaje("")
    setIsValidPresupuesto(true)
  }

  return (
    <div className='contenedor-presupuesto contenedor sombra'>

      <h2>Nuevo presupuesto</h2>

      <form onSubmit={handlePresupuesto} className='formulario'>

        <div className='campo'>
          <label>Definir presupuesto</label>

          <input className='nuevo-presupuesto' 
          type="number" 
          placeholder='Añade tu presupuesto' 
          value={presupuesto}
          onChange={e=>setPresupuesto(Number(e.target.value))}
          />
        </div>
        <input type="submit" value={"añadir"}/>
        {mensaje && <Mensaje tipo={tipo}>{mensaje}</Mensaje>}
      </form>
    </div>
  )
}
