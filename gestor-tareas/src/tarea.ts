// src/types/tarea.ts
export type Prioridad = 'Baja' | 'Media' | 'Alta'
export type Estado = 'pendiente' | 'completada'

export type Tarea = {
  id: number
  titulo: string
  descripcion: string
  prioridad: Prioridad
  estado: Estado
}