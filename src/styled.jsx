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
`

export default GlobalStyled;

export const Container = styled.div`
    background-color: ${({ theme }) => theme.container.background};
    transition: ${({theme}) => theme.transition}s;
`

export const StyledApp = styled.div`
    max-width: 1216px;
    padding: 119px 0 109px 0;
    margin: auto;
    background-color: ${({ theme }) => theme.app.background};
    transition: ${({theme}) => theme.transition}s;
    font-family: 'Inter';
    font-style: normal;

    @media(max-width: 1260px) {
        padding: 34px 0 31px 0;
        margin: 0 16px 0 16px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.tablets}px) {
        font-size: 14px;
        line-height: 17px;
        padding: 12px 0 40px 0;
    }
`

export const StyledGitHubIcon = styled(Icon)`
    ${({ link }) => !link && css`
    color: ${({ theme }) => theme.app.githubicon};
    transition: ${({theme}) => theme.transition}s;
    width: 40px;
    height: 40px;

    @media(max-width: 1260px) {
        width: calc(40 / 1260 * 100vw);
        height: calc(40 / 1260 * 100vw);    
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.tablets}px) {
        width: 32px;
        height: 32px ;
    }
    `}

    ${({ link }) => link && css`
    color: ${({ theme }) => theme.app.githubiconfooter};
    
         &:hover {
            color: ${({ theme }) => theme.app.githubicon};
    }

    @media(max-width: 1260px) {
        width: calc(40 / 1260 * 100vw);
        height: calc(40 / 1260 * 100vw);    
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.tablets}px) {
        width: 32px;
        height: 32px ;
    }
    `}
   
`