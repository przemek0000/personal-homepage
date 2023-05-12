import { useSelector } from "react-redux";
import {
    StyledPortfolio, GitImage, StyledHeader, StyledTitle,
    StyledGridProjects, StyledProject, StyledProjectTitle,
    StyledProjectDescription, StyledProjectLinks, StyledProjectLink
} from "./styled";
import { selectProjects, selectProjectsStatus } from "../features/api/getProjectsSlice";

const displayProjects = (getProjects) => {
    console.log(getProjects)
    
    return (
        <StyledGridProjects>
            {getProjects.map(project => (
                <StyledProject key={project.id}>
                    <StyledProjectTitle>
                        {project.name}
                    </StyledProjectTitle>
                    <StyledProjectDescription>
                        {project.description}
                    </StyledProjectDescription>
                    <StyledProjectLinks>
                        Demo:
                        <StyledProjectLink href={`/${project.full_homepage}`} target="_blank" rel="noreferrer">
                            https://link.demo.com
                        </StyledProjectLink>
                    </StyledProjectLinks>
                    <StyledProjectLinks>
                        Code:
                        <StyledProjectLink href={`${project.html_url}`} target="_blank" rel="noreferrer">
                            https://link.code.com
                        </StyledProjectLink>
                    </StyledProjectLinks>
                </StyledProject>
            ))}
        </StyledGridProjects>
    )
}

const displayLoading = () => {
    return (
        <div>Loading</div>
    )
}

export const Portfolio = ({ img, title, header }) => {
    const getStatus = useSelector(selectProjectsStatus);
    const getProjects = useSelector(selectProjects);

    return (
        <StyledPortfolio>
            <GitImage src={img} alt="github" />
            <StyledTitle>
                {title}
            </StyledTitle>
            <StyledHeader>
                {header}
            </StyledHeader>
            {getStatus === "success" ? displayProjects(getProjects) : displayLoading()}
        </StyledPortfolio>
    )
}

export default Portfolio;