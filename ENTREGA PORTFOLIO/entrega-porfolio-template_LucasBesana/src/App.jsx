// importações
import { BannerSection } from "./components/BannerSection"
import { AboutMe } from "./components/AboutMeSection"
import { TecnologySection } from "./components/TecnologySection"
import { ProjectsSection } from "./components/ProjectsSection"
import "./styles/index.css"
import { DefaultTemplate } from "./components/DefaultTemplate"


function App() {
  return (
    <>
      <DefaultTemplate>
        <BannerSection/>
        <AboutMe/>
        <TecnologySection/>
        <ProjectsSection/>
      </DefaultTemplate>
    </>
  )
}

export default App
