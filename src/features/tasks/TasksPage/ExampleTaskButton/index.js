import { TaskButton, Wrapper } from "./styled";
import { useDispatch } from "react-redux";
import { fetchExampleTasks } from "../../tasksSlice";

const ExampleTaskButton = () => {

    const dispatch = useDispatch();

    return (
        <Wrapper>
            <TaskButton onClick={()=>dispatch(fetchExampleTasks())}>
                Pobierz przykładowe zadania
            </TaskButton>
        </Wrapper>
    );
};

export default ExampleTaskButton;