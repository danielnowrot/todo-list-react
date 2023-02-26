import { Button, FormComponent } from "./styled";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../tasksSlice";
import { nanoid } from "@reduxjs/toolkit";
import Input from "../../Input";

const Form = () => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const dispatch = useDispatch();

    const focusInput = () => {
        inputRef.current.focus();
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        const newTaskContentTrimmed = newTaskContent.trim();

        if (newTaskContentTrimmed === "") {
            return;
        };

        dispatch(addTask({
            content: newTaskContentTrimmed,
            done: false,
            id: nanoid(),
        }));

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