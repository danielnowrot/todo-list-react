import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Container from "../../common/Container";
import GlobalStyle from "../../GlobalStyles/globalStyles"

function Tasks() {

  return (
    <main>
      <GlobalStyle />
      <Container>
        <h1>Lista zadań</h1>
        <Section
          title="Dodaj nowe zadanie"
          body={<Form />}
        />
        <Section
          title="Lista zadań"
          extraContent=
          {<Buttons />}
          body={<TaskList />}
        />
      </Container>
    </main>
  );
};

export default Tasks;
