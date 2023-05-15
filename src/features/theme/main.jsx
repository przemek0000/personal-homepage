import { useDispatch, useSelector } from "react-redux";
import StyledTheme, { StyledLabel, StyledSpan, StyledInput, StyledSwitch } from "./styled";
import { selectTheme, toggleTheme } from "./themeSlice";

const Theme = () => {
    const dispatch = useDispatch();
    const theme = useSelector(selectTheme);
    console.log(theme)

    return (
        <StyledTheme>
            <StyledLabel>
                {/* <StyledSpan>Dark mode {theme ? "on" : "off"}</StyledSpan> */}
                <StyledInput type="checkbox" onChange={() => dispatch(toggleTheme())} />
                <StyledSwitch />
            </StyledLabel>
        </StyledTheme>
    )
}

export default Theme;