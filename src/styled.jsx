import styled, { createGlobalStyle } from "styled-components";

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
    max-width: 1089px;
    padding: 115px 15px;
    margin: auto;
    background-color: #FBFBFE;
    font-family: 'Inter';
    font-style: normal;
`