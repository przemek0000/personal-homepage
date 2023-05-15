import { StyledTitle, StyledLoadingAnimation } from "./styled";

const displayLoading = () => {
    return (
        <>
            <StyledTitle>Please wait, projects are being loaded...</StyledTitle>
            <StyledLoadingAnimation />
        </>
    )
}

export default displayLoading;