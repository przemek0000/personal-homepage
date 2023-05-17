import { useSelector } from "react-redux";
import {
    StyledPortfolio, StyledHeader, StyledTitle
} from "./styled";
import { selectProjects, selectProjectsStatus } from "../features/api/getProjectsSlice";
import displayLoading from "./features/status/loading/main";
import displayError from "./features/status/error/main";
import displayProjects from "./features/status/success/main";

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