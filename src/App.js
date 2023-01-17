import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [hideDone, setHideDone] = useState(false);
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasksTable")) ?? []);
  
  useEffect(()=>{
    localStorage.setItem("tasksTable",JSON.stringify(tasks));
  });

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const removeTask = (id) => {
    localStorage.setItem("tasksTable",JSON.stringify(tasks));
    setTasks(tasks => tasks.filter(task => task.id !== id));
    
  };

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => task.id === id ? 
      { ...task, done: !task.done } : task
      ));
  };

  const setAllDone = () => {
    setTasks(tasks => tasks.map(task => ({ ...task, done: true })));
  };

  const addNewTask = (newTaskContent) => {
    setTasks(tasks => [
      ...tasks,
      {
        content: newTaskContent,
        done: false,
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
      }]);
      localStorage.setItem("tasksTable",JSON.stringify(tasks));
  };

  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form addNewTask={addNewTask}/>}
      />
      <Section
        title="Lista zadań"
        extraContent=
        {<Buttons
          tasks={tasks}
          hideDone={hideDone}
          toggleHideDone={toggleHideDone}
          setAllDone={setAllDone}
        />}
        body=
        {<Tasks
          tasks={tasks}
          hideDone={hideDone}
          removeTask={removeTask}
          toggleTaskDone={toggleTaskDone}
        />}
      />
    </Container>
  );
};

export default App;
