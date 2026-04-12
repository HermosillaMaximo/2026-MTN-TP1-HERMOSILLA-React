type BarraBusquedaProps = {
  busqueda: string
  onCambiar: (valor: string) => void
}

function BarraBusqueda({ busqueda, onCambiar }: BarraBusquedaProps) {
  return (
    <input
      type="text"
      value={busqueda}
      onChange={(event) => onCambiar(event.target.value)}
      placeholder="Buscar por titulo o descripcion"
      aria-label="Buscar tarea"
    />
  )
}

export default BarraBusqueda
