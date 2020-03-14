import React from "react";
import styled from "styled-components";
import MainBlockTodo from "./MainBlockTodo"
import Task from "./Task";

const MyTodoList = (props) => {

    return (
        <MainContainer>
            <HeaderBlock>
                <div>MYTODOLIST</div>
            </HeaderBlock>
            <MainBlock>
                <MainBlockTodo addNewTask={props.addNewTask}/>
            </MainBlock>
            <TasksBlock>
                {
                    props.state.tasks.map(task => <Task key={task.id}
                                                        task={task}
                                                        deleteTask={props.deleteTask}
                                                        updateTask={props.updateTask}/>)
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

