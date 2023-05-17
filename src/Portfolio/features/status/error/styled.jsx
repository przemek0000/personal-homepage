import styled from "styled-components";
import { ReactComponent as ErrorIcon } from "../../../../images/erroricon.svg";
import { StyledButton as Button } from "../../../../AboutMe/styled";

export const StyledWrapper = styled.div`
    max-width: 426px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 64px 0 0 0;

    @media(max-width: 1260px) {
        margin: calc(64 / 1260 * 100vw) 0 calc(48 / 1260 * 100vw) 0;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.tablets}px) {
      margin: 64px 0 0 0;
    }
`

export const StyledErrorSign = styled(ErrorIcon)`
    color: ${({theme}) => theme.errorpage.sign};
    margin: 0px 0 24px 0;
    width: 48px;
    height: 48px;

    @media(max-width: 1260px) {
        margin: 0 0 calc(24 / 1260 * 100vw) 0;
        width: ${"calc(48 / 1260 * 100vw)"};
        height:${"calc(48 / 1260 * 100vw)"};
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.tablets}px) {
      margin: 0 0 24px 0;
      width: 40px;
      height: 40px;
    }
`

export const StyledTitle = styled.div`
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: 0.05em;
    color: ${({theme}) => theme.errorpage.color};

    @media(max-width: 1260px) {
        line-height: calc(29 / 1260 * 100vw);
        font-size: calc(24 / 1260 * 100vw);
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.tablets}px) {
        font-size: 16px;
        line-height: 22px;
    }
`

export const StyledContent = styled.div`
    text-align: center;
    margin: 32px 0 32px 0;
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    letter-spacing: 0.05em;
    color: ${({theme}) => theme.errorpage.color};

    @media(max-width: 1260px) {
        margin: calc(32 / 1260 * 100vw) 0 calc(32 / 1260 * 100vw) 0;
        font-size: calc(20 / 1260 * 100vw);
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.tablets}px) {
        margin: 20px 0 20px 0;
        font-size: 14px;
    }
`

export const StyledButton = styled(Button)`
    
`