import { StyledPortfolio, GitImage, StyledHeader, StyledTitle } from "./styled";

export const Portfolio = ({ img, title, header }) => {
    return (
        <StyledPortfolio>
            <GitImage src={img} alt="github" />
            <StyledTitle>
                {title}
            </StyledTitle>
            <StyledHeader>
                {header}
            </StyledHeader>
        </StyledPortfolio>
    )
}

export default Portfolio;