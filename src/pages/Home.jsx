import React from 'react';
import { Counter } from '../Components/Counter';
import { CreateTodoButton } from '../Components/CreateTodoButton';
import { Form } from '../Components/Form';
import { Header } from '../Components/Header';
import { Item } from '../Components/Item';
import { List } from '../Components/List';
import { Search } from '../Components/Search';
import { ChangeAlert } from '../Components/ChangeAlert'; 
import { Loading } from '../Components/Loading';
import { EmptyTodos } from '../Components/EmptyTodos';
import { Error } from '../Components/Error';
import { Modal } from '../Components/Modal';
import { useTodos } from '../Hooks/useTodos';

export const Home = () => {
  const { state, stateUpdaters } = useTodos();

  const {
    error,
    loading,
    searchedTodos,
    totalTodos,
    completedTodos,
    openModal,
    searchValue,
  } = state;

  const {
    setOpenModal,
    addTodo,
    completeTodo,
    deleteTodo,
    setSearchValue,
    sincronizeTodos,
  } = stateUpdaters;
  
  return (
    <React.Fragment>
      <Header loading={loading}>
        <Counter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />
        <Search
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </Header>

      <List
        error={error}
        loading={loading}
        totalTodos={totalTodos}
        searchedTodos={searchedTodos}
        searchText={searchValue}
        onError={() => <Error />}
        onLoading={() => <Loading />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchResults={
          (searchText) => <p>No hay resultados para {searchText}</p>
        }
      >
        {todo => (
          <Item
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      </List>

      {!!openModal && (
        <Modal>
          <Form
            addTodo={addTodo}
            setOpenModal={setOpenModal}
          />
        </Modal>
      )}

      <CreateTodoButton
        setOpenModal={setOpenModal}
      />

      <ChangeAlert
        sincronize={sincronizeTodos}
      />
    </React.Fragment>
  );
}
