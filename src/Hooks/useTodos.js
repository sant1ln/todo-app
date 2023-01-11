import React from 'react';
import { useLocalStorage } from './useLocalStorage';

function useTodos() {
  const {
    item: todos,
    saveItem: saveTodos,
    sincronizeItem: sincronizeTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V2', []);
  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const addTodo = (text) => {
    const newTodos = [...todos];
    const id = newId(todos)
    newTodos.push({
      completed: false,
      text,
      id: id,
    });
    saveTodos(newTodos);
  };

  const completeTodo = (id) => {
    const todoIndex = getIndex(id,todos);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };
  
  const editTodo = (id, newText) => {
    const todoIndex = getIndex(id,todos);
    const newTodos = [...todos];
    newTodos[todoIndex].text = newText;
    saveTodos(newTodos);
  };

  const deleteTodo = (id) => {
    const todoIndex = getIndex(id,todos);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }; 

  const getTodo = (id) => {
    console.log(todos)
    const todoIndex = todos.findIndex(todo =>  todo.id == id);
    return todos[todoIndex];
  }
  
  const state = {
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    searchedTodos,
    openModal,
    getTodo,
  };
  
  const stateUpdaters = {
    setSearchValue,
    addTodo,
    completeTodo,
    deleteTodo,
    editTodo,
    setOpenModal,
    sincronizeTodos,
  };

  return { state, stateUpdaters };
}

function newId(array){
  console.log(array)
  return (array.length)?(Math.max(...array.map(el=>el.id))+1):1
}

function getIndex(id,todos){
  return todos.findIndex(todo => todo.id == id);
}

export { useTodos };
