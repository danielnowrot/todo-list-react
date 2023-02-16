import { Button, Wrapper } from "./styled";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { 
    toggleHideDone, 
    setAllDone, 
    selectEmptyTasksObject, 
    selectEveryTasksDone, 
    selectHideDone, 
    fetchExampleTasks } from "../tasksSlice";

const Buttons = () => {
    const tasksObjectEmpty = useSelector(selectEmptyTasksObject);
    const everyTaskDone = useSelector(selectEveryTasksDone);
    const hideDone = useSelector(selectHideDone);

    const dispatch = useDispatch();

    return (
        <Wrapper>
            <Button onClick={()=>dispatch(fetchExampleTasks())}>
                Pobierz przykładowe zadania
            </Button>
            {!tasksObjectEmpty && (
                <>
                    <Button
                        onClick={() => dispatch(toggleHideDone())}            >
                        {hideDone ? "Pokaż " : "Ukryj "}ukończone
                    </Button>
                    <Button
                        onClick={() => dispatch(setAllDone())}
                        disabled={everyTaskDone}
                    >
                        Ukończ wszystkie
                    </Button>
                </>
            )}
        </Wrapper>
    );
};

export default Buttons;