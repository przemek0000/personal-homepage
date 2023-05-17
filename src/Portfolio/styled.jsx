import styled from "styled-components";

export const StyledPortfolio = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const GitImage = styled.img`
    width: 40px;
    height: 40px;

    @media(max-width: 1260px) {
        width: calc(40 / 1260 * 100vw);
        height: calc(40 / 1260 * 100vw);
    }
`

export const StyledTitle = styled.div`
    font-weight: 900;
    font-size: 30px;
    line-height: 36px;
    letter-spacing: 0.05em;
    margin: 12px 0 8px 0;
    color: ${({theme}) => theme.portfolio.title};

    @media(max-width: 1260px) {
        font-size: calc(30 / 1260 * 100vw);
        line-height: calc(36 / 1260 * 100vw);
        margin: calc(12 / 1260 * 100vw) 0 calc(8 / 1260 * 100vw) 0;
    }
`

export const StyledHeader = styled.div`
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    letter-spacing: 0.05em;
    margin-bottom: 24px;
    color: ${({theme}) => theme.portfolio.header};

    @media(max-width: 1260px) {
        font-size: calc(20 / 1260 * 100vw);
        margin-bottom: calc(24 / 1260 * 100vw);
    }
`