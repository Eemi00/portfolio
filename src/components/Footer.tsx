import '../styles/Footer.css'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-inner">
                <span className="text-muted">© {new Date().getFullYear()} Eemi</span>
                <div className="footer-links">
                    <a href="mailto:eemi.illik@gmail.com" aria-label="Sähköposti">
                        <i className="fa-solid fa-envelope"></i>
                    </a>
                    <a href="https://github.com/Eemi00" target="_blank" rel='noreferrer' aria-label="GitHub">
                        <i className="fa-brands fa-github"></i>
                    </a>
                </div>
            </div>
        </footer>
    )
}