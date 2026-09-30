import empresa from '../data/empresa.js'
import { InstagramIcon, FacebookIcon, WhatsAppIcon } from './Iconos.jsx'
import '../styles/footer.css'

const redes = [
  { nombre: 'Instagram', Icono: InstagramIcon, href: '#' },
  { nombre: 'Facebook', Icono: FacebookIcon, href: '#' },
  { nombre: 'WhatsApp', Icono: WhatsAppIcon, href: empresa.whatsapp },
]
const busquedas = ['Terrenos', 'Departamentos', 'Casas', 'Oficinas y locales']

export default function Footer({ onNavigate }) {
  return (
    <footer>
      <div className="wrap">
        <div className="fcols">
          <div>
            <h2>Open<span>house</span></h2>
            <p>{empresa.descripcion}</p>
            <div className="soc">
              {redes.map(({ nombre, Icono, href }) => (
                <a key={nombre} href={href} aria-label={nombre}><Icono /></a>
              ))}
            </div>
          </div>
          <div>
            <h3>¿Qué buscás?</h3>
            <ul>
              {busquedas.map((b) => (
                <li key={b}>
                  <a href="#propiedades" onClick={(e) => { e.preventDefault(); onNavigate('#propiedades') }}>{b}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Contacto</h3>
            <ul>
              {empresa.telefonos.map((t) => <li key={t}>{t}</li>)}
              <li><a href={`mailto:${empresa.email}`}>{empresa.email}</a></li>
              <li>{empresa.ubicacion}</li>
            </ul>
          </div>
        </div>
        <p className="legal">
          Las medidas, fotos y precios son orientativos y no contractuales. © 2026 OpenHouse Negocios Inmobiliarios.
          <br />Propuesta de rediseño conceptual · 2026 · Demo sin valor comercial.
        </p>
      </div>
    </footer>
  )
}
