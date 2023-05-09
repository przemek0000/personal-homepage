
import { StyledApp } from "./styled";
import github from "./images/github.svg";
import AboutMe from "./AboutMe/main";
import Content from "./Content/main";
import skillSet from "./skillset";
import wantToLearn from "./wantToLearn";
import Portfolio from "./Portfolio";

function App() {

  return (
    <StyledApp>
      <AboutMe />
      <Content title="My skillset includes 🛠️" content={skillSet} />
      <Content title="What I want to learn next 🚀" content={wantToLearn} />
      <Portfolio img={github} title="Portfolio" header="My recent projects"/>
    </StyledApp>
  )
}

export default App
