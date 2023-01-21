import styled from "styled-components";

export const SectionComponents = styled.section`
    background-color:hsl(0, 0%, 100%);
    color: rgb(5, 5, 5);
    margin-bottom: 10px;
    border-radius: 2px;
    box-shadow: 0 0 5px #ddd;
`;

export const SectionHeader = styled.header`
     display: grid;
    grid-template-columns: 1fr auto;
    padding-top: 0;
    padding-bottom: 0;

    @media (max-width:767px) {
        grid-template-columns: 1fr;
        border-bottom: none;
    }
`;

export const SectionTitle = styled.h2`
    margin: 0;
    padding: 20px;
    font-size: 20px;
    border-bottom: 2px solid #ddd;

    @media (max-width:767px) {
        border-bottom: none;
    }
`;