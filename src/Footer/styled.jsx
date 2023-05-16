import styled from "styled-components";

export const StyledFooter = styled.div`
    max-width: 691px;
    margin: 120px 0 0 0;
    display: flex;
    flex-direction: column;

    @media(max-width: 1260px) {
        margin: calc(120 / 1260 * 100vw) 0 0 0;
    }
`

export const StyledTitle = styled.div`
    font-weight: 700;
    font-size: 12px;
    line-height: 130%;
    text-transform: uppercase;
    color: ${({theme}) => theme.footer.title};
    padding-bottom: 24px;

    @media(max-width: 1260px) {
        font-size: calc(12 / 1260 * 100vw);
       padding-bottom: calc(24 / 1260 * 100vw);
    }
`

export const StyledEmail = styled.a`
    font-weight: 900;
    font-size: 32px;
    line-height: 39px;
    letter-spacing: 0.05em;
    color: ${({theme}) => theme.footer.email};
    text-decoration: none;

    @media(max-width: 1260px) {
        font-size: calc(32 / 1260 * 100vw);
    }

    &:hover {
        color: ${({theme}) => theme.footer.hover};
    }
`

export const StyledDescription = styled.div`
    padding: 24px 0 56px 0;
    font-weight: 400;
    font-size: 18px;
    line-height: 140%;
    letter-spacing: 0.05em;
    color: ${({theme}) => theme.footer.description};

    @media(max-width: 1260px) {
        padding: calc(24 / 1260 * 100vw) 0 calc(56 / 1260 * 100vw) 0;
        font-size: calc(18 / 1260 * 100vw);
    }
`

export const StyledIcon = styled.a`
    width: 48px;
    height: 48px;
    border-radius: 50%;

    @media(max-width: 1260px) {
        width: calc(48 / 1260 * 100vw);
        height: calc(48 / 1260 * 100vw);    
    }
`