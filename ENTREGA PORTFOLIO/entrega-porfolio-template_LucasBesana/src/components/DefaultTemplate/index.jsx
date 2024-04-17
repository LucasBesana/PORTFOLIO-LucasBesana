import { Header } from "../HeaderSection";
import { Footer } from "../FooterSection";

export const DefaultTemplate = ({ children }) => {
    return (
        <>
            <Header/>
            <main>
                {children}
            </main>
            <Footer/>
        </>
    )
}