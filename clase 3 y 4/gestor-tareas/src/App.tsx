import { useMemo, useState } from 'react'
import BarraBusqueda from './components/BarraBusqueda'
import FiltrosOrden from './components/FiltrosOrden'
import FormularioTarea from './components/FormularioTarea'
import ListaTareas from './components/ListaTareas'
import type { Prioridad, Tarea } from './types/tarea'
import './App.css'

function App() {
  const [tareas, setTareas] = useState<Tarea[]>([])
  const [busqueda, setBusqueda] = useState('')
  const [filtroPrioridad, setFiltroPrioridad] = useState<Prioridad | 'todas'>('todas')
  const [mostrarBuscador, setMostrarBuscador] = useState(false)

  const completarTarea = (id: number) => {
    setTareas((prev) => prev.filter((tarea) => tarea.id !== id))
  }

  const crearTarea = (nuevaTarea: Tarea) => {
    setTareas((prev) => [...prev, nuevaTarea])
  }

  const limpiarBusqueda = () => {
    setBusqueda('')
    setFiltroPrioridad('todas')
  }

  const tareasVisibles = useMemo(() => {
    const texto = busqueda.trim().toLowerCase()

    return tareas
      .filter((tarea) => {
        if (filtroPrioridad === 'todas') return true
        return tarea.prioridad === filtroPrioridad
      })
      .filter((tarea) => {
        if (!texto) return true

        return (
          tarea.titulo.toLowerCase().includes(texto) ||
          tarea.descripcion.toLowerCase().includes(texto)
        )
      })
  }, [tareas, busqueda, filtroPrioridad])

  return (
    <main className="layout">
      <section className="panel">
        <h1>Tareas</h1>

        <FormularioTarea onCrear={crearTarea} />

        <section className="search-section">
          <div className="action-row">
            <button type="submit" form="formulario-tarea" className="add-toggle">
              Agregar
            </button>

            <button
              type="button"
              className="search-toggle"
              onClick={() => setMostrarBuscador((prev) => !prev)}
            >
              Buscar tareas
            </button>
          </div>

          {mostrarBuscador && (
            <div className="search-controls">
              <BarraBusqueda busqueda={busqueda} onCambiar={setBusqueda} />
              <FiltrosOrden
                filtroPrioridad={filtroPrioridad}
                onCambiarFiltroPrioridad={setFiltroPrioridad}
              />
              <button type="button" className="show-all" onClick={limpiarBusqueda}>
                Mostrar todas
              </button>

              <ListaTareas tareas={tareasVisibles} onCompletar={completarTarea} />
            </div>
          )}
        </section>
      </section>
    </main>
  )
}

export default App
