import React from 'react';
import './App.css';

import { TodoCounter } from './TodoCounter/TodoCounter.js';
import { TodoSearch } from './TodoSearch/TodoSearch.js';
import { TodoList } from './TodoList/TodoList.js';
import { TodoItem } from './TodoItem/TodoItem.js';
import { CreateTodoButton } from './CreateTodoButton/CreateTodoButton.js';
//const defaultTodos = [
//  {text:'Cortar cebolla', completed: true},
//  {text:'Tomar curso de Intro a React.js ', completed: false},
//  {text:'Llorar con la llorona', completed: false},
//  {text:'Mandarme sobar el brazo', completed: false} ,
//  {text:'Cantar lalalaa como el profe JuanDC', completed: false},
//];


//localStorage.setItem('TODOS_VER1',JSON.stringify(defaultTodos));
//localStorage.removeItem('TODOS_VER1');

function App() {

  let localStorageTodos = localStorage.getItem('TODOS_VER1');

  let parsedTodos;

  if(!localStorageTodos){
    localStorage.setItem('TODOS_VER1', JSON.stringify([]));
    parsedTodos = [];
  }else{
    parsedTodos = JSON.parse(localStorageTodos);
  }

  const [todos, setTodos] = React.useState(parsedTodos);
  // Aqui podemos aplicar la recomendacion del compañero.


  const [ searchValue, setSearchValue ] = React.useState('');
  console.log('Los usuarios buscan todos de ' + searchValue);

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(

    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase()
      return todoText.includes(searchText);
    }
  )

  const saveTodos = (newTodos) => {
    
    localStorage.setItem('TODOS_VER1',JSON.stringify(newTodos));

    setTodos(newTodos);
  } 

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
  <React.Fragment>   
    <TodoCounter completed={completedTodos} total={totalTodos}/>
    <TodoSearch 
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    />

    <TodoList>  
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
  </React.Fragment>
  );
}

export default App;
