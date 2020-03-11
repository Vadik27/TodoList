import React from "react";
import styled from "styled-components";
import MainBlockTodo from "./MainBlockTodo"

const Header = styled.div`
background-color: blue;
width: 80%;
min-height: 100px;
margin: 30px auto;
color: white;
`;

const HeaderContainer = () => {
    return (
        <div>
            <Header>
                MY_TODO_LIST
            </Header>
            <MainBlockTodo />
        </div>
    )
};

export default HeaderContainer;

