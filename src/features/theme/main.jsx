import StyledTheme, { StyledLabel, StyledSpan, StyledInput, StyledSwitch } from "./styled";

const Theme = () => {
    return (
        <StyledTheme>
            <StyledLabel>
                <StyledSpan>Dark mode off</StyledSpan>
                <StyledInput type="checkbox"/>
                <StyledSwitch />
            </StyledLabel>
        </StyledTheme>
    )
}

export default Theme;