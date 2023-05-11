import styled from "styled-components";

export const StyledDiv = styled.div`
    background: #FFFFFF;
    box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
    border-radius: 4px;
    margin: 36px 0;
    padding: 32px;

    @media(max-width: 1260px) {
        margin: calc(36 / 1260 * 100vw) 0;
        padding: calc(32 / 1260 * 100vw);
    }
`

export const StyledTitle = styled.div`
    font-weight: 900;
    font-size: 36px;
    line-height: 36px;
    letter-spacing: 0.05em;
    color: #252525;
    border-bottom: 2px rgba(209, 213, 218, 0.3) solid;
    padding-bottom: 15px;

    @media(max-width: 1260px) {
        font-size: calc(36 / 1260 * 100vw);
        padding-bottom: calc(15 / 1260 * 100vw);
    }
`

export const StyledContent = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    list-style-position: inside;
    padding: 14px 0 0 0;
    list-style-type: none;
    color: #6E7E91;
    font-weight: 400;
    font-size: 18px;
    line-height: 140%;
    letter-spacing: 0.05em;
    margin-bottom: 0;

    @media(max-width: 1260px) {
        font-size: calc(18 / 1260 * 100vw);
        padding: calc(14 / 1260 * 100vw) 0 0 0;
    }
`

export const StyledLi = styled.li`
    padding: 4px 0;

     &::before {
     content: "";
     display: inline-block; 
     width: 9px; 
     height: 9px; 
     background-color: #0366D6;;
     border-radius: 50%;
     margin-right: 16px;

     @media(max-width: 1260px) {
        width: calc(9 / 1260 * 100vw);
        height: calc(9 / 1260 * 100vw);
        margin-right: calc(16 / 1260 * 100vw);
    }
}
`