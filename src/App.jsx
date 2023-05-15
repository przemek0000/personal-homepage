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
  const email = "test@email.gmail"
  const git = "https://github.com/przemek0000";
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(axiosProjectsLoading())
  }, [dispatch])

  return (
    <StyledApp>
      <AboutMe email={email} />
      <Content title="My skillset includes 🛠️" content={skillSet} />
      <Content title="What I want to learn next 🚀" content={wantToLearn} />
      <Portfolio GitHubIcon={<StyledGitHubIcon />} title="Portfolio" header="My recent projects" git={git} />
      <Footer GitHubIcon={<StyledGitHubIcon link="active" />} email={email} git={git} />
    </StyledApp>
  )
}

export default App
