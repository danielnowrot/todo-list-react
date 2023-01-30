import { useState } from "react";
import { useEffect } from "react";

export function useTasks() {
    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasksTable")) ?? []);

    useEffect(() => {
        localStorage.setItem("tasksTable", JSON.stringify(tasks));
    }, [tasks]);

    const removeTask = (id) => {
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
    };

    return ({ tasks, removeTask, toggleTaskDone, setAllDone, addNewTask, })
}
