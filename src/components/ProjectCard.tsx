import { Project } from '../data/projects';
import '../styles/ProjectCard.css'

type Props = {
    project: Project;
}

export default function ProjectCard({ project }: Props) {
    return (
        <article className="card project">
            <div className="project-top">
                <h3>{project.title}</h3>
                <div className="project-links">
                    <a href={project.live} target="_blank" rel="noreferrer">
                        Live <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                    <a href={project.repo} target="_blank" rel="noreferrer">
                        Repo <i className="fa-brands fa-github"></i>
                    </a>
                </div>
            </div>
            <p className="text-muted">{project.description}</p>
            <div className="project-tags">
                {project.tech.map((t) => (
                    <span key={t}>{t}</span>
                ))}
            </div>
        </article>
    )
}