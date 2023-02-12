import { Button, Content, Item, List } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleTaskDone, removeTask, selectHideDone } from "../tasksSlice";

const TaskList = () => {
    const tasks = useSelector(selectTasks);
    const hideDone = useSelector(selectHideDone);
    
    const dispatch = useDispatch();

    return (
        <List>
            {tasks.map(task => (
                <Item
                    key={task.id}
                    hidden={hideDone && task.done}
                >
                    <Button
                        accept
                        onClick={() => dispatch(toggleTaskDone(task.id))}>
                        {task.done ? "✓" : " "}
                    </Button>
                    <Content
                        done={task.done}>
                        {task.content}
                    </Content>
                    <Button
                        remove
                        onClick={() => dispatch(removeTask(task.id))}
                    >🗑️
                    </Button>
                </Item >
            ))}
        </List >
    );
};

export default TaskList;