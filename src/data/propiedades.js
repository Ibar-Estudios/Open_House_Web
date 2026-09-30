// Para sumar, quitar o editar propiedades basta con modificar este array.
// `imagen: null` muestra un placeholder; reemplazar por la ruta de una foto en /public.
// En las descripciones, el texto entre *asteriscos* se resalta en la ficha.
const propiedades = [
  {
    id: 1,
    tag: 'En venta',
    titulo: 'Casa en Balbastro',
    ubicacion: 'Santos al 2500, Don Torcuato',
    localidad: 'Don Torcuato',
    tipo: 'Casa',
    imagen: null,
    tono: 'a',
    meta: ['242 m²', '5 ambientes'],
    precioPrefijo: 'USD',
    precio: '197.000',
    destacados: [
      { label: 'Tipo', valor: 'Casa' },
      { label: 'Superficie', valor: '242 m²' },
      { label: 'Ambientes', valor: '5' },
    ],
  },
  {
    id: 2,
    tag: 'Lote',
    titulo: 'Barrio Parque La Soñada II',
    tituloFicha: 'Terreno en venta en Barrio Parque La Soñada II',
    ubicacion: 'Presidente Derqui',
    localidad: 'Presidente Derqui',
    tipo: 'Terreno',
    imagen: null,
    tono: 'b',
    meta: ['495 m²', 'A estrenar'],
    precioPrefijo: 'Desde',
    precio: '$67.500.000',
    destacados: [
      { label: 'Tipo', valor: 'Terreno' },
      { label: 'Superficie', valor: '495 m²' },
      { label: 'Estado', valor: 'A estrenar' },
      { label: 'Posesión', valor: 'Oct 2026' },
    ],
    descripcion: [
      'Venta de lotes en *Barrio La Soñada II*, con acceso a Derqui y sobre *Ruta 234*. Barrio abierto y excelente ubicación.',
      'Ubicado próximo al *Hospital Austral*, centros comerciales y colegios, a minutos de la estación de tren Derqui (línea San Martín). Consultar disponibilidad.',
    ],
    servicios: ['Asfalto', 'Tendido eléctrico'],
    ficha: [
      ['Operación', 'Venta'],
      ['Tipo de propiedad', 'Terreno'],
      ['Superficie del terreno', '495 m²'],
      ['Lote mínimo del barrio', '387 m²'],
      ['Cantidad de lotes', '251'],
      ['Antigüedad', 'A estrenar'],
      ['Posesión (495 m²)', 'Octubre 2026'],
      ['Apto crédito', 'No especificado'],
    ],
    pago: {
      precios: [
        ['415 m²', '$69.000.000'],
        ['387 m²', '$67.500.000'],
      ],
      forma:
        '30% de entrega y el resto hasta en 84 cuotas en pesos, con ajuste por valor de la bolsa de cemento.',
    },
  },
  {
    id: 3,
    tag: 'Alquiler',
    titulo: 'Departamento en Pilar',
    ubicacion: 'Ejemplo de ubicación',
    localidad: 'Pilar',
    tipo: 'Departamento',
    imagen: null,
    tono: 'c',
    meta: ['68 m²', '3 ambientes'],
    precioPrefijo: 'ARS',
    precio: 'a consultar',
    destacados: [
      { label: 'Tipo', valor: 'Departamento' },
      { label: 'Superficie', valor: '68 m²' },
      { label: 'Ambientes', valor: '3' },
    ],
  },
]

export default propiedades
