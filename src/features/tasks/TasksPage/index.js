import Form from "../TasksPage/Form";
import TaskList from "../TasksPage/TaskList";
import Buttons from "../TasksPage/Buttons";
import Section from "../../../common/Section";
import Container from "../../../common/Container";
import Search from "./Search";
import ExampleTaskButton from "./ExampleTaskButton";

function TasksPage() {
  
  return (
    <Container>
      <h1>Lista zadań</h1>
      <Section
        title="Dodaj nowe zadanie"
        extraContent={<ExampleTaskButton />}
        body={<Form />}
      />
      <Section
        title="Wyszukiwarka" 
        body={<Search />}
      />
      <Section
        title="Lista zadań"
        extraContent=
        {<Buttons />}
        body={<TaskList />}
      />
    </Container>
  );
};

export default TasksPage;
