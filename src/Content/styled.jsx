import styled from "styled-components";

export const StyledDiv = styled.div`
    background: ${({ theme }) => theme.content.div};
    transition: ${({theme}) => theme.transition}s;
    box-shadow: 0px -2px 50px ${({ theme }) => theme.content.boxshadow1}, 
        0px 16px 58px ${({ theme }) => theme.content.boxshadow2};
    border-radius: 4px;
    margin: 73px 0 72px 0;
    padding: 32px;

    @media(max-width: 1260px) {
        margin: calc(73 / 1260 * 100vw) 0 calc(72 / 1260 * 100vw);
        padding: calc(32 / 1260 * 100vw);
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.tablets}px) {
        margin: 48px 0 50px 0;
        
    }
`

export const StyledTitle = styled.div`
    font-weight: 900;
    font-size: 36px;
    line-height: 36px;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.content.title};
    transition: ${({theme}) => theme.transition}s;
    border-bottom: 2px rgba(209, 213, 218, 0.3) solid;
    padding-bottom: 15px;

    @media(max-width: 1260px) {
        font-size: calc(36 / 1260 * 100vw);
        padding-bottom: calc(15 / 1260 * 100vw);
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.tablets}px) {
        font-size: 18px;
        line-height: 22px;
        padding-bottom: 12px;
    }
`

export const StyledContent = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    list-style-position: inside;
    padding: 14px 0 0 0;
    list-style-type: none;
    color: ${({ theme }) => theme.content.content};
    transition: ${({theme}) => theme.transition}s;
    font-weight: 400;
    font-size: 18px;
    line-height: 140%;
    letter-spacing: 0.05em;
    margin-bottom: 0;

    @media(max-width: 1260px) {
        font-size: calc(18 / 1260 * 100vw);
        padding: calc(14 / 1260 * 100vw) 0 0 0;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.tablets}px) {
        grid-template-columns: repeat(2, 1fr);
        font-size: 14px;
        line-height: 17px;
        padding: 12px 0 0 0;
        margin: 0;
    }

    @media(max-width:${({theme}) => theme.breakpoints.phones}px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

export const StyledLi = styled.li`
    padding: 4px 0;

     &::before {
     content: "";
     display: inline-block; 
     width: 9px; 
     height: 9px; 
     background-color: ${({theme}) => theme.content.list};
     transition: ${({theme}) => theme.transition}s;
     border-radius: 50%;
     margin-right: 16px;

     @media(max-width: 1260px) {
        width: calc(9 / 1260 * 100vw);
        height: calc(9 / 1260 * 100vw);
        margin-right: calc(16 / 1260 * 100vw);
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.tablets}px) {
        width: 6px;
        height: 6px;
        margin-right: 8px;
    }
}
`