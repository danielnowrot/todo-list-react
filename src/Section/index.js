import {SectionComponents, SectionHeader, SectionTitle} from "./styled"

const Section = ({ title, body, extraContent}) => (
    <SectionComponents>
        <SectionHeader>
            <SectionTitle>
                {title}
            </SectionTitle>
            {extraContent}
        </SectionHeader>
        {body}
    </SectionComponents>
);

export default Section;