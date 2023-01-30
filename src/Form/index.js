import { Button, FormComponent, Input } from "./styled";
import { useRef, useState } from "react";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const focusInput = () => {
        inputRef.current.focus();
    };

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
                ref={inputRef}
                autoFocus
            />
            <Button onClick={focusInput}>Dodaj zadanie</Button>
        </FormComponent>
    )
};

export default Form;