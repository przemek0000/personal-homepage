
import { StyledApp } from "./styled";
import { useState, useEffect } from "react";
import github from "./images/github.svg";
import AboutMe from "./AboutMe/main";
import Content from "./Content/main";
import skillSet from "./skillset";
import wantToLearn from "./wantToLearn";
import Portfolio from "./Portfolio";
import { ThemeProvider } from "styled-components";

function App() {
  const [dimention, setDimention] = useState({
    width: window.innerWidth,
  })

  useEffect(() => {
    window.addEventListener("resize", () => {
      setDimention({
        width: window.innerWidth,
      })
    })
  }, [])
  console.log(dimention.width)
  const theme = {
    width: dimention.width
  }

  return (
    <ThemeProvider theme={theme}>
      <StyledApp>
        <AboutMe />
        <Content title="My skillset includes 🛠️" content={skillSet} />
        <Content title="What I want to learn next 🚀" content={wantToLearn} />
        <Portfolio img={github} title="Portfolio" header="My recent projects" />
      </StyledApp>
    </ThemeProvider>
  )
}

export default App
