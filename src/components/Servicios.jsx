import servicios from '../data/servicios.js'
import '../styles/secciones.css'

export default function Servicios() {
  return (
    <section id="servicios" className="servicios">
      <div className="wrap">
        <div className="sec-h reveal">
          <h2>Servicios</h2>
          <p>Asesoramiento en compra, venta, alquiler e inversiones.</p>
        </div>
        <ul className="svc-grid">
          {servicios.map((s, i) => (
            <li key={s.id} className="svc reveal">
              <span className="svc__n">{String(i + 1).padStart(2, '0')}</span>
              <h3>{s.titulo}</h3>
              <p>{s.texto}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
