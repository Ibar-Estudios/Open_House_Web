import { useEffect, useState } from 'react'
import TipoSelect from './TipoSelect.jsx'
import '../styles/hero.css'

const operaciones = ['Venta', 'Alquiler', 'Temporario']
const tipos = ['Casa', 'Departamento', 'Terreno', 'PH', 'Oficina', 'Local', 'Depósito']

export default function Hero({ onBuscar }) {
  const [abierto, setAbierto] = useState(null)

  useEffect(() => {
    const cerrar = () => setAbierto(null)
    const onKey = (e) => e.key === 'Escape' && cerrar()
    document.addEventListener('click', cerrar)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('click', cerrar)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  const buscar = (e) => {
    e.preventDefault()
    onBuscar()
  }

  return (
    <section className="hero" id="inicio">
      <div className="hero__bg" aria-hidden="true"></div>
      <div className="wrap hero__content">
        <h1>Encontrá el lugar donde querés vivir en Zona Norte</h1>
        <p>Casas, lotes y departamentos en Pilar y alrededores, con asesoramiento de un equipo que conoce cada barrio.</p>
        <form className="search" onSubmit={buscar} role="search">
          <TipoSelect id="op" etiqueta="Operación" opciones={operaciones} inicial={['Venta']} abierto={abierto === 'op'} onToggle={setAbierto} />
          <TipoSelect id="tp" etiqueta="Tipo de propiedad" opciones={tipos} multiple abierto={abierto === 'tp'} onToggle={setAbierto} />
          <input placeholder="Ubicación, dirección o calle" aria-label="Ubicación" />
          <button type="submit" className="btn">Buscar</button>
        </form>
      </div>
    </section>
  )
}
