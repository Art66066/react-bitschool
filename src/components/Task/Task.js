import styles from "./task.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Form, Button } from "react-bootstrap";

const Task = function (props) {
  const handleDelete = (e) => {
    props.handleDeleteTask(props.task._id);
  };
  return (
    <div className={styles.tasks}>
      <div className={styles.div}>
        <p>{props.key1 + 1 + ".    " + props.task.title}</p>
        <Form.Check type="checkbox" />
      </div>
      <Button
        size="sm"
        variant="danger"
        className={styles.btn}
        onClick={handleDelete}
      >
        <FontAwesomeIcon icon={faTrash} />
      </Button>
    </div>
  );
};

export default Task;
