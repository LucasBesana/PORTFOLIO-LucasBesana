export const Header = () => {
    return (
        <header className="header__content container__header">
            <h3 className="header__title">Portfólio</h3>
            <div className="header__div">
                <small className="about__header">Sobre</small>
                <small className="stack__header">Stack</small>
                <small className="projects__header">Projetos</small>
            </div>
            <button className="header__button">Contato</button>
        </header>
    )
}