import { NavLink } from "react-router-dom";
import '../styles/Nav.css'

export default function Nav() {
    return (
        <header className="nav">
            <div className="container nav-inner">
                <div className="nav-logo">Eemi</div>
                <div className="nav-links">
                    <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Koti</NavLink>
                    <NavLink to="/projects" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Projektit</NavLink>
                    <a href="https://whois.eemille.fi" className="nav-link">Whois</a>
                </div>
            </div>
        </header>
    )
}