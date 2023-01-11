import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './styles/TodoForm.css';

export function Form({ addTodo, setOpenModal },props) {
  const navigate = useNavigate(); 
  
  const location = useLocation();
  const [newTodoValue, setNewTodoValue] = React.useState('');

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const onCancel = () => {
    navigate('/')
    /* setOpenModal(false); */
  };
  const onSubmit = (event) => {
    event.preventDefault();
    props.submitEvent(newTodoValue);
    navigate('/')
    /* setOpenModal(false); */
  };

  const getCurrentLocation = (type) => {
    const currentLocation = location.pathname;
    if(currentLocation === '/new'){
      return 'Escribre tu nuevo TODO'
    }
    return 'Edita tu TODO'
  }

  return (
    <form onSubmit={onSubmit}>
      <label>{(location.pathname === '/new') ? 'Escribe tu TODO' : 'Edita tu TODO'}</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Cortar la cebolla oara el almuerzo"
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
          >
          Cancelar
        </button>
        <button
          type="submit"
          className="TodoForm-button TodoForm-button--add"
        >
          {(location.pathname === '/new') ? 'Añadir' : 'Editar'}
        </button>
      </div>
    </form>
  );
}

