import { useDispatch, useSelector } from "react-redux";
import {
    StyledPortfolio, GitImage, StyledHeader, StyledTitle,
    StyledGridProjects, StyledProject
} from "./styled";
import { axiosPojectsSuccess, selectProjects } from "../features/api/getProjectsSlice";

export const Portfolio = ({ img, title, header }) => {
    const geApiRedux = useSelector(selectProjects);
     console.log(geApiRedux)
   
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
               {}
            </StyledGridProjects>
        </StyledPortfolio>
    )
}

export default Portfolio;