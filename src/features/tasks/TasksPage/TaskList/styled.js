import { css } from "styled-components";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledLink = styled(NavLink)`
    color: teal;
    text-decoration: none;
`;

export const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 20px;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px;
    padding: 10px;
    align-items: center;
    border-bottom: 2px solid #ddd;

    ${({ hidden }) => hidden && css`
        display:none;
    `} 
`;

export const Content = styled.span`
    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`;

export const Button = styled.button`
    border: none;
    color: white;
    width: 30px;
    height: 30px;
    padding: 0;
    transition: 1s;
    cursor: pointer;

    ${({ accept }) => accept && css`
        background: hsl(120, 100%, 25%);

        &:hover{
            background: hsl(120, 100%, 30%);
        };
        &:active{
            background: hsl(120, 100%, 35%);
        };
    `};

    ${({ remove }) => remove && css`
        background: hsl(0, 98%, 44%);

        &:hover{
            background: hsl(0, 98%, 50%);
        };
        &:active{
            background: hsl(0, 98%, 55%);
        };
    `};


`;