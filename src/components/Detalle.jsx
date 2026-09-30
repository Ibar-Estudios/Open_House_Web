import empresa from '../data/empresa.js'
import Formulario from './Formulario.jsx'
import '../styles/detalle.css'

// Resalta el texto entre *asteriscos*.
const resaltar = (texto) =>
  texto.split('*').map((parte, i) => (i % 2 ? <b key={i}>{parte}</b> : parte))

export default function Detalle({ propiedad: p, onVolver }) {
  const { asesor } = empresa

  return (
    <>
      <div className="crumb">
        <div className="wrap">
          <nav aria-label="Ubicación en el sitio">
            <a href="#propiedades" onClick={(e) => { e.preventDefault(); onVolver() }}>← Propiedades</a>
            {' / '}{p.tipo}{' / '}{p.localidad}
          </nav>
          <h1>{p.tituloFicha ?? p.titulo}</h1>
          <div className="price"><small>{p.precioPrefijo}</small> {p.precio}</div>
        </div>
      </div>

      <div className="wrap fic">
        <div>
          <div className={`gal ph--${p.tono}`}>
            {p.imagen ? <img src={p.imagen} alt={p.titulo} /> : 'Galería de fotos'}
          </div>
          <div className="facts">
            {p.destacados.map((d) => (
              <div className="fact" key={d.label}><span>{d.label}</span><b>{d.valor}</b></div>
            ))}
          </div>

          <div className="desc">
            {p.descripcion && (
              <>
                <h2>Sobre esta propiedad</h2>
                {p.descripcion.map((t) => <p key={t}>{resaltar(t)}</p>)}
              </>
            )}
            {p.servicios && (
              <>
                <h3>Servicios</h3>
                <div className="chips">{p.servicios.map((s) => <span key={s}>{s}</span>)}</div>
              </>
            )}
            {p.ficha && (
              <>
                <h3>Ficha técnica</h3>
                <dl className="tech">
                  {p.ficha.map(([k, v]) => (
                    <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
                  ))}
                </dl>
              </>
            )}
            {p.pago && (
              <>
                <h3>Precios y forma de pago</h3>
                <div className="pay">
                  <p>
                    {p.pago.precios.map(([k, v], i) => (
                      <span key={k}>{i > 0 && ' · '}<b>{k}:</b> {v}</span>
                    ))}
                    <br /><b>Forma de pago:</b> {p.pago.forma}
                  </p>
                </div>
              </>
            )}
            <div className="note">
              <i aria-hidden="true">!</i>
              <p><strong>Nota importante:</strong> {empresa.notaFicha}</p>
            </div>
          </div>
        </div>

        <aside>
          <Formulario
            titulo="Consultá por esta propiedad"
            descripcion="Te contactamos a la brevedad."
            mensajeInicial="Estoy interesado en esta propiedad."
            boton="Enviar consulta"
          >
            <div className="prod">
              <div className="av" aria-hidden="true">{asesor.iniciales}</div>
              <div><b>{asesor.nombre}</b><br /><span className="mut">{asesor.email}</span></div>
            </div>
          </Formulario>
        </aside>
      </div>
    </>
  )
}
