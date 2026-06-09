import './Header.css'
import { Link } from 'react-router-dom'

export default function Header() {

    return (
        <>
            <nav className="main-nav">
                <Link to={`/`} className="main-nav-logo">
                    <img
                        className="main-nav-logo-image"
                        src="./img/argentBankLogo.png"
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>
                <Link to={`/signin`}>
                    <div className="main-nav-item">
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </div>
                </Link>
            </nav>
        </>
    )
}