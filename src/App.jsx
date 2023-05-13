import AboutMe from "./AboutMe/main";
import Content from "./Content/main";
import skillSet from "./skillset";
import wantToLearn from "./wantToLearn";
import Portfolio from "./Portfolio/main";
import Footer from "./Footer/main"
import { useDispatch } from "react-redux";
import { StyledApp } from "./styled";
import { useEffect } from "react";
import { axiosProjectsLoading } from "./features/api/getProjectsSlice";
import { StyledGitHubIcon } from "./styled";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(axiosProjectsLoading())
  }, [dispatch])

  return (
    <StyledApp>
      <AboutMe />
      <Content title="My skillset includes 🛠️" content={skillSet} />
      <Content title="What I want to learn next 🚀" content={wantToLearn} />
      <Portfolio GitHubIcon={ <StyledGitHubIcon />} title="Portfolio" header="My recent projects" />
      <Footer GitHubIcon={ <StyledGitHubIcon link="active"/>} />
    </StyledApp>
  )
}

export default App
