import React from 'react'
import { Form } from '../Components/Form'
import { useTodos } from '../Hooks/useTodos'

export const NewTodo = () => {

  const { stateUpdaters } = useTodos();
  const { addTodo } = stateUpdaters;

  return (
    <>
      <Form
        /* addTodo={addTodo} */
        submitEvent={(text) => addTodo(text)}
      />
    </>
  )
}
