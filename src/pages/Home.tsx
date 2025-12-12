import Hero from "../components/Hero";
import Skills from "../components/Skills";
import './Home.css'

export default function Home() {
    return (
        <div className="home">
            <Hero />
            <Skills />
            <section className="card contact">
                <div>
                    <h2 className="section-title">Yhteystiedot</h2>
                    <p className="text-muted">
                        Avoin uusille projekteille ja yhteistyöideoille. Ota yhteyttä sähköpostilla tai muista some palveluista.
                    </p>
                </div>
                <div className="contact-actions">
                    <a href="mailto:eemi.illik@gmail.com" className="pill primary">
                        <i className="fa-solid fa-envelope"></i> Sähköposti
                    </a>
                    <a href="https://github.com/Eemi00" className="pill ghost" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-github"></i> GitHub
                    </a>
                </div>
            </section>
        </div>
    )
}