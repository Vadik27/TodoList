import React, {useState} from "react";
import styled, {css} from "styled-components";

const MainBlockTodo = (props) => {

    const [val, setVal] = useState("");

    const onChangeInput = (e) => {
        setVal(e.currentTarget.value);
    };

    const onButtonClick = () => {
        props.addTask(val);
        setVal("");
    };

    return (
        <InputButtonBlock>
            <span><b>Task:</b></span>
            <Input placeholder={"Enter your task"}
                   value={val}
                   onChange={onChangeInput}
                   type="text"/>
            <Button primary onClick={onButtonClick}>Add</Button>
        </InputButtonBlock>
    )
};

export default MainBlockTodo;

const InputButtonBlock = styled.div`
    display: flex;    
    align-items: center;
    justify-content: space-around;
    padding: 10px;
`;

const Input = styled.input` 
    flex-basis: 50%;
    outline: 0;
    border: 0;
    border-bottom: 2px solid blue;
`;

const Button = styled.button`
    flex-basis: 100px;
    background: blue;
    border-radius: 5px;
    border: 2px solid #5F9EA0;
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

