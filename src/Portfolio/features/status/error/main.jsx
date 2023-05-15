import {
    StyledWrapper, StyledErrorSign, StyledTitle,
    StyledContent, StyledButton
} from "./styled";

const displayError = (git) => {
    return (
        <StyledWrapper>
            <StyledErrorSign />
            <StyledTitle>Ooops! Something went wrong... </StyledTitle>
            <StyledContent>Sorry, failed to load Github projects. You can check them directly on Github.</StyledContent>
            <StyledButton as="a" href={`${git}`} target="_blank" rel="noreferrer">Go to Github</StyledButton>
        </StyledWrapper>
    )
}

export default displayError;