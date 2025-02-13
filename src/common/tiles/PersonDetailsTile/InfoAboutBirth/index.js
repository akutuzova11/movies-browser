import { Wrapper, Content, NameItemDisplay, ContentItem } from "../../MovieDetailsTile/ProductionInfo/styled";
import { useIsMobile } from "../../../../useIsMobile";

export const InfoAboutBirth = ({ info, personDetailsSize }) => {
   const isMobile = useIsMobile();

    return (
        <Wrapper>
            <Content>
                <NameItemDisplay>
                    {isMobile ? 'Birth:' : 'Date of birth:'}
                </NameItemDisplay>
                <ContentItem $personDetailsSize={personDetailsSize} >
                    {info.dateOfBirth || "Unknown"}
                </ContentItem>
            </Content>
            <Content>
                <NameItemDisplay>Place of birth:</NameItemDisplay>
                <ContentItem $personDetailsSize={personDetailsSize}>
                    {info.placeOfBirth || "Unknown"}
                </ContentItem>
            </Content>
        </Wrapper>
    )
};