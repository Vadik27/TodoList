import React, {useState} from "react";
import styled from "styled-components";
import MainBlockTodo from "./MainBlockTodo"
import Task from "./Task";

const MyTodoList = (props) => {

    const [tasks, setTasks] = useState([]);

    const addTask = (title) => {
        if (title) {
            setTasks([
                {id: Date.now(), title: title, isDone: false},
                ...tasks
            ]);
        }
    };

    const deleteTask = (task) => {
        setTasks(
            tasks.filter(currentTask => currentTask !== task)
        );
    };

    const updateTask = (task) => {
        task.isDone = !task.isDone;
        setTasks([...tasks])
    };

    return (
        <MainContainer>
            <HeaderBlock>
                <div>MY_TODO_LIST</div>
            </HeaderBlock>
            <MainBlock>
                <MainBlockTodo addTask={addTask}/>
            </MainBlock>
            <TasksBlock>
                {
                    tasks.map(task => <Task key={task.id}
                                            task={task}
                                            deleteTask={deleteTask}
                                            updateTask={updateTask}/>)
                }
            </TasksBlock>
        </MainContainer>
    )
};

export default MyTodoList;

const MainContainer = styled.div` 
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: auto;    
    padding: 10px;
    border: 1px solid silver;
`;

const HeaderBlock = styled.div`
    flex-basis: 50px;
    background-color: blue;
    color: white;
`;

const MainBlock = styled.div`
    
`;

const TasksBlock = styled.div`
     
`;

