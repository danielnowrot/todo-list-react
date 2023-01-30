import { Button, Content, Item, List } from "./styled";

const TaskList = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <List>
        {tasks.map(task => (
            <Item
                key={task.id}
                hidden={hideDone && task.done}
            >
                <Button  
                    accept                  
                    onClick={() => toggleTaskDone(task.id)}>
                    {task.done ? "✓" : " "}
                </Button>
                <Content
                    done={task.done}>
                    {task.content}
                </Content>
                <Button
                    remove                    
                    onClick={() => removeTask(task.id)}
                >🗑️
                </Button>
            </Item >
        ))}
    </List >
);

export default TaskList;