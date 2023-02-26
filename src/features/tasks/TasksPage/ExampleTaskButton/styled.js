import styled from "styled-components";

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;

    @media (max-width:767px) {
        grid-template-columns: 1fr;
    };
`;

export const TaskButton = styled.button`
    border: none;
    border-bottom: 2px solid #ddd;
    padding: 20px;
    color: hsl(180, 100%, 25%);
    transition:1s;
    cursor: pointer;
    background: transparent;

    &:hover{
        color: hsl(180, 100%, 30%);
    };
    &:active{
        color:hsl(180, 100%, 35%);
    };
    &:disabled{
        color: #ddd;
        cursor: auto;
    };

    @media(max-width:767px) {
        border-bottom: none;
    }

`;