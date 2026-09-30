import empresa from '../data/empresa.js'
import propiedades from '../data/propiedades.js'
import '../styles/secciones.css'

const zonas = [...new Set(propiedades.map((p) => p.localidad))]

export default function Nosotros() {
  return (
    <section id="nosotros" className="nosotros">
      <div className="wrap">
        <div className="nosotros__box reveal">
          <div className="sec-h">
            <h2>La empresa</h2>
            <p>{empresa.descripcion}</p>
          </div>
          <p>Un equipo que conoce cada barrio de Pilar y alrededores.</p>
          <div className="chips" aria-label="Zonas">
            {zonas.map((z) => <span key={z}>{z}</span>)}
          </div>
        </div>
      </div>
    </section>
  )
}
