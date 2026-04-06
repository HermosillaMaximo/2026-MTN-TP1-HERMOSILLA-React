import { useState } from 'react'
import type { FormEvent } from 'react'
import './App.css'

type Prioridad = 'Baja' | 'Media' | 'Alta'

type Tarea = {
  id: number
  titulo: string
  prioridad: Prioridad
}

function App() {
  const [tareas, setTareas] = useState<Tarea[]>([])
  const [titulo, setTitulo] = useState('')
  const [prioridad, setPrioridad] = useState<Prioridad>('Media')

  const completarTarea = (id: number) => {
    setTareas((prev) => prev.filter((tarea) => tarea.id !== id))
  }

  const crearTarea = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const tituloLimpio = titulo.trim()

    if (!tituloLimpio) return

    const nuevaTarea: Tarea = {
      id: Date.now(),
      titulo: tituloLimpio,
      prioridad,
    }

    setTareas((prev) => [...prev, nuevaTarea])
    setTitulo('')
    setPrioridad('Media')
  }

  return (
    <main className="layout">
      <section className="panel">
        <h1>Tareas</h1>

        <form className="task-bar" onSubmit={crearTarea}>
          <input
            type="text"
            value={titulo}
            onChange={(event) => setTitulo(event.target.value)}
            placeholder="Escribe una tarea"
            aria-label="Nombre de la tarea"
          />

          <select
            value={prioridad}
            onChange={(event) => setPrioridad(event.target.value as Prioridad)}
            aria-label="Prioridad"
          >
            <option value="Baja">Baja</option>
            <option value="Media">Media</option>
            <option value="Alta">Alta</option>
          </select>

          <button type="submit">OK</button>
        </form>

        <ul className="task-items" aria-live="polite">
          {tareas.map((tarea) => (
            <li key={tarea.id}>
              <span>{tarea.titulo}</span>
              <div className="task-item-actions">
                <strong>{tarea.prioridad}</strong>
                <button type="button" onClick={() => completarTarea(tarea.id)}>
                  Completado ?
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}

export default App
