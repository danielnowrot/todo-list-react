import "./style.css";

const Tasks = (props) => (
    <ul className="tasks__list">
        {props.tasks.map(task => (
            <li
                className={`tasks__listItem ${props.hideDoneTask && task.done ? "tasks__listItem--hidden" : ""}`}
            >
                <button className="task__button task__button--accept">
                    {task.done ? "✓" : " "}
                </button>
                <span className={`tasks__listText ${task.done ? "tasks__listText--done" : ""}`}>
                    {task.content}
                </span>
                <button className="task__button task__button--remove" >🗑️
                </button>
            </li >
        ))}
    </ul >
);

export default Tasks;