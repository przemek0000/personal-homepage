import AboutMe from "./AboutMe/main";
import Content from "./Content/main";
import { StyledApp } from "./styled";
import skillSet from "./skillset";
import wantToLearn from "./wantToLearn";

function App() {

  return (
    <StyledApp>
      <AboutMe />
      <Content title="My skillset includes 🛠️" content={skillSet}/>
      <Content title="What I want to learn next 🚀" content={wantToLearn}/>
    </StyledApp>
  )
}

export default App
