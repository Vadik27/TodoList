import React from "react";
import styled, {css} from "styled-components";

const Button = styled.button`
background: blue;
height: 30px;
width: 100px;
border-radius: 5px;
border: 2px solid #5F9EA0;
margin: 0 1em;
padding: 0.25em 1em;
${props => props.primary &&
    css`
      background: blue;
      color: white;
    `};
:hover {
    color: red;
}
:focus {
    outline: none;
}
`;

const MainBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

const Input = styled.input`
    border: 0;
    outline: 0;
    border-bottom: 2px solid blue;
    height: 30px;
    width: 100%;
`;

const MainBlockTodo = () => {
    return (
        <div>
            <MainBlock>
                <div><Input type="text"/></div>
                <div><Button primary>Add</Button></div>
            </MainBlock>
        </div>
    )
};

export default MainBlockTodo;

