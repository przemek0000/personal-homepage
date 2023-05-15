import styled from "styled-components";
import { ReactComponent as ErrorIcon } from "../../../../images/erroricon.svg";
import { StyledButton as Button } from "../../../../AboutMe/styled";

export const StyledWrapper = styled.div`
    width: 426px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media(max-width: 1260px) {
        width: calc(426 / 1260 * 100vw);
    }
`

export const StyledErrorSign = styled(ErrorIcon)`
    margin: 88px 0 24px 0;

    @media(max-width: 1260px) {
        margin: calc(88 / 1260 * 100vw) 0 calc(24 / 1260 * 100vw) 0;
        width: ${"calc(37px / 1260 * 100vw)"};
        height:${"calc(34 / 1260 * 100vw)"};
    }
`

export const StyledTitle = styled.div`
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: 0.05em;
    color: #252525;

    @media(max-width: 1260px) {
        line-height: calc(29 / 1260 * 100vw);
        font-size: calc(24 / 1260 * 100vw);
    }
`

export const StyledContent = styled.div`
    text-align: center;
    margin: 32px 0 32px 0;
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    letter-spacing: 0.05em;
    color: #252525;

    @media(max-width: 1260px) {
        margin: calc(32 / 1260 * 100vw) 0 calc(32 / 1260 * 100vw) 0;
        font-size: calc(20 / 1260 * 100vw);
    }
`

export const StyledButton = styled(Button)`
    
`