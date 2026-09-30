# OpenHouse — Propuesta de rediseño conceptual

> **Prototipo conceptual / demo comercial.** No es una entrega final ni un sitio en producción:
> muestra cómo podría mejorar el sitio web de la inmobiliaria conservando su identidad visual.

Reconstrucción en React del mockup HTML de OpenHouse (home + ficha de propiedad), con arquitectura
de componentes, datos separados de la interfaz y diseño responsive.

## Tecnologías

- React 19
- Vite
- JavaScript
- CSS propio (sin frameworks)

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

## Build

```bash
npm run build      # genera /dist
npm run preview    # sirve el build localmente
```

## Deploy (Vercel)

El proyecto incluye `vercel.json`. Con el repositorio (privado) conectado en Vercel, el deploy es automático.
Desde la terminal:

```bash
npx vercel          # preview
npx vercel --prod   # producción
```

## Estructura

```
src/
├── components/   Navbar, Hero, Propiedades, Servicios, Nosotros, Contacto, Footer (+ Detalle, Formulario, etc.)
├── data/         propiedades.js, servicios.js, empresa.js
├── hooks/        useReveal.js (animación de aparición)
├── services/     consultas.js (punto de conexión futuro con una API)
└── styles/       global.css + un CSS por sección
```

- Para agregar o editar propiedades, modificar solo `src/data/propiedades.js`.
- Los formularios validan nombre, email y mensaje, pero **no envían datos**: `src/services/consultas.js`
  es el lugar donde conectar una API. No hay variables de entorno requeridas (ver `.env.example`).
- Los textos de "Servicios" y "La empresa" se derivan del contenido original y deben validarse con el cliente.
- Las fotos son placeholders: cargar la ruta en el campo `imagen` de cada propiedad.
