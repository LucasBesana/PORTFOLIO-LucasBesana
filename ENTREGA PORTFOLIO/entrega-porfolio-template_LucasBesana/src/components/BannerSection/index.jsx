import { username } from "../../data/user"
import banner from "../../assets/banner-img.png"

export const BannerSection = () => {
    return (
        <section className="banner__section container__banner">
            <img src={banner} alt="Imagem do Banner" className="banner_img" />
            <div>
                <p className="username">{username}</p>
                <h1 className="banner__welcome">Bem vindo ao meu porfólio</h1>
                <small className="banner__paragraph">Uma frase interessante sobre mim</small>
                <button className="banner__button">Saiba Mais</button>
            </div>
        </section>
    )
}