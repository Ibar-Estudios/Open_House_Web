import Formulario from './Formulario.jsx'

export default function Contacto() {
  return (
    <section id="contacto" className="forms">
      <div className="wrap">
        <div className="sec-h reveal">
          <h2>Hablemos</h2>
          <p>Contanos qué buscás o qué querés vender. Te respondemos a la brevedad.</p>
        </div>
        <div className="fgrid">
          <div className="reveal">
            <Formulario titulo="Contacto" descripcion="Consultas generales sobre propiedades." boton="Enviar consulta" />
          </div>
          <div className="reveal" id="tasacion">
            <Formulario titulo="Tasación" descripcion="Sabé cuánto vale tu propiedad hoy." placeholderMensaje="Descripción de la propiedad" boton="Pedir tasación" alt />
          </div>
        </div>
      </div>
    </section>
  )
}
