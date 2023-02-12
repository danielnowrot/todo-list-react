import { Button, ButtonsContainer } from "./styled";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectTasks, toggleHideDone, setAllDone, selectEmptyTasksObject, selectEveryTasksDone, selectHideDone } from "../tasksSlice";

const Buttons = () => {
    const tasksObjectEmpty = useSelector(selectEmptyTasksObject);
    const everyTaskDone = useSelector(selectEveryTasksDone);
    const hideDone = useSelector(selectHideDone);

    const dispatch = useDispatch();
    
    return (
        <ButtonsContainer>
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
        </ButtonsContainer>
    );
};

export default Buttons;