import type { Tarea } from '../types/tarea'

type ListaTareasProps = {
  tareas: Tarea[]
  onCompletar: (id: number) => void
}

function ListaTareas({ tareas, onCompletar }: ListaTareasProps) {
  if (tareas.length === 0) {
    return <p>No hay tareas para mostrar.</p>
  }

  return (
    <ul className="task-items" aria-live="polite">
      {tareas.map((tarea) => (
        <li key={tarea.id}>
          <div>
            <span>{tarea.titulo}</span>
            {tarea.descripcion && <p>{tarea.descripcion}</p>}
          </div>

          <div className="task-item-actions">
            <strong>{tarea.prioridad}</strong>
            <button type="button" onClick={() => onCompletar(tarea.id)}>
              Completar
            </button>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default ListaTareas
