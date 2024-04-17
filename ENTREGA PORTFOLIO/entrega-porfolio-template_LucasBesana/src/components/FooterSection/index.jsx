import whatsApp from "../../assets/whatsapp-icon.png";
import linkedin from "../../assets/linkedin-icon.png";
import github from "../../assets/github-icon.png";
import { user } from "../../data/user"

export const Footer = () => {
    return (
        <section className="container__footer">
            <div className="contact__infos"> 
                <h2 className="footer__contact">Contato</h2>
                <p className="footer__paragraph">Todos os direitos reservados - {user}</p>
            </div>
            <div className="contact__media">
                <img src={whatsApp} alt="imagem logo whatsapp"/>
                <img src={linkedin} alt="imagem logo linkedin"/>
                <img src={github} alt="imagem logo github"/>
            </div>
        </section>
    )
}