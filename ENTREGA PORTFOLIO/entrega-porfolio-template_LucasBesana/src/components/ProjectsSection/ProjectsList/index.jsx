import github from "../../../assets/github-icon.png"

export const ProjectsList = ({ title, description }) => {
    return (
        <>
            <h3 className="project__title">{title}</h3>
            <img src={github} alt="logo do github"/>
            <small className="project__description">{description}</small>
            <small className="project__link">Saiba mais</small>
        </>
    )
}