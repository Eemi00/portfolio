import '../styles/Layout.css'
import Nav from './Nav'
import Footer from './Footer'

type Props = { children: React.ReactNode }

export default function Layout({ children }: Props) {
    return (
        <>
            <Nav />
            <main className="layout-main">
                <div className="container">{children}</div>
            </main>
            <Footer />
        </>
    )
}