import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import { memo } from "react";
import PropTypes from "prop-types";

function Task(props) {
  const editClick = (task) => {
    props.setEdit(task);
  };
  return (
    <div className="task">
      <input
        type="checkbox"
        checked={!!props.isChecked}
        style={{ marginLeft: "auto", height: "20px", width: "20px" }}
        onChange={() => props.handleToggleChecked(props.task._id)}
      ></input>
      <p
        style={{
          padding: "10px 25px",
          justifyContent: "center",
          margin: "auto",
        }}
      >
        {props.id + 1 + ". " + props.task.title}
      </p>
      <p style={{ paddingBottom: "20px" }}>{props.task.description}</p>
      <div className="buttons">
        <Button
          variant="danger"
          className="delbutton"
          onClick={() => props.deleteTask(props.task._id)}
          disabled={props.checkedTasks.size}
        >
          <FontAwesomeIcon icon={faTrash} style={{ fontSize: "15px" }} />
        </Button>
        <Button
          variant="warning"
          className="editbutton"
          disabled={props.checkedTasks.size}
          onClick={() => editClick(props.task)}
        >
          <FontAwesomeIcon icon={faEdit} style={{ fontSize: "15px" }} />
        </Button>
      </div>
    </div>
  );
}

Task.propTypes = {
  task: PropTypes.object,
  id: PropTypes.number,
  deleteTask: PropTypes.func,
  handleToggleChecked: PropTypes.func,
  checkedTasks: PropTypes.object,
  isChecked: PropTypes.bool,
};

export default memo(Task);
