import {
    StyledPortfolio, GitImage, StyledHeader, StyledTitle,
    StyledGridProjects, StyledProject
} from "./styled";

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
            <StyledGridProjects>
                <StyledProject>
                    blaa bla bla
                </StyledProject>
                <StyledProject>
                    blaa bla bla
                </StyledProject>
                <StyledProject>
                    blaa bla bla
                </StyledProject>
                <StyledProject>
                    blaa bla bla
                </StyledProject>
            </StyledGridProjects>
        </StyledPortfolio>
    )
}

export default Portfolio;