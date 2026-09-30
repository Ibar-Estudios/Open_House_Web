export default function TarjetaPropiedad({ propiedad: p, onSeleccionar }) {
  const abrir = (e) => {
    e.preventDefault()
    onSeleccionar(p.id)
  }

  return (
    <a className="pcard reveal" href={`#propiedad-${p.id}`} onClick={abrir} aria-label={`Ver ${p.titulo}`}>
      <div className={`ph ph--${p.tono}`}>
        {p.imagen ? (
          <img src={p.imagen} alt={p.titulo} loading="lazy" />
        ) : (
          <span className="ftx">Foto de la propiedad</span>
        )}
        <span className="tag">{p.tag}</span>
      </div>
      <div className="pb">
        <h3>{p.titulo}</h3>
        <div className="loc">{p.ubicacion}</div>
        <div className="meta">
          {p.meta.map((m) => <span key={m}>{m}</span>)}
        </div>
        <div className="price"><small>{p.precioPrefijo}</small> {p.precio}</div>
      </div>
    </a>
  )
}
