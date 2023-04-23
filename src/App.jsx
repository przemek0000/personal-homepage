
import { StyledApp, GitImage } from "./styled";
import github  from "./images/github.svg";
import AboutMe from "./AboutMe/main";
import Content from "./Content/main";
import skillSet from "./skillset";
import wantToLearn from "./wantToLearn";

function App() {

  return (
    <StyledApp>
      <AboutMe />
      <Content title="My skillset includes 🛠️" content={skillSet} />
      <Content title="What I want to learn next 🚀" content={wantToLearn} />
      <GitImage src={github} alt="Image" />
    </StyledApp>
  )
}

export default App
