import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter (){

  const {totalTodos, completedTodos} = React.useContext(TodoContext);

  return (
    <h1>
      {
        totalTodos === completedTodos ?
          'Has completado todos los TODOS.':
          (<>
            Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOS
            </>)
                }
      
    </h1>
  );
}


export { TodoCounter  }
