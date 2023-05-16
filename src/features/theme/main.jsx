import StyledTheme, { StyledLabel, StyledSpan, StyledInput, StyledSwitch } from "./styled";
import { toggleTheme } from "./themeSlice";

const Theme = ({theme, dispatch}) => {
    return (
        <StyledTheme>
            <StyledLabel>
                <StyledSpan>Dark mode {theme ? "on" : "off"}</StyledSpan>
                <StyledInput type="checkbox" onChange={() => dispatch(toggleTheme())} />
                <StyledSwitch />
            </StyledLabel>
        </StyledTheme>
    )
}

export default Theme;