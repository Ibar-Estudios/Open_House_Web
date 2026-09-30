import { useCallback, useEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Propiedades from './components/Propiedades.jsx'
import Servicios from './components/Servicios.jsx'
import Nosotros from './components/Nosotros.jsx'
import Contacto from './components/Contacto.jsx'
import Footer from './components/Footer.jsx'
import Detalle from './components/Detalle.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'
import propiedades from './data/propiedades.js'
import useReveal from './hooks/useReveal.js'

export default function App() {
  const [seleccionId, setSeleccionId] = useState(null)
  const destinoPendiente = useRef(null)
  const seleccion = propiedades.find((p) => p.id === seleccionId)

  useReveal(seleccionId)

  // Al volver al inicio desde una ficha, se hace scroll al anchor pedido.
  useEffect(() => {
    if (seleccionId !== null) return
    const destino = destinoPendiente.current
    destinoPendiente.current = null
    if (destino) document.querySelector(destino)?.scrollIntoView()
  }, [seleccionId])

  const abrirFicha = useCallback((id) => {
    setSeleccionId(id)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const irA = useCallback((hash) => {
    destinoPendiente.current = hash
    setSeleccionId(null)
    if (seleccionId === null) document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
  }, [seleccionId])

  return (
    <>
      <Navbar onNavigate={irA} />
      <main>
        {seleccion ? (
          <Detalle propiedad={seleccion} onVolver={() => irA('#propiedades')} />
        ) : (
          <>
            <Hero onBuscar={() => irA('#propiedades')} />
            <Propiedades onSeleccionar={abrirFicha} />
            <Servicios />
            <Nosotros />
            <Contacto />
          </>
        )}
      </main>
      <WhatsAppButton />
      <Footer onNavigate={irA} />
    </>
  )
}
