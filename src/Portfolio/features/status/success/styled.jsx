import styled from "styled-components"

export const StyledGridProjects = styled.div`
    display: grid;
    gap: 32px;
    grid-template-columns: repeat(2, minmax(300px, 1fr));

    @media(max-width: 1260px) {
        gap: calc(32 / 1260 * 100vw);
    }
`

export const StyledProject = styled.div`
    max-width: 480px;
    padding: 56px;
    background: ${({theme}) => theme.portfolio.project};
    transition: ${({theme}) => theme.transition}s;
    border: 6px solid ${({theme}) => theme.portfolio.border};
    box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
    border-radius: 4px;
    transition: ${({theme}) => theme.transition}s;

    @media(max-width: 1260px) {
        padding: calc(56 / 1260 * 100vw);
        border: calc(6 / 1260 * 100vw) solid ${({theme}) => theme.portfolio.border};
    }

    &:hover{
        border: 6px solid ${({theme}) => theme.portfolio.hover};

        @media(max-width: 1260px) {
        border: calc(6 / 1260 * 100vw) solid ${({theme}) => theme.portfolio.hover};
    }
    }
`

export const StyledProjectTitle = styled.div`
    margin-bottom: 24px;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: 0.05em;
    color: ${({theme}) => theme.portfolio.projecttitle};
    transition: ${({theme}) => theme.transition}s;
    text-transform: capitalize;

    @media(max-width: 1260px) {
        margin-bottom: calc(24 / 1260 * 100vw);
        font-size: calc(24 / 1260 * 100vw);
        line-height: calc(29 / 1260 * 100vw);
    }
`

export const StyledProjectDescription = styled.div`
    font-weight: 400;
    font-size: 18px;
    line-height: 140%;
    display: flex;
    align-items: center;
    color: ${({theme}) => theme.portfolio.description};
    transition: ${({theme}) => theme.transition}s;
    padding-bottom: 16px;

    @media(max-width: 1260px) {
        font-size: calc(18 / 1260 * 100vw);
        padding-bottom: calc(16 / 1260 * 100vw);
    }
`

export const StyledProjectLinks = styled.div`
    display: flex;
    gap: 8px;
    padding: 8px 0;
    font-weight: 400;
    font-size: 18px;
    line-height: 140%;
    display: flex;
    align-items: center;
    letter-spacing: 0.05em;
    color: ${({theme}) => theme.portfolio.links};

    @media(max-width: 1260px) {
        gap: calc(8 / 1260 * 100vw);
        padding: calc(8 / 1260 * 100vw) 0;
        font-size: calc(18 / 1260 * 100vw);
    }
`

export const StyledProjectLink = styled.a`
    font-weight: 400;
    font-size: 18px;
    line-height: 140%;
    align-items: center;
    color: ${({theme}) => theme.portfolio.link};
    text-decoration: none;
    border-bottom: 1px solid ${({theme}) => theme.portfolio.linkborder};

    @media(max-width: 1260px) {
        font-size: calc(18 / 1260 * 100vw);
    }
`