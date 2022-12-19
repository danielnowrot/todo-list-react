import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <ul className="tasks__list">
        {tasks.map(task => (
            <li
                key={task.id}
                className={`tasks__listItem ${hideDone && task.done ? "tasks__listItem--hidden" : ""}`}
            >
                <button 
                    className="task__button task__button--accept"
                    onClick={()=>toggleTaskDone(task.id)}
                >
                    {task.done ? "✓" : " "}
                </button>
                <span className={`tasks__listText ${task.done ? "tasks__listText--done" : ""}`}>
                    {task.content}
                </span>
                <button
                    className="task__button task__button--remove"
                    onClick={() => removeTask(task.id)}
                >🗑️
                </button>
            </li >
        ))}
    </ul >
);

export default Tasks;