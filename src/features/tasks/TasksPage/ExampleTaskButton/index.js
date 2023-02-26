import { TaskButton, Wrapper } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasks, selectIsLoading } from "../../tasksSlice";

const ExampleTaskButton = () => {

    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);

    return (
        <Wrapper>
            <TaskButton
                onClick={() => dispatch(fetchExampleTasks())}
                disabled={isLoading}
            >
                {isLoading ? `Ładowanie` : `Pobierz przykładowe zadania`}
            </TaskButton>
        </Wrapper>
    );
};

export default ExampleTaskButton;