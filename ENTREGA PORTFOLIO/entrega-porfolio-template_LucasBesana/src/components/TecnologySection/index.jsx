import { TecnologyCard } from "./TecnologyCard"
import { technologies } from "../../data/technologies"

export const TecnologySection = () => {
    return (
        <section>
            <h2 className="tecnology__container container__tech">Tecnologias</h2>
            <ul className="container__tech">
                {
                    technologies.map((technology) => {
                        return (
                            <li key={technology.name}>
                                <TecnologyCard image={technology.img} title={technology.name} />
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}