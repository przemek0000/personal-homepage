import AboutMe from "./AboutMe/main";
import Content from "./Content/main";
import { StyledApp } from "./styled";

function App() {

  return (
    <StyledApp>
      <AboutMe />
      <Content title="My skillset includes 🛠️"/>
      <Content title="What I want to learn next 🚀" />
    </StyledApp>
  )
}

export default App
