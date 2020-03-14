import React, {useReducer} from 'react';
import MyTodoList from "./components/Header";
import './App.css';
import {addTaskAC, deleteTaskAC, initialState, tasksReducer, updateTaskAC} from "./store/tasksReducer";

const App = () => {

    const [state, dispatch] = useReducer(tasksReducer, initialState);

    const addNewTask = (title) => {
        if (title) {
            dispatch(addTaskAC(title));
        }
    };

    const deleteTask = (task) => {
        dispatch(deleteTaskAC(task));
    };

    const updateTask = (task) => {
        dispatch(updateTaskAC(task));
    };

    return (
        <div className="App">
            <MyTodoList state={state}
                        addNewTask={addNewTask}
                        deleteTask={deleteTask}
                        updateTask={updateTask}/>
        </div>
    );
};

export default App;
