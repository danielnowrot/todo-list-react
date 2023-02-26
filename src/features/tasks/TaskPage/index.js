import Section from "../../../common/Section";
import Container from "../../../common/Container";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";
import { Wrapper } from "./styled";

function TaskPage() {
    const { id } = useParams();
    const task = useSelector(state => getTaskById(state, id));

    return (
        <Container>
            <h1>Szczegóły zadania</h1>
            <Section
                title={task ? task.content : "Nie znaleziono zadania"}
                body={<Wrapper>
                    <strong>Ukończono:</strong>
                    {task.done ? " Tak" : " Nie"}
                </Wrapper>}
            />
        </Container>
    );
};

export default TaskPage;