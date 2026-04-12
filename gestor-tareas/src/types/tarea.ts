export type Prioridad = 'Baja' | 'Media' | 'Alta'

export type Tarea = {
  id: number
  titulo: string
  descripcion: string
  prioridad: Prioridad
}
