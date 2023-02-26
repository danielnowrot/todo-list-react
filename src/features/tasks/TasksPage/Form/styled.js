import styled from "styled-components";

export const FormComponent = styled.form`
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 10px;

    @media (max-width:767px) {
        grid-template-columns: 1fr;
    }
`;

export const Button = styled.button`
    background: hsl(180, 100%, 25%);
    color: antiquewhite;
    padding: 10px;
    border: none;
    transition: 1s; 
    cursor: pointer;
    
    &:hover{
        background: hsl(180, 100%, 30%);
        transform: scale(1.1);
    };
    &:active{
        background: hsl(180, 100%, 35%);
    };

`;