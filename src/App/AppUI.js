import React from 'react';

import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { Modal } from '../Modal';

import { TodoContext } from '../TodoContext';

function AppUI(){

  const {
        loading,
        error,
        searchedTodos,
        verifyComplete,
        deleteComplete,
        openModal,
        setOpenModal
  } = React.useContext(TodoContext);

  return (
  <>   
    <TodoCounter />
    <TodoSearch />

      <TodoList> 
        {loading && <TodosLoading/>}

        {error && <TodosError/>}

        {(!loading && searchedTodos.length === 0 ) && <EmptyTodos/>}

       {searchedTodos.map(todo => (
        <TodoItem 
        key={todo.text} 
        text={todo.text}
        completed={todo.completed}
        onComplete={() => verifyComplete(todo.text)}
        onDelete={() => deleteComplete(todo.text)}
        />
       ))}
      </TodoList>
    <CreateTodoButton />

      {openModal && (<Modal> La funcionalida de agregar TODO </Modal>) }

  </>
  );

}

export { AppUI };
