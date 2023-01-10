import React from 'react';
import './styles/TodoCounter.css';

export function Counter({ totalTodos, completedTodos, loading }) {
  return (
    <h2
      className={`TodoCounter ${!!loading && "TodoCounter--loading"}`}
    >
      Has completado {completedTodos} de {totalTodos} TODOs
    </h2>
  );
}


