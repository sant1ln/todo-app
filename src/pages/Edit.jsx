import React from 'react'
import { Form } from '../Components/Form'
import { useTodos } from '../Hooks/useTodos'

export const Edit = () => {

  const { stateUpdaters } = useTodos()

  const { editTodo } = stateUpdaters

  return (
    <>
      <Form
        submitEvent={() => console.log('Pendiente crear funcionalidad')}
      />
    </>
  )
}
