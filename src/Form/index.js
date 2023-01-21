import {Button, FormComponent, Input} from "./styled";
import { useState } from "react";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        const newTaskContentTrimmed = newTaskContent.trim();

        if (newTaskContentTrimmed === "") {
            return;
        };
        addNewTask(newTaskContentTrimmed);
        setNewTaskContent("");
    };

    return (
        <FormComponent onSubmit={onFormSubmit}>
            <Input
                value={newTaskContent}
                name="taskName"
                type="text"
                placeholder="Co jest do zrobienia?"
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <Button>Dodaj zadanie</Button>
        </FormComponent>
    )
};

export default Form;