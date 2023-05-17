import {
    StyledGridProjects, StyledProject, StyledProjectDescription,
    StyledProjectLink, StyledProjectLinks, StyledProjectTitle
} from "./styled";

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

export default displayProjects;