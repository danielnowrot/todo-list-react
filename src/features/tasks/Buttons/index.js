import { Button, ButtonsContainer } from "./styled";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectTasks, toggleHideDone, setAllDone } from "../tasksSlice";

const Buttons = () => {
    const { tasks, hideDone } = useSelector(selectTasks);
    const dispatch = useDispatch();
    
    return (
        <ButtonsContainer>
            {tasks.length > 0 && (
                <>
                    <Button
                        onClick={() => dispatch(toggleHideDone())}            >
                        {hideDone ? "Pokaż " : "Ukryj "}ukończone
                    </Button>
                    <Button
                        onClick={() => dispatch(setAllDone())}
                        disabled={tasks.every(({ done }) => done)}
                    >
                        Ukończ wszystkie
                    </Button>
                </>
            )}
        </ButtonsContainer>
    );
};

export default Buttons;