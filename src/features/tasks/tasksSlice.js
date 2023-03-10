import { createSlice } from '@reduxjs/toolkit';
import { getTasksFromLocalStorage } from './tasksLocalStorage';

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: getTasksFromLocalStorage(),
        hideDone: false,
        isLoading: false,
    },
    reducers: {
        addTask: ({ tasks }, { payload: task }) => {
            tasks.push(task);
        },
        toggleHideDone: state => {
            state.hideDone = !state.hideDone;
        },
        toggleTaskDone: ({ tasks }, { payload: taskId }) => {
            const index = tasks.findIndex(({ id }) => id === taskId);
            tasks[index].done = !tasks[index].done;
        },
        removeTask: ({ tasks }, { payload: taskId }) => {
            const index = tasks.findIndex(({ id }) => id === taskId);
            tasks.splice(index, 1);
        },
        setAllDone: ({ tasks }) => {
            tasks.forEach(task => { task.done = true; });
        },
        fetchExampleTasks: () => { },

        setTasks: (state, { payload: tasks }) => {
            state.tasks = tasks;
        },

        setLoading: (state, { payload: loading }) => {
            state.isLoading = loading;
        }
    },
});

const selectTaskState = state => state.tasks;

export const {
    addTask,
    toggleHideDone,
    toggleTaskDone,
    removeTask,
    setAllDone,
    fetchExampleTasks,
    setTasks,
    setLoading } = tasksSlice.actions;

export const selectTasks = state => selectTaskState(state).tasks;
export const selectHideDone = state => selectTaskState(state).hideDone;
export const selectEmptyTasksObject = state => selectTasks(state).length === 0;
export const selectEveryTasksDone = state => selectTasks(state).every(({ done }) => done);
export const selectIsLoading = state => selectTaskState(state).isLoading;

export const getTaskById = (state, taskId) =>
    selectTasks(state).find(({ id }) => id === taskId);

export const selectTasksByQuery = (state, query) => {
    const tasks = selectTasks(state);

    if (!query || query.trim() === "") {
        return tasks;
    };

    return tasks.filter(({ content }) => content.toUpperCase().includes(query.toUpperCase().trim()));
};
export default tasksSlice.reducer;