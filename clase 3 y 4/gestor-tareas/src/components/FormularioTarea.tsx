import { useState } from 'react'
import type { FormEvent } from 'react'
import type { Prioridad, Tarea } from '../types/tarea'

type FormularioTareaProps = {
  onCrear: (tarea: Tarea) => void
}

function FormularioTarea({ onCrear }: FormularioTareaProps) {
  const [titulo, setTitulo] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [prioridad, setPrioridad] = useState<Prioridad>('Media')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const tituloLimpio = titulo.trim()
    const descripcionLimpia = descripcion.trim()

    if (!tituloLimpio) return

    onCrear({
      id: Date.now(),
      titulo: tituloLimpio,
      descripcion: descripcionLimpia,
      prioridad,
    })

    setTitulo('')
    setDescripcion('')
    setPrioridad('Media')
  }

  return (
    <form id="formulario-tarea" className="task-form" onSubmit={handleSubmit}>
      <div className="form-top-row">
        <input
          type="text"
          value={titulo}
          onChange={(event) => setTitulo(event.target.value)}
          placeholder="Titulo"
          aria-label="Titulo de la tarea"
        />

        <div className="priority-buttons" role="group" aria-label="Prioridad">
          <button
            type="button"
            className={`priority-btn baja${prioridad === 'Baja' ? ' active' : ''}`}
            onClick={() => setPrioridad('Baja')}
          >
            Baja
          </button>
          <button
            type="button"
            className={`priority-btn media${prioridad === 'Media' ? ' active' : ''}`}
            onClick={() => setPrioridad('Media')}
          >
            Media
          </button>
          <button
            type="button"
            className={`priority-btn alta${prioridad === 'Alta' ? ' active' : ''}`}
            onClick={() => setPrioridad('Alta')}
          >
            Alta
          </button>
        </div>
      </div>

      <input
        type="text"
        value={descripcion}
        onChange={(event) => setDescripcion(event.target.value)}
        placeholder="Descripcion"
        aria-label="Descripcion de la tarea"
      />
    </form>
  )
}

export default FormularioTarea
