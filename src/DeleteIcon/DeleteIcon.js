import { MdDelete } from "react-icons/md";
import React from 'react';
import "./Deleteicon.css";

function DeleteIcon(props){
  return <MdDelete 

    className="todoItem_close "
    onClick={props.onDelete}

    />;
}

export { DeleteIcon };
