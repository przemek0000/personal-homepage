import { useSelector } from "react-redux";
import {
    StyledPortfolio, StyledHeader, StyledTitle,
    StyledGridProjects, StyledProject, StyledProjectTitle,
    StyledProjectDescription, StyledProjectLinks, StyledProjectLink
} from "./styled";
import { selectProjects, selectProjectsStatus } from "../features/api/getProjectsSlice";
import displayLoading from "./features/status/loading/main";
import displayError from "./features/status/error/main";

const displayProjects = (getProjects) => {
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
                        <StyledProjectLink href={`${project.homepage}`} target="_blank" rel="noreferrer">
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

export const Portfolio = ({ GitHubIcon, title, header, git }) => {
    const getStatus = useSelector(selectProjectsStatus);
    const getProjects = useSelector(selectProjects);

    return (
        <StyledPortfolio>
            {GitHubIcon}
            <StyledTitle>
                {title}
            </StyledTitle>
            <StyledHeader>
                {header}
            </StyledHeader>
            {getStatus === "success" ?
                displayProjects(getProjects) :
                getStatus === "loading" ?
                    displayLoading() :
                    getStatus === "error" ?
                        displayError(git) : ""
            }
        </StyledPortfolio>
    )
}

export default Portfolio;