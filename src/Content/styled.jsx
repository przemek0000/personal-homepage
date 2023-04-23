import styled from "styled-components";

export const StyledDiv = styled.div`
    background: #FFFFFF;
    box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
    border-radius: 4px;
    margin: 36px 0;
    padding: 32px;
`

export const StyledTitle = styled.div`
    font-weight: 900;
    font-size: 30px;
    line-height: 36px;
    letter-spacing: 0.05em;
    color: #252525;
    border-bottom: 2px rgba(209, 213, 218, 0.3) solid;
    padding-bottom: 15px;
`

export const StyledContent = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    list-style-position: inside;
    padding: 16px 0 0 0;
    list-style-type: none;
    color: #6E7E91;
    font-weight: 400;
    font-size: 18px;
    line-height: 140%;
    letter-spacing: 0.05em;
`

export const StyledLi = styled.li`
 &::before {
  content: "";
  display: inline-block; 
  width: 9px; 
  height: 9px; 
  margin-right: 5px; 
  background-color: #0366D6;;
  border-radius: 50%;
  margin-right: 16px;
}
`