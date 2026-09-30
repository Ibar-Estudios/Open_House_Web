import { useEffect, useState } from 'react'
import '../styles/navbar.css'

const enlaces = [
  { href: '#propiedades', texto: 'Propiedades' },
  { href: '#servicios', texto: 'Servicios' },
  { href: '#nosotros', texto: 'La empresa' },
  { href: '#tasacion', texto: 'Tasación' },
  { href: '#contacto', texto: 'Contacto' },
]

export default function Navbar({ onNavigate }) {
  const [abierto, setAbierto] = useState(false)
  const [solido, setSolido] = useState(false)

  useEffect(() => {
    const onScroll = () => setSolido(window.scrollY > 40)
    const onKey = (e) => e.key === 'Escape' && setAbierto(false)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('keydown', onKey)
    }
  }, [])

  const navegar = (hash) => (e) => {
    e.preventDefault()
    setAbierto(false)
    onNavigate(hash)
  }

  return (
    <>
    <header className={`header ${solido ? 'solid' : ''}`}>
      <div className="wrap header__bar">
        <a className="logo" href="#inicio" aria-label="Volver al inicio" onClick={navegar('#inicio')}>
          Open<b>house</b>
        </a>
        <button
          type="button"
          className="burger"
          aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={abierto}
          aria-controls="menu-principal"
          onClick={() => setAbierto((v) => !v)}
        >
          <i></i><i></i><i></i>
        </button>
      </div>
    </header>
    <nav id="menu-principal" className={`menu ${abierto ? 'open' : ''}`} aria-label="Principal" inert={!abierto}>
        {enlaces.map((e) => (
          <a key={e.href} href={e.href} onClick={navegar(e.href)}>{e.texto}</a>
        ))}
    </nav>
    </>
  )
}
