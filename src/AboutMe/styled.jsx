import styled from "styled-components";

const StyledContainer = styled.div`
    display: flex;

    @media(max-width: ${({ theme }) => theme.breakpoints.tablets}px) {
     flex-direction: column;
    }
`

export default StyledContainer;

export const StyledImgContainer = styled.div`
    width: 100%;
    max-width: 367px;
    
    @media(max-width: ${({ theme }) => theme.breakpoints.tablets}px) {
        max-width: 200px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.phones}px) {
        width: 128px;
    }
`

export const StyledImg = styled.img`
    width: 100%;
    border-radius: 50%;
    object-fit: cover;
`

export const StyledDiv = styled.div`
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

    @media(max-width: ${({ theme }) => theme.breakpoints.tablets}px) {
        padding-left: 0;
        padding-top: 16px;
        min-width: 275px;
        left: 0;
    }
`

export const StyledTitle = styled.div`
    font-weight: 700;
    font-size: 12px;
    line-height: 130%;
    text-transform: uppercase;
    color: ${({ theme }) => theme.aboutMe.titleDescription};
    transition: ${({ theme }) => theme.transition}s;

    @media(max-width: 1260px) {
       font-size: calc(12 / 1260 * 100vw);
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.tablets}px) {
        font-size: 12px;
    }
`

export const StyledName = styled.div`
    font-weight: 900;
    font-size: 38px;
    line-height: 46px;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.aboutMe.name};
    transition: ${({ theme }) => theme.transition}s;
    padding: 12px 0 35px;

    @media(max-width: 1260px) {
       font-size: calc(38 / 1260 * 100vw);
       padding: calc(12 / 1260 * 100vw) 0 calc(35 / 1260 * 100vw);
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.tablets}px) {
        font-size: 22px;
        padding: 16px 0 8px 0;
        line-height: 27px
    }
`

export const StyledDescription = styled.div`
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.aboutMe.titleDescription};
    transition: ${({ theme }) => theme.transition}s;
    padding: 0 0 32px;

    @media(max-width: 1260px) {
       font-size: calc(20 / 1260 * 100vw);
       padding: 0 0 calc(32 / 1260 * 100vw);
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.tablets}px) {
        font-size: 17px;
        padding: 0 0 24px 0;
    }
`

export const StyledButton = styled.a`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 16px;
    background: #0366D6;
    border: 1px solid ${({ theme }) => theme.aboutMe.buttonborder};
    transition: ${({ theme }) => theme.transition}s;
    border-radius: 4px;
    color: #FFFFFF;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.05em;
    padding: 12px 16px;
    text-decoration: none;

    &:hover{
        cursor: pointer;
        box-shadow: 2px -2px 0px ${({ theme }) => theme.aboutMe.buttonshadow}, 
        -2px 2px 0px ${({ theme }) => theme.aboutMe.buttonshadow}, 
        2px 2px 0px ${({ theme }) => theme.aboutMe.buttonshadow}, 
        -2px -2px 0px ${({ theme }) => theme.aboutMe.buttonshadow};
    }

    &:active{
        box-shadow: inset 0px 2px 0px ${({ theme }) => theme.aboutMe.buttonactive};
    }

    @media(max-width: 1260px) {
       gap: calc(16 / 1260 * 100vw);
       font-size: calc(20 / 1260 * 100vw);
       padding: calc(12 / 1260 * 100vw) calc(16 / 1260 * 100vw);
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.tablets}px) {
        gap: 0 0 48px 0;
        font-size: 18px;
        line-height: 22px;
        padding: 12px 16px 12px 12px;
    }
`

export const StyledContent = styled.div`
    white-space: nowrap;
    
`

export const StyledTick = styled.img`
    color: white;
    width: 24px;
    height: 24px;

    @media(max-width: 1260px) {
        width: calc(24 / 1260 * 100vw);
        height: calc(24 / 1260 * 100vw);
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.tablets}px) {
        width: 20px;
        height: 20px;
    }
`