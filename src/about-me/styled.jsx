import styled from "styled-components";

const StyledContainer = styled.div`
    max-width: 1089px;
    display: grid;
    grid-template-columns: auto auto;
    padding: 119px 0 73px 353px;
`

export default StyledContainer;

export const StyledImg = styled.img`
    width: 384px;
    height: 384px;
    border-radius: 50%;
    object-fit: cover;
    background-size: cover;
`

export const StyledDiv = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    padding-left: 72px;
    padding-top: 64px;
`

export const StyledTitle = styled.div`
    font-weight: 700;
    font-size: 12px;
    line-height: 130%;
    text-transform: uppercase;
    color: #6E7E91;
`

export const StyledName = styled.div`
    font-weight: 900;
    font-size: 38px;
    line-height: 46px;
    letter-spacing: 0.05em;
    color: #252525;
    padding: 12px 0 35px;
`

export const StyledDescription = styled.div`
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    letter-spacing: 0.05em;
    color: #6E7E91;
    padding: 0 0 32px;
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
`

export const StyledIcon = styled.div`
    margin: 12.5px 0 12.5px 16px;
    padding: 0 4px;
    border: 2px solid #FFFFFF;
    border-radius: 25%;
    font-weight: 200;
`

export const StyledContent = styled.div`
    white-space: nowrap;
    margin: 12px 16px 12px 0;
`

export const StyledTick = styled.img`
    margin: -10px -15px -12px -15px;
    color: white;
`