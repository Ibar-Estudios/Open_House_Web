import empresa from '../data/empresa.js'
import { WhatsAppIcon } from './Iconos.jsx'

export default function WhatsAppButton() {
  return (
    <a className="wa" href={empresa.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Escribinos por WhatsApp">
      <WhatsAppIcon size={26} />
      <span>WhatsApp</span>
    </a>
  )
}
