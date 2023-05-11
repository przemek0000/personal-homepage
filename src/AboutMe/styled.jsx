import styled from "styled-components";

const StyledContainer = styled.div`
    display: flex;
`

export default StyledContainer;

export const StyledImgContainer = styled.div`
    max-width: 400px;
    min-width: 133px;
`

export const StyledImg = styled.img`
    width: 100%;
    border-radius: 50%;
    object-fit: cover;
    background-size: cover;
`

export const StyledDiv = styled.div`
    min-width: 275px;
    display: flex;
    position: relative;
    left: 50px;
    align-items: flex-start;
    flex-direction: column;
    padding-left: 22px;
    padding-top: 64px;

    @media(max-width: 1260px) {
        padding-left: calc(22 / 1260 * 100vw);
        padding-top: calc(64 / 1260 * 100vw);
        left: calc(50 / 1260 * 100vw);
    }
`

export const StyledTitle = styled.div`
    font-weight: 700;
    font-size: 12px;
    line-height: 130%;
    text-transform: uppercase;
    color: #6E7E91;

    @media(max-width: 1260px) {
       font-size: calc(12 / 1260 * 100vw);
    }
`

export const StyledName = styled.div`
    font-weight: 900;
    font-size: 38px;
    line-height: 46px;
    letter-spacing: 0.05em;
    color: #252525;
    padding: 12px 0 35px;

    @media(max-width: 1260px) {
       font-size: calc(38 / 1260 * 100vw);
       padding: calc(12 / 1260 * 100vw) 0 calc(35 / 1260 * 100vw);
    }
`

export const StyledDescription = styled.div`
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    letter-spacing: 0.05em;
    color: #6E7E91;
    padding: 0 0 32px;

    @media(max-width: 1260px) {
       font-size: calc(20 / 1260 * 100vw);
       padding: 0 0 calc(32 / 1260 * 100vw);
    }
`

export const StyledButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 16px;
    background: #0366D6;
    border: 1px solid rgba(209, 213, 218, 0.3);
    border-radius: 4px;
    color: #FFFFFF;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.05em;
    padding: 12px 16px;

    @media(max-width: 1260px) {
       gap: calc(16 / 1260 * 100vw);
       font-size: calc(20 / 1260 * 100vw);
       padding: calc(12 / 1260 * 100vw) calc(16 / 1260 * 100vw);
    }
`

export const StyledContent = styled.div`
    white-space: nowrap;
    
`

export const StyledTick = styled.img`
    color: white;
    width: 23px;
    height: 20px;

    @media(max-width: 1260px) {
        width: calc(23 / 1260 * 100vw);
        height: calc(20 / 1260 * 100vw);
    }
`