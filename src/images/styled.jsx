import styled from "styled-components";
import { ReactComponent as Logo } from '../images/test.svg'

export const StyledGitHubIcon = styled(Logo)`

    &:hover {
        fill: green;
        color: green;
        stroke: orange;
    }
`