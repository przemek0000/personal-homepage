import StyledTheme, { StyledLabel, StyledSpan } from "./styled";

const Theme = () => {
    return (
        <StyledTheme>
            <StyledLabel>
                <StyledSpan></StyledSpan>
                <input type="checkbox" />
            </StyledLabel>
        </StyledTheme>
    )
}

export default Theme;