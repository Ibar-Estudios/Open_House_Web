// Punto de conexión para una API real (por ejemplo, import.meta.env.VITE_CONTACT_API_URL).
// En la demo no se envía nada: solo simula la espera para mostrar el feedback.
export async function enviarConsulta() {
  await new Promise((resolve) => setTimeout(resolve, 700))
  return { ok: true }
}
