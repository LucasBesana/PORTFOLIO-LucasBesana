import { ProjectsList } from "./ProjectsList"
import { projects } from "../../data/projects"

export const ProjectsSection = () => {
    return (
        <section>
            <h2 className="project__container">Projetos</h2>
            <ul className="container__projects">
                {
                    projects.map((project) => {
                        return (
                            <li key={project.name}>
                                <ProjectsList title={project.name} description={project.description}/>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}