import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import './Projects.css'

export default function Projects() {
    return (
        <div className="projects">
            <header className="projects-header">
                <h1 className="section-title">Projektit</h1>
                <p className="text-muted">
                    Kaikki projektini, jotka olen tuottanut joko oppiakseni uutta tai koulun projekteina!
                </p>
            </header>
            <div className="projects-grid">
                {projects.map((p) => (
                    <ProjectCard key={p.title} project={p} />
                ))}
            </div>
        </div>
    )
}