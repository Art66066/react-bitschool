import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { Button } from "react-bootstrap";

function Task(props) {
  
  return (
    <div className="task">
        <input type="checkbox" style={{marginLeft:"auto", height: "20px", width: "20px"}}></input>
      <p style={{padding: "20px 25px"}}>{props.id + 1 + ". " + props.task.text}</p>
      <Button variant="danger" className="delbutton" onClick={() => props.deleteTask(props.task._id)}><FontAwesomeIcon icon={faTrash} style={{fontSize: "15px"}} /></Button>
    </div>
  );
}

export default Task;
