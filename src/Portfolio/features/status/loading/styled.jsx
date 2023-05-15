import styled, { keyframes } from "styled-components";

export const StyledTitle = styled.div`
    margin: 64px 0 48px 0;
    font-weight: 400;
    font-size: 20px;
    letter-spacing: 0.05em;
    color: #252525;

    @media(max-width: 1260px) {
        margin: calc(64 / 1260 * 100vw) 0 calc(48 / 1260 * 100vw) 0;
        font-size: calc(20 / 1260 * 100vw);
    }
`

const rotate = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`

export const StyledLoadingAnimation = styled.div`
  width: 160px;
  height: 160px;
  border: 12px solid #D1D5DA4D;
  border-top: 12px solid #0366D6;
  border-radius: 50%;
  animation: ${rotate} 1s linear infinite;
  transition: 0.5s;

  @media(max-width: 1260px) {
        width: calc(160 / 1260 * 100vw);
        height: calc(160 / 1260 * 100vw);
        border: calc(12 / 1260 * 100vw) solid #D1D5DA4D;
        border-top: calc(12 / 1260 * 100vw) solid #0366D6;
    }
`;