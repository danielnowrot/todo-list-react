import React from "react";
import Container from "../../common/Container";
import Section from "../../common/Section";
import { Wrapper } from "./styled";

export default () => (
    <Container>
        <h1>O autorze</h1>
        <Section
            title="Daniel Nowrot"
            body={<Wrapper>
                Cześć! Miło, że tu zaglądasz.
                Urodziłem się na południu Polski w mieście Jastrzębie Zdrój.
                Od tamtego czasu mieszkałem już w wielu różnych miejscach kraju.
                Obecnie moim miastem stał się Chorzów.
                No ale czas leci - zobaczymy ile tutaj zostanę...
            </Wrapper>}
        />
    </Container>
);