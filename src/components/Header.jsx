import React from "react";
import styled from "styled-components";
import TodoMainBlock from "./TodoMainBlock"

const Header = styled.div`
background-color: blue;
width: 80%;
min-height: 100px;
margin: 30px auto;
color: white;
`;

const HeaderContainer = (pros) => {
    return (
        <div>
            <Header>
                MY_TODO_LIST
            </Header>
            <TodoMainBlock />
        </div>
    )
};

export default HeaderContainer;

