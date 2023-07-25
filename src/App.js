import React from 'react';
import './App.css';

import { TodoCounter } from './TodoCounter/TodoCounter.js';
import { TodoSearch } from './TodoSearch/TodoSearch.js';
import { TodoList } from './TodoList/TodoList.js';
import { TodoItem } from './TodoItem/TodoItem.js';
import { CreateTodoButton } from './CreateTodoButton/CreateTodoButton.js';

const defaultTodos = [
  {text:'Cortar cebolla', completed: true},
  {text:'Tomar curso de Intro a React.js ', completed: false},
  {text:'Llorar con la llorona', completed: false},
  {text:'Mandarme sobar el brazo', completed: false} ,
  {text:'Cantar lalalaa como el profe JuanDC', completed: false},
];

function App() {
  return (
  <React.Fragment>   
    <TodoCounter completed={16} total={25}/>
    <TodoSearch />

    <TodoList>  
      {defaultTodos.map(todo => (
        <TodoItem 
        key={todo.text} 
        text={todo.text}
        completed={todo.completed}
      />
      ))}
    </TodoList>

    <CreateTodoButton />
  </React.Fragment>
  );
}

export default App;
