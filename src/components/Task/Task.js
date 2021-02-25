import styles from './task.module.css'

const Task = function (props) {
    return (
        <div className={styles.tasks}>
            <p>{props.key1+1 + ".    " + props.task}</p>                
        </div>
    )
}

export default Task
