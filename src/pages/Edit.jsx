import React from 'react'
import { useParams } from 'react-router-dom';
import { Form } from '../Components/Form'
import { useTodos } from '../Hooks/useTodos'

export const Edit = () => {

  const params = useParams();

  const id = Number(params.id)

  const { stateUpdaters, state } = useTodos()
  const { editTodo } = stateUpdaters;
  const { loading, getTodo } = state;

  if (loading) {
    return <p>Cargando...</p>
  } else {
    const formData = getTodo(id);
    console.log(formData)
    return (
      <>
        <Form
          defaultText={formData.text}
          submitEvent={(text) => editTodo(id, text)}
        />
      </>
    )
  }


}
