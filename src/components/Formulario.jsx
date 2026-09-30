import { useId, useState } from 'react'
import { enviarConsulta } from '../services/consultas.js'

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validar({ nombre, email, mensaje }) {
  const errores = {}
  if (!nombre.trim()) errores.nombre = 'Ingresá tu nombre.'
  if (!EMAIL.test(email.trim())) errores.email = 'Ingresá un email válido.'
  if (!mensaje.trim()) errores.mensaje = 'Escribí un mensaje.'
  return errores
}

export default function Formulario({ id, titulo, descripcion, placeholderMensaje = 'Mensaje', mensajeInicial = '', boton, alt = false, children }) {
  const uid = useId()
  const [valores, setValores] = useState({ nombre: '', celular: '', email: '', mensaje: mensajeInicial })
  const [errores, setErrores] = useState({})
  const [estado, setEstado] = useState('idle')

  const cambiar = (e) => {
    const { name, value } = e.target
    setValores((v) => ({ ...v, [name]: value }))
    if (errores[name]) setErrores((er) => ({ ...er, [name]: undefined }))
    if (estado === 'ok') setEstado('idle')
  }

  const enviar = async (e) => {
    e.preventDefault()
    const nuevos = validar(valores)
    setErrores(nuevos)
    if (Object.keys(nuevos).length) return
    setEstado('enviando')
    await enviarConsulta(valores)
    setEstado('ok')
    setValores({ nombre: '', celular: '', email: '', mensaje: mensajeInicial })
  }

  const campo = (name, placeholder, extra = {}) => (
    <div className="field">
      <input
        name={name}
        value={valores[name]}
        onChange={cambiar}
        placeholder={placeholder}
        aria-label={placeholder}
        aria-invalid={!!errores[name]}
        aria-describedby={errores[name] ? `${uid}-${name}` : undefined}
        {...extra}
      />
      {errores[name] && <span className="field__error" id={`${uid}-${name}`}>{errores[name]}</span>}
    </div>
  )

  return (
    <form className="form" id={id} onSubmit={enviar} noValidate>
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
      {campo('nombre', 'Nombre', { autoComplete: 'name' })}
      {campo('celular', 'Celular', { type: 'tel', autoComplete: 'tel' })}
      {campo('email', 'Email', { type: 'email', autoComplete: 'email' })}
      <div className="field">
        <textarea
          name="mensaje"
          value={valores.mensaje}
          onChange={cambiar}
          placeholder={placeholderMensaje}
          aria-label={placeholderMensaje}
          aria-invalid={!!errores.mensaje}
          aria-describedby={errores.mensaje ? `${uid}-mensaje` : undefined}
        />
        {errores.mensaje && <span className="field__error" id={`${uid}-mensaje`}>{errores.mensaje}</span>}
      </div>
      <button type="submit" className={`btn ${alt ? 'alt' : ''}`} disabled={estado === 'enviando'}>
        {estado === 'enviando' ? 'Enviando…' : boton}
      </button>
      <p className="form__status" role="status">
        {estado === 'ok' && 'Gracias. Esto es una demo: la consulta no se envió a ningún servidor.'}
      </p>
      {children}
    </form>
  )
}
