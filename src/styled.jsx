import styled, { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    ::before, ::after {
        box-sizing: inherit;
    }
`

export default GlobalStyled;

export const StyledApp = styled.div`
    margin: auto;
    display: grid;
    grid-template-columns: auto auto;
    max-width: 100% ;
    background-color: #FBFBFE;
    font-family: 'Inter';
    font-style: normal;
`