import { useState } from 'react'

export default function TipoSelect({ id, etiqueta, opciones, multiple = false, inicial = [], abierto, onToggle }) {
  const [seleccion, setSeleccion] = useState(inicial)

  const elegir = (opcion) => {
    if (multiple) {
      setSeleccion((s) => (s.includes(opcion) ? s.filter((x) => x !== opcion) : [...s, opcion]))
    } else {
      setSeleccion([opcion])
      onToggle(null)
    }
  }

  return (
    <div className={`tipo ${abierto ? 'open' : ''}`} onClick={(e) => e.stopPropagation()}>
      <button
        type="button"
        className="tsel"
        aria-expanded={abierto}
        aria-haspopup="true"
        aria-controls={id}
        onClick={() => onToggle(abierto ? null : id)}
      >
        <span>{seleccion.length ? seleccion.join(', ') : etiqueta}</span>
        <i></i>
      </button>
      <div className="tpanel" id={id} inert={!abierto}>
        {opciones.map((o) => (
          <button
            key={o}
            type="button"
            className={`chip ${seleccion.includes(o) ? 'on' : ''}`}
            aria-pressed={seleccion.includes(o)}
            onClick={() => elegir(o)}
          >
            {o}
          </button>
        ))}
      </div>
    </div>
  )
}
