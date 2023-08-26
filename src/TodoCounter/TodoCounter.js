import './TodoCounter.css';

function TodoCounter ({total, completed}){

  return (
    <h1>
      {
        total === completed ?
          'Has completado todos los TODOS.':
          (<>
            Has completado <span>{completed}</span> de <span>{total}</span> TODOS
            </>)
                }
      
    </h1>
  );
}


export { TodoCounter }
