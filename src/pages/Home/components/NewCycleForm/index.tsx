import { DurationInMinutesInput, FormContainer, TaskInput } from './styles'
import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { CyclesContext } from '../../../../contexts/CyclesContext'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">Will work on </label>
      <TaskInput
        id="task"
        list="task-suggestions"
        placeholder="Name your project"
        autoComplete="off"
        disabled={!!activeCycle}
        {...register('task')}
      />

      <datalist id="task-suggestions">
        <option value="Tilapia" />
        <option value="Robalo" />
        <option value="Hipoglos" />
        <option value="Benedito" />
      </datalist>

      <label htmlFor="durationInMinutes">for</label>
      <DurationInMinutesInput
        type="number"
        id="durationInMinutes"
        placeholder="00"
        step={5}
        min={5}
        max={60}
        disabled={!!activeCycle}
        {...register('durationInMinutes', { valueAsNumber: true })}
      />

      <span>minutes.</span>
    </FormContainer>
  )
}
