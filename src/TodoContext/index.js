import React from 'react';
import { useLocalStorage } from './useLocalStorage.js';

const TodoContext = React.createContext();

function TodoProvider ({ children }){
   const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error
  } = useLocalStorage('TODOS_VER1',[]);
  // Aqui podemos aplicar la recomendacion del compañero.


  const [ searchValue, setSearchValue ] = React.useState('');

  const [ openModal, setOpenModal ] = React.useState(false);


  //console.log('Los usuarios buscan todos de ' + searchValue);

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(

    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase()
      return todoText.includes(searchText);
    }
  )

  
  const verifyComplete = (text) => {

    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  }

    const deleteComplete = (text) => {

    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex,1);
    saveTodos(newTodos);
  }

  return (
    <TodoContext.Provider value={{
      loading,
      error,
      completedTodos,
      totalTodos,
      searchValue, 
      setSearchValue,
      searchedTodos,
      verifyComplete,
      deleteComplete,
      openModal,
      setOpenModal,
    }}>
      { children }
    </TodoContext.Provider>
  )
};

  export { TodoContext, TodoProvider };

//localStorage.removeItem('TODOS_VER1');


//const defaultTodos = [
//  {text:'Cortar cebolla', completed: true},
//  {text:'Tomar curso de Intro a React.js ', completed: false},
//  {text:'Llorar con la llorona', completed: false},
//  {text:'Mandarme sobar el brazo', completed: false} ,
//  {text:'Cantar lalalaa como el profe JuanDC', completed: false},
//];


//localStorage.setItem('TODOS_VER1',JSON.stringify(defaultTodos));

