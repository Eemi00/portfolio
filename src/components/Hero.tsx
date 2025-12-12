import '../styles/Hero.css'

export default function Hero() {
    return (
        <section className="hero card">
            <div className="hero-bg" aria-hidden />
            <div className="hero-glow" aria-hidden />
            <div className="hero-content">
                <p className="hero-eyebrow">Tervetuloa</p>
                <h1 className="hero-title">
                    Hei, olen <span className="hero-accent">Eemi</span>.
                </h1>
                <p className="subtitle">
                    Opiskelen toista vuotta ohjelmistokehittäjäksi ammattikoulussa.
                </p>
                <div className="hero-actions">
                    <a href="mailto:eemi.illik@gmail.com" className="pill primary">Ota yhteyttä</a>
                    <a href="/projects" className="pill ghost">Tutustu projekteihini</a>
                </div>
                <div className="hero-split">
                    <div>
                        <p className="meta-label">Osaaminen</p>
                        <p className="meta-value">Front-end · UI · Back-end</p>
                    </div>
                    <div>
                        <p className="meta-label">Stackit</p>
                        <p className="meta-value">React · TypeScript · CSS</p>
                    </div>
                </div>
            </div>
        </section>
    )
}