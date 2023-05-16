import styled from "styled-components";
import darkModeIcon from "../../images/darkmode.svg";
import lightModeIcon from "../../images/lightmode.svg";

const StyledTheme = styled.div`
  white-space: nowrap;
`

export default StyledTheme;

export const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`

export const StyledSpan = styled.span`
  font-weight: 700;
  font-size: 12px;
  line-height: 130%;
  text-transform: uppercase;
  color: ${({theme}) => theme.switch.span};
  width: 100px;

  @media(max-width: 1260px) {
        font-size: calc(12 / 1260 * 100vw);
        width: calc(100 / 1260 * 100vw);
    }
`

export const StyledSwitch = styled.div`
  position: relative;
  width: 48px;
  height: 26px;
  border-radius: 32px;
  background: ${({theme}) => theme.switch.background};
  border: 1px solid ${({theme}) => theme.switch.border};

  @media(max-width: 1260px) {
       width: calc(48 / 1260 * 100vw);
       height: calc(26 / 1260 * 100vw);
    }

  &:before {
    transition: 300ms;
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 35px;
    top: 50%;
    left: 4px;
    background: ${({theme}) => theme.switch.beforebackground};
    background-image: url(${darkModeIcon});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 14px 14px;
    transform: translate(0, -50%);

    @media(max-width: 1260px) {
        width: calc(20 / 1260 * 100vw);
        height: calc(20 / 1260 * 100vw);
        left: calc(4 / 1260 * 100vw);
        background-size: calc(14 / 1260 * 100vw) calc(14 / 1260 * 100vw);
    }
  }
`

export const StyledInput = styled.input`
  opacity: 0;
  position: relative;
  width: 12px;

  &:checked + ${StyledSwitch} {
    
    &:before {
        background: ${({theme}) => theme.switch.inputbackground};
        transform: translate(100%, -50%);
        background-image: url(${lightModeIcon});
        background-position: center;
        background-repeat: no-repeat;
        background-size: 14px 14px;
        background-color: #FFFFFF;

        @media(max-width: 1260px) {
        background-size: calc(14 / 1260 * 100vw) calc(14 / 1260 * 100vw);
    }
     }
  }
  @media(max-width: 1260px) {
        width: calc(12 / 1260 * 100vw);
        background-size: calc(14 / 1260 * 100vw) calc(14 / 1260 * 100vw);
    }
`