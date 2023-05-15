import styled, { createGlobalStyle, css } from "styled-components";
import { ReactComponent as Icon } from './images/githubicon.svg'

const GlobalStyled = createGlobalStyle`
    html {
        box-sizing: border-box;
        user-select: none;
    }

    ::before, ::after {
        box-sizing: inherit;
    }

    body {
        background-color: #FBFBFE;
    }
`

export default GlobalStyled;

export const StyledApp = styled.div`
    max-width: 1216px;
    padding: 115px 15px;
    margin: auto;
    background-color: #FBFBFE;
    font-family: 'Inter';
    font-style: normal;
`

export const StyledGitHubIcon = styled(Icon)`
    ${({ link }) => !link && css`
    color: #0366D6;

    @media(max-width: 1260px) {
        width: calc(48 / 1260 * 100vw);
        height: calc(48 / 1260 * 100vw);    
    }
    `}

    ${({ link }) => link && css`
    color: #252525;
    
         &:hover {
        color: #0366D6;
    }

    @media(max-width: 1260px) {
        width: calc(48 / 1260 * 100vw);
        height: calc(48 / 1260 * 100vw);    
    }
    `}
   
`