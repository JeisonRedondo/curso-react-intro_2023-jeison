import React from 'react';

import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { useLocalStorage } from './useLocalStorage';
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

  const [todos, saveTodos] = useLocalStorage('TODOS_VER1',[]);
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
