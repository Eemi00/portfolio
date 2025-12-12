import { skills } from "../data/skills";
import '../styles/Skills.css'

export default function Skills() {
    return (
        <section className="skills">
            <div className="skills-header">
                <h2 className="section-title">Taidot</h2>
                <p className="text-muted">Ohjelmointikieliä ja -tekniikoita joilla rakennan nettisivut ja sovellukset.</p>
            </div>

            <div className="skills-marquee" aria-hidden>
                <div className="skills-marquee-track">
                    {[...skills, ...skills].map((skill, i) => (
                        <span className="skill-pill" key={`${skill}-${i}`}>{skill}</span>
                    ))}
                </div>
            </div>
        </section>
    )
}