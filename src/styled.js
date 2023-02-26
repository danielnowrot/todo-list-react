import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavLink = styled(NavLink)`
    margin: 10px;
    padding: 20px;
    color: white;
    text-decoration: none;
    
    &.active {
        color: white;
        font-weight:bold ;
    }
`;

export const List = styled.ul`
    list-style-type: none;
    display: flex ;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    background-color: teal;
    margin: 0;
    padding: 10px;
`;
