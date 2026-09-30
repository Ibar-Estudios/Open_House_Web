import propiedades from '../data/propiedades.js'
import TarjetaPropiedad from './TarjetaPropiedad.jsx'
import '../styles/propiedades.css'

export default function Propiedades({ onSeleccionar }) {
  return (
    <section id="propiedades">
      <div className="wrap">
        <div className="sec-h reveal">
          <h2>Propiedades destacadas</h2>
          <p>Una selección de lo que hay disponible hoy.</p>
        </div>
        <div className="grid">
          {propiedades.map((p) => (
            <TarjetaPropiedad key={p.id} propiedad={p} onSeleccionar={onSeleccionar} />
          ))}
        </div>
      </div>
    </section>
  )
}
