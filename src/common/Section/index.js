import { Wrapper, SectionHeader, SectionTitle } from "./styled"

const Section = ({ title, body, extraContent }) => (
    <Wrapper>
        <SectionHeader>
            <SectionTitle>
                {title}
            </SectionTitle>
            {extraContent}
        </SectionHeader>
        {body}
    </Wrapper>
);

export default Section;