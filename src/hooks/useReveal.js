import { useEffect } from 'react'

// Muestra con una animación sutil los elementos .reveal al entrar en pantalla.
export default function useReveal(dependencia) {
  useEffect(() => {
    const elementos = document.querySelectorAll('.reveal:not(.visible)')
    const observer = new IntersectionObserver(
      (entradas) =>
        entradas.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            observer.unobserve(e.target)
          }
        }),
      { threshold: 0.12 }
    )
    elementos.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [dependencia])
}
