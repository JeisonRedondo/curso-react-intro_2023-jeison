import React from 'react';
import { MdDoneOutline } from "react-icons/md";
import "./CompleteIcon.css";

function CompleteIcon(props){

  function toggleFunction (){

    let completedOnClick = props.completed === true ? "" : "completed_todo" ;
    setCompletedTodo(completedOnClick);
  }

 const [completedTodo, setCompletedTodo] = React.useState(
    props.completed === true ? "completed_todo":""
  );

  return (
    <MdDoneOutline 
    className={`todoItem_complete ${completedTodo}`}
    
    onClick={(event) => {    
      toggleFunction()
      props.onComplete()
      }
    }
    />
    )
  }
export { CompleteIcon };
