import './CreateTodoButton.css'; 

function CreateTodoButton (){
  return (
    <button onClick={
      (event) => {
        console.log('le diste click parcero...')
        console.log(event) 
        console.log(event.target) 
      }          
      }>+</button>
  );
}


export { CreateTodoButton };
