import React from "react";
import styled from "styled-components";
import s from "./Task.module.css"

const Task = (props) => {

    return (
        <TaskWrapper key={props.task.id}>
            <input type="checkbox"
                   onChange={() => {
                       props.updateTask(props.task)
                   }}
                   checked={props.task.isDone}/>
            <div className={props.task.isDone ? s.lineThrough : s.titleTask}>
                {props.task.title}
            </div>
            <button onClick={() => {
                props.deleteTask(props.task)
            }}>delete
            </button>
        </TaskWrapper>
    )
};

const TaskWrapper = styled.div`
    display: flex;  
    justify-content: center;
`;

export default Task;

