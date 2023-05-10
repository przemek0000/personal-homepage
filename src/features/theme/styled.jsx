import styled from "styled-components";

const StyledTheme = styled.div`
  position: relative;
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
  color: #6E7E91;

  @media(max-width: 1260px) {
    font-size: ${({ theme }) => 12 * theme.width / 1260}px;
    }    
`

export const StyledSwitch = styled.div`
  position: relative;
  width: 48px;
  height: 26px;
  border-radius: 32px;
  background: #E5E5E5;
  border: 1px solid rgba(209, 213, 218, 0.3);

  @media(max-width: 1260px) {
    width: ${({ theme }) => 48 * theme.width / 1260}px;
    height: ${({ theme }) => 26 * theme.width / 1260}px;
    border-radius: ${({ theme }) => 26 * theme.width / 1260}px;
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
    background: #6E7E91;
    transform: translate(0, -50%);

    @media(max-width: 1260px) {
    border-radius: ${({ theme }) => 35 * theme.width / 1260}px;
    width: ${({ theme }) => 20 * theme.width / 1260}px;
    height: ${({ theme }) => 20 * theme.width / 1260}px;
    }    
  }
`

export const StyledInput = styled.input`
  opacity: 0;
  position: relative;
  
  &:checked + ${StyledSwitch} {
    
    &:before {
        background: #FFFFFF;
        transform: translate(100%, -50%);
        
     }
  }
`