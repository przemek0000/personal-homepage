import AboutMe from "./AboutMe/main";
import Content from "./Content/main";
import skillSet from "./skillset";
import wantToLearn from "./wantToLearn";
import Portfolio from "./Portfolio/main";
import Footer from "./Footer/main"
import { useDispatch, useSelector } from "react-redux";
import { Container, StyledApp } from "./styled";
import { useEffect } from "react";
import { axiosProjectsLoading } from "./features/api/getProjectsSlice";
import { StyledGitHubIcon } from "./styled";
import { selectTheme } from "./features/theme/themeSlice";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";

function App() {
  const email = "webdev.solid@gmail";
  const git = "https://github.com/przemek0000";
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);

  useEffect(() => {
    dispatch(axiosProjectsLoading())
  }, [dispatch])

  return (
    <ThemeProvider theme={theme ? darkTheme : lightTheme}>
      <Container>
        <StyledApp>
          <AboutMe email={email} theme={theme} dispatch={dispatch} />
          <Content title="My skillset includes 🛠️" content={skillSet} />
          <Content title="What I want to learn next 🚀" content={wantToLearn} />
          <Portfolio GitHubIcon={<StyledGitHubIcon />} title="Portfolio" header="My recent projects" git={git} />
          <Footer GitHubIcon={<StyledGitHubIcon link="active" />} email={email} git={git} />
        </StyledApp>
      </Container>
    </ThemeProvider>
  )
}

export default App
