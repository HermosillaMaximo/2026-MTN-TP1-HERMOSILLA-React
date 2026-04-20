import { useForm } from 'react-hook-form'
import type { Prioridad, Tarea } from '../types/tarea'

type FormularioTareaProps = {
  onCrear: (tarea: Tarea) => void
}

type FormValues = {
  titulo: string
  descripcion: string
  prioridad: Prioridad
}

function FormularioTarea({ onCrear }: FormularioTareaProps) {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormValues>()

  const prioridad = watch('prioridad')

  const onSubmit = (data: FormValues) => {
    onCrear({
      id: Date.now(),
      titulo: data.titulo.trim(),
      descripcion: data.descripcion.trim(),
      prioridad: data.prioridad,
    })
    reset()
  }

  return (
    <form id="formulario-tarea" className="task-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-top-row">
        <div className="field-wrapper">
          <input
            type="text"
            {...register('titulo', { required: 'El título es obligatorio' })}
            placeholder="Titulo"
            aria-label="Titulo de la tarea"
          />
          {errors.titulo && <span className="field-error">{errors.titulo.message}</span>}
        </div>

        <div className="field-wrapper">
          <input
            type="hidden"
            {...register('prioridad', { required: 'La prioridad es obligatoria' })}
          />
          <div className="priority-buttons" role="group" aria-label="Prioridad">
            {(['Baja', 'Media', 'Alta'] as Prioridad[]).map((p) => (
              <button
                key={p}
                type="button"
                className={`priority-btn ${p.toLowerCase()}${prioridad === p ? ' active' : ''}`}
                onClick={() => setValue('prioridad', p, { shouldValidate: true })}
              >
                {p}
              </button>
            ))}
          </div>
          {errors.prioridad && <span className="field-error">{errors.prioridad.message}</span>}
        </div>
      </div>

      <div className="field-wrapper">
        <input
          type="text"
          {...register('descripcion', { required: 'La descripción es obligatoria' })}
          placeholder="Descripcion"
          aria-label="Descripcion de la tarea"
        />
        {errors.descripcion && <span className="field-error">{errors.descripcion.message}</span>}
      </div>
    </form>
  )
}

export default FormularioTarea
