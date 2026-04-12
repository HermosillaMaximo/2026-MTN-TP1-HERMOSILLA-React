import type { Prioridad } from '../types/tarea'

type FiltrosOrdenProps = {
  filtroPrioridad: Prioridad | 'todas'
  onCambiarFiltroPrioridad: (valor: Prioridad | 'todas') => void
}

function FiltrosOrden({
  filtroPrioridad,
  onCambiarFiltroPrioridad,
}: FiltrosOrdenProps) {
  return (
    <div className="filter-row" role="group" aria-label="Filtros de tarea">
      <select
        value={filtroPrioridad}
        onChange={(event) => onCambiarFiltroPrioridad(event.target.value as Prioridad | 'todas')}
        aria-label="Filtrar por prioridad"
      >
        <option value="todas">Prioridad: Todas</option>
        <option value="Baja">Prioridad: Baja</option>
        <option value="Media">Prioridad: Media</option>
        <option value="Alta">Prioridad: Alta</option>
      </select>
    </div>
  )
}

export default FiltrosOrden
